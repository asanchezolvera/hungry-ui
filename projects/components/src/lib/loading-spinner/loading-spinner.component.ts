import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type LoadingSpinnerSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'hungry-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  host: {
    '[class]': 'hostClasses()',
    '[attr.role]': '"status"',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-live]': '"polite"',
  },
})
export class HungryLoadingSpinner {
  size = input<LoadingSpinnerSize>('medium');
  color = input<string>('');
  label = input<string>('Loading...');

  protected hostClasses = computed(() => {
    const classes = ['hungry-loading-spinner'];

    classes.push(`hungry-loading-spinner--${this.size()}`);

    return classes.join(' ');
  });

  protected ariaLabel = computed(() => this.label());
}
