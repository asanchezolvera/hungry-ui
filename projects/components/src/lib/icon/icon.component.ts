import { Component, input, computed, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge' | number;

@Directive({
  selector: '[hungryIcon]',
  standalone: true,
})
export class HungryIconDirective {
  constructor() {}
}

@Component({
  selector: 'hungry-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  host: {
    '[class]': 'hostClasses()',
    '[style.width]': 'computedSize()',
    '[style.height]': 'computedSize()',
    '[attr.role]': 'role()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.aria-label]': 'ariaLabel()',
  },
})
export class HungryIcon {
  name = input<string>('');
  path = input<string>('');
  size = input<IconSize>('medium');
  color = input<string>('');
  spin = input<boolean>(false);
  title = input<string>('');
  decorative = input<boolean>(true);

  constructor(private sanitizer: DomSanitizer) {}

  protected hostClasses = computed(() => {
    const classes = ['hungry-icon'];

    const size = this.size();
    if (typeof size === 'string') {
      classes.push(`hungry-icon--${size}`);
    }

    if (this.spin()) {
      classes.push('hungry-icon--spin');
    }

    return classes.join(' ');
  });

  protected computedSize = computed(() => {
    const size = this.size();
    if (typeof size === 'number') {
      return `${size}px`;
    }
    return null;
  });

  protected role = computed(() => {
    return this.decorative() ? 'img' : null;
  });

  protected ariaHidden = computed(() => {
    return this.decorative() ? 'true' : null;
  });

  protected ariaLabel = computed(() => {
    return this.decorative() ? null : this.title() || this.name();
  });

  protected svgContent = computed(() => {
    const path = this.path();
    if (!path) return '';

    return this.sanitizer.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${path}
      </svg>
    `);
  });

  protected getIconSizeInPixels(): string {
    const size = this.size();
    if (typeof size === 'number') {
      return `${size}px`;
    }

    const sizeMap: Record<string, string> = {
      small: '16px',
      medium: '20px',
      large: '24px',
      xlarge: '32px',
    };

    return sizeMap[size] || sizeMap['medium'];
  }
}
