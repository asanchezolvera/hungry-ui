import {
  Component,
  input,
  output,
  computed,
  signal,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateId } from '../utils';
import { ButtonVariant } from '../types';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonIconPosition = 'left' | 'right' | 'only';

@Component({
  selector: 'hungry-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class]': 'hostClasses()',
    '[attr.disabled]': 'disabled() || loading() ? true : null',
    '[attr.aria-disabled]': 'disabled() || loading()',
    '[attr.aria-busy]': 'loading()',
  },
})
export class HungryButton {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('medium');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  icon = input<TemplateRef<unknown> | null>(null);
  iconPosition = input<ButtonIconPosition>('left');
  fullWidth = input<boolean>(false);

  clicked = output<MouseEvent>();
  focus = output<FocusEvent>();
  blur = output<FocusEvent>();

  readonly buttonId = signal<string>(generateId('button'));

  protected iconOnly = computed(() => this.iconPosition() === 'only');

  protected hostClasses = computed(() => {
    const classes = ['hungry-button'];

    classes.push(`hungry-button--${this.variant()}`);
    classes.push(`hungry-button--${this.size()}`);

    if (this.fullWidth()) {
      classes.push('hungry-button--full-width');
    }

    if (this.disabled() || this.loading()) {
      classes.push('hungry-button--disabled');
    }

    if (this.loading()) {
      classes.push('hungry-button--loading');
    }

    if (this.iconOnly()) {
      classes.push('hungry-button--icon-only');
    }

    return classes.join(' ');
  });

  protected handleClick(event: MouseEvent): void {
    if (!this.disabled() && !this.loading()) {
      this.clicked.emit(event);
    }
  }

  protected handleFocus(event: FocusEvent): void {
    this.focus.emit(event);
  }

  protected handleBlur(event: FocusEvent): void {
    this.blur.emit(event);
  }
}
