/**
 * Accessibility utilities
 */

/**
 * Generate a unique ID for accessibility purposes
 */
export function generateId(prefix: string = 'hungry'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Announce message to screen readers via ARIA live region
 */
export function announce(message: string, politeness: 'polite' | 'assertive' = 'polite'): void {
  const element = document.createElement('div');
  element.setAttribute('aria-live', politeness);
  element.setAttribute('aria-atomic', 'true');
  element.className = 'sr-only';
  element.textContent = message;
  document.body.appendChild(element);

  setTimeout(() => {
    document.body.removeChild(element);
  }, 1000);
}

/**
 * Trap focus within a container element
 */
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        event.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);
  firstFocusable?.focus();

  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Return focus to previously focused element
 */
export function restoreFocus(previousFocus: HTMLElement | null): void {
  if (previousFocus) {
    previousFocus.focus();
  }
}

/**
 * Check if element is visible
 */
export function isElementVisible(element: HTMLElement): boolean {
  return element.offsetWidth > 0 && element.offsetHeight > 0;
}
