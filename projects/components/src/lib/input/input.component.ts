import { Component, input, output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateId } from '../utils';

@Component({
  selector: 'hungry-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  host: {
    '[class]': 'hostClasses()',
  },
})
export class HungryInput {
  type = input<string>('text');
  label = input<string>('');
  placeholder = input<string>('');
  helperText = input<string>('');
  errorText = input<string>('');
  value = input<string>('');
  disabled = input<boolean>(false);
  readonly = input<boolean>(false);
  required = input<boolean>(false);
  showCharCount = input<boolean>(false);
  maxLength = input<number | undefined>(undefined);
  prefix = input<string>('');
  suffix = input<string>('');

  valueChange = output<string>();
  focus = output<FocusEvent>();
  blur = output<FocusEvent>();

  readonly inputId = signal<string>(generateId('input'));
  readonly helperId = signal<string>(generateId('helper'));
  readonly errorId = signal<string>(generateId('error'));

  protected currentValue = signal<string>('');

  protected hasError = computed(() => this.errorText().length > 0);

  protected ariaDescribedBy = computed(() => {
    const ids: string[] = [];
    if (this.helperText()) ids.push(this.helperId());
    if (this.hasError()) ids.push(this.errorId());
    return ids.length > 0 ? ids.join(' ') : null;
  });

  protected ariaInvalid = computed(() => this.hasError());

  protected remainingChars = computed(() => {
    if (!this.maxLength()) return null;
    return this.maxLength()! - this.currentValue().length;
  });

  protected handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;
    this.currentValue.set(newValue);
    this.valueChange.emit(newValue);
  }

  protected handleFocus(event: FocusEvent): void {
    this.focus.emit(event);
  }

  protected handleBlur(event: FocusEvent): void {
    this.blur.emit(event);
  }

  protected handleClear(): void {
    this.currentValue.set('');
    this.valueChange.emit('');
  }
}
