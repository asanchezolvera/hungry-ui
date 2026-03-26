/**
 * Formatting utilities
 */

/**
 * Format currency with proper locale
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format price display with discount
 */
export function formatPrice(price: { current: number; original?: number; currency: string; discount?: number }): string {
  const { current, original, currency } = price;

  if (original && original > current) {
    return `<span class="line-through text-neutral-400">${formatCurrency(original, currency)}</span> ${formatCurrency(current, currency)}`;
  }

  return formatCurrency(current, currency);
}

/**
 * Calculate discount percentage
 */
export function calculateDiscountPercentage(current: number, original: number): number {
  return Math.round(((original - current) / original) * 100);
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number = 100): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Deep clone object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Merge objects with deep clone
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key as keyof T])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key as keyof T] });
        } else {
          output[key as keyof T] = deepMerge(
            target[key as keyof T] as object,
            source[key as keyof T] as object
          ) as T[keyof T];
        }
      } else {
        Object.assign(output, { [key]: source[key as keyof T] });
      }
    });
  }

  return output;
}

function isObject(item: unknown): item is object {
  return item !== null && typeof item === 'object';
}
