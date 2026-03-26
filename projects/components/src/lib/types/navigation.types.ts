export interface NavLink {
  label: string;
  path: string;
  active?: boolean;
  children?: NavLink[];
}

export interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
  featured?: FeaturedItem[];
  image?: string;
}

export interface FeaturedItem {
  id: string;
  label: string;
  path: string;
  image?: string;
  price?: number;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface SearchCategory {
  id: string;
  label: string;
  path?: string;
}

export interface SearchResult {
  type: 'product' | 'category' | 'suggestion';
  title: string;
  url?: string;
  image?: string;
  price?: number;
  category?: string;
  currency?: string;
}

export interface SearchEvent {
  query: string;
  category?: string;
}
