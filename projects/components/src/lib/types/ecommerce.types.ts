export interface ProductImage {
  url: string;
  alt: string;
}

export interface Price {
  current: number;
  original?: number;
  currency: string;
  discount?: number;
}

export interface Rating {
  average: number;
  count: number;
}

export interface ProductVariant {
  type: 'color' | 'size';
  value: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  images: ProductImage[];
  price: Price;
  rating?: Rating;
  availability: 'in-stock' | 'low-stock' | 'out-of-stock';
  badges?: string[];
  variants?: ProductVariant[];
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: Price;
  variant?: ProductVariant;
}

export interface Address {
  id?: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault?: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'apple-pay' | 'google-pay' | 'other';
  label: string;
  icon?: string;
  last4?: string;
  expiry?: string;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  price: Price;
}

export interface Order {
  id: string;
  date: Date;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency: string;
  shippingAddress: Address;
  estimatedDelivery: Date;
  trackingUrl?: string;
}

export interface Review {
  productId: string;
  rating: number;
  categories: Record<string, number>;
  title: string;
  body: string;
  pros?: string[];
  cons?: string[];
  images?: string[];
  anonymous: boolean;
}

export interface CheckoutStep {
  id: number;
  label: string;
  completed: boolean;
  disabled: boolean;
}

export interface ComparisonFeature {
  id: string;
  label: string;
  value: (product: Product) => string | boolean;
  highlightDifferences: boolean;
}

export interface PromoAction {
  label: string;
  link?: string;
  handler?: () => void;
}
