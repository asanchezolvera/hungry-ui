export interface ResponsiveColumns {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export type ResponsiveValue<T> = T | {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type Size = 'small' | 'medium' | 'large' | 'xlarge' | 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link' | 'danger';
export type IconPosition = 'left' | 'right' | 'only';
export type ToastType = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type ModalSize = 'small' | 'medium' | 'large' | 'full';
export type Spacing = 'none' | 'small' | 'medium' | 'large';
export type Orientation = 'horizontal' | 'vertical' | 'responsive';
export type Alignment = 'start' | 'center' | 'end' | 'stretch';
export type Justification = 'start' | 'center' | 'end' | 'space-between';

export type ComponentSize = 'small' | 'medium' | 'large';

export interface ComponentConfig {
  disabled?: boolean;
  loading?: boolean;
}
