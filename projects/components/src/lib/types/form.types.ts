export interface SelectOption {
  label: string;
  value: any;
  group?: string;
  disabled?: boolean;
}

export interface RadioOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface ReviewCategory {
  id: string;
  label: string;
  required: boolean;
}

export interface FilterGroup {
  id: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range' | 'color';
  options: FilterOption[];
  collapsible: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
  value: any;
  count?: number;
  color?: string;
}
