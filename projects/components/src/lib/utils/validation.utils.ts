/**
 * Validation utilities
 */

export interface ValidationRule {
  validator: (value: any) => boolean;
  errorMessage: string;
}

/**
 * Email validation
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Phone number validation (US format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?1?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(phone);
}

/**
 * URL validation
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Password strength validation
 */
export interface PasswordStrength {
  score: number; // 0-4
  strength: 'weak' | 'fair' | 'good' | 'strong';
  feedback: string[];
}

export function validatePassword(password: string): PasswordStrength {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) {
    score++;
  } else {
    feedback.push('Password must be at least 8 characters');
  }

  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    score++;
  } else {
    feedback.push('Include both uppercase and lowercase letters');
  }

  if (/\d/.test(password)) {
    score++;
  } else {
    feedback.push('Include at least one number');
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score++;
  } else {
    feedback.push('Include at least one special character');
  }

  let strength: PasswordStrength['strength'] = 'weak';
  if (score === 4) strength = 'strong';
  else if (score === 3) strength = 'good';
  else if (score === 2) strength = 'fair';

  return { score, strength, feedback };
}

/**
 * Credit card validation (Luhn algorithm)
 */
export function isValidCreditCard(cardNumber: string): boolean {
  const sanitized = cardNumber.replace(/\D/g, '');

  if (sanitized.length < 13 || sanitized.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

/**
 * ZIP code validation (US)
 */
export function isValidZip(zip: string): boolean {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zip);
}

/**
 * Required field validation
 */
export function isRequired(value: any): boolean {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return true;
}

/**
 * Min length validation
 */
export function minLength(value: string, min: number): boolean {
  return value.length >= min;
}

/**
 * Max length validation
 */
export function maxLength(value: string, max: number): boolean {
  return value.length <= max;
}

/**
 * Pattern validation
 */
export function matchesPattern(value: string, pattern: RegExp): boolean {
  return pattern.test(value);
}

/**
 * Range validation for numbers
 */
export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * Date validation
 */
export function isValidDate(date: string | Date): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d instanceof Date && !isNaN(d.getTime());
}

/**
 * Future date validation
 */
export function isFutureDate(date: string | Date): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  return isValidDate(d) && d > new Date();
}

/**
 * Past date validation
 */
export function isPastDate(date: string | Date): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  return isValidDate(d) && d < new Date();
}

/**
 * Build validation rules
 */
export function buildValidationRules(rules: ValidationRule[]) {
  return (value: any): string | null => {
    for (const rule of rules) {
      if (!rule.validator(value)) {
        return rule.errorMessage;
      }
    }
    return null;
  };
}
