import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';
export type BadgeSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'hungry-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  host: {
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()',
    '[attr.aria-label]': 'ariaLabel()',
  },
})
export class HungryBadge {
  content = input<string | number>('');
  variant = input<BadgeVariant>('default');
  size = input<BadgeSize>('medium');
  dot = input<boolean>(false);
  showZero = input<boolean>(false);
  title = input<string>('');

  protected hostClasses = computed(() => {
    const classes = ['hungry-badge'];

    classes.push(`hungry-badge--${this.variant()}`);
    classes.push(`hungry-badge--${this.size()}`);

    if (this.dot()) {
      classes.push('hungry-badge--dot');
    }

    return classes.join(' ');
  });

  protected shouldRender = computed(() => {
    const content = this.content();
    if (typeof content === 'number' && content === 0 && !this.showZero()) {
      return false;
    }
    return true;
  });

  protected displayContent = computed(() => {
    if (this.dot()) {
      return '';
    }
    return this.content();
  });

  protected role = computed(() => {
    return this.dot() ? 'status' : null;
  });

  protected ariaLabel = computed(() => {
    if (this.title()) {
      return this.title();
    }
    if (!this.dot()) {
      return String(this.content());
    }
    return null;
  });
}
