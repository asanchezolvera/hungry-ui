import {
  Component,
  input,
  output,
  contentChild,
  TemplateRef,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardPadding = 'none' | 'small' | 'medium' | 'large';
export type CardVariant = 'default' | 'outlined' | 'filled';

@Component({
  selector: 'hungry-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    '[class]': 'hostClasses()',
    '[attr.role]': '"article"',
    '[tabindex]': 'clickable() ? "0" : null',
    '(click)': 'handleClick($event)',
    '(keydown.enter)': 'handleKeyDown($event)',
    '(keydown.space)': 'handleKeyDown($event)',
  },
})
export class HungryCard {
  header = contentChild<TemplateRef<unknown>>('header');
  footer = contentChild<TemplateRef<unknown>>('footer');

  padding = input<CardPadding>('medium');
  bordered = input<boolean>(true);
  elevated = input<boolean>(false);
  clickable = input<boolean>(false);
  variant = input<CardVariant>('default');

  clicked = output<MouseEvent>();

  protected hostClasses = computed(() => {
    const classes = ['hungry-card'];

    classes.push(`hungry-card--${this.variant()}`);
    classes.push(`hungry-card--padding-${this.padding()}`);

    if (this.bordered()) {
      classes.push('hungry-card--bordered');
    }

    if (this.elevated()) {
      classes.push('hungry-card--elevated');
    }

    if (this.clickable()) {
      classes.push('hungry-card--clickable');
    }

    return classes.join(' ');
  });

  protected handleClick(event: MouseEvent): void {
    if (this.clickable()) {
      this.clicked.emit(event);
    }
  }

  protected handleKeyDown(event: KeyboardEvent): void {
    if (this.clickable() && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.clicked.emit(event as unknown as MouseEvent);
    }
  }
}
