import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SkeletonVariant = 'circle' | 'rectangle' | 'text' | 'custom';
export type SkeletonAnimation = 'pulse' | 'shimmer' | 'wave' | 'none';

@Component({
  selector: 'hungry-skeleton-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  host: {
    '[class]': 'hostClasses()',
    '[attr.role]': '"status"',
    '[attr.aria-label]': '"Loading"',
    '[attr.aria-busy]': '"true"',
  },
})
export class HungrySkeletonLoader {
  variant = input<SkeletonVariant>('rectangle');
  width = input<string>('');
  height = input<string>('');
  lines = input<number>(3);
  animation = input<SkeletonAnimation>('pulse');

  protected hostClasses = computed(() => {
    const classes = ['hungry-skeleton-loader'];

    classes.push(`hungry-skeleton-loader--${this.variant()}`);
    classes.push(`hungry-skeleton-loader--${this.animation()}`);

    return classes.join(' ');
  });

  protected computedStyles = computed(() => {
    const styles: { [key: string]: string } = {};

    const width = this.width();
    const height = this.height();

    if (width) styles['width'] = width;
    if (height) styles['height'] = height;

    return styles;
  });

  protected lineNumbers = computed(() =>
    Array.from({ length: this.lines() }, (_, i) => i)
  );
}
