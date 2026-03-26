<div align="center">

# 🛒 Hungry UI

**A minimally styled, copy/paste-ready component library for Angular, optimized for ecommerce.**

[![npm version](https://badge.fury.io/js/%40hungry-ui%2Fcomponents.svg)](https://www.npmjs.com/package/@hungry-ui/components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-18+-red.svg)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)

Beautifully designed, accessible components that you can customize, extend, and build on. Start here then make it your own.

**[Documentation](https://hungry-ui.dev/docs)** • **[Storybook](https://hungry-ui.dev)** • **[Examples](https://examples.hungry-ui.dev)**

</div>

---

## ✨ Features

- **🛍️ Ecommerce-First**: Components specifically designed for product catalogs, carts, checkout flows, and marketing
- **♿ Accessibility-First**: Full WCAG 2.2 AA compliance built into every component
- **⚡ Angular 18+ Native**: Leverages standalone components, signals, and latest Angular features
- **🎨 Flexible Theming**: CSS custom properties with Tailwind integration for easy customization
- **📦 Dual Distribution**: Install via npm or copy/paste components directly into your project
- **🌍 Platform Agnostic**: Works with any ecommerce backend or platform
- **⚡ Performance Optimized**: OnPush change detection, lazy loading, and virtual scrolling support

## 🚀 Quick Start

### Installation

```bash
npm install @hungry-ui/components
# or
yarn add @hungry-ui/components
# or
pnpm add @hungry-ui/components
```

### Setup

1. **Configure Tailwind CSS** (if not already set up):

```bash
npx tailwindcss init -p
```

2. **Add Hungry UI to your Tailwind config**:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/@hungry-ui/components/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Hungry UI colors
        primary: 'var(--color-primary-500)',
        'primary-hover': 'var(--color-primary-600)',
        secondary: 'var(--color-secondary-500)',
        success: 'var(--color-success-500)',
        warning: 'var(--color-warning-500)',
        danger: 'var(--color-danger-500)',
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
      },
    },
  },
  plugins: [],
};
```

3. **Import the Hungry UI stylesheet**:

```css
/* styles.css */
@import '@hungry-ui/components/styles';

/* Your custom styles */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Import components in your app**:

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  ],
};
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { HungryButton } from '@hungry-ui/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HungryButton],
  template: `
    <hungry-button variant="primary" size="large">
      Add to Cart
    </hungry-button>
  `,
})
export class AppComponent {}
```

## 📚 Documentation

For detailed documentation, visit **[hungry-ui.dev/docs](https://hungry-ui.dev/docs)**

### Component Categories

#### Foundation Components
Basic UI elements used throughout your application.
- Button, Input, Card, Icon, Badge, Container, Grid, Stack, Select, Checkbox, RadioGroup, FormField

#### Navigation Components
Navigation elements for your application.
- Header/Navbar, MegaMenu, Breadcrumbs, Search

#### Feedback Components
User feedback and notification components.
- Modal/Dialog, Toast/Notification, SkeletonLoader, LoadingSpinner

#### Ecommerce Components
Ecommerce-specific components for product catalogs, carts, and checkout.
- ProductCard, ProductGallery, ShoppingCart, SearchAutocomplete, CheckoutProgress, AddressForm, PaymentForm, OrderConfirmation, ProductComparison, Wishlist, ReviewForm, RatingDisplay, FacetFilter, PromoBanner

## 🎨 Theming

Hungry UI uses CSS custom properties for theming, making it easy to customize the look and feel to match your brand.

### Available Themes

```typescript
import { provideHungryUITheme } from '@hungry-ui/components';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHungryUITheme({
      name: 'default', // 'default' | 'dark' | 'slate' | 'emerald' | 'rose' | 'neutral'
    }),
  ],
};
```

### Custom Themes

Create custom themes by defining CSS custom properties:

```css
:root[data-theme="my-brand"] {
  --color-primary-500: #ff6b6b;
  --color-primary-600: #e05555;
  --color-secondary-500: #4ecdc4;
  --color-secondary-600: #3dbdb4;
  /* ... more custom colors */
}
```

```typescript
// Apply your custom theme
export const appConfig: ApplicationConfig = {
  providers: [
    provideHungryUITheme({
      name: 'my-brand',
      custom: true,
    }),
  ],
};
```

See the [Theming Guide](https://hungry-ui.dev/docs/theming) for more details.

## ♿ Accessibility

Hungry UI is built with accessibility as a first-class citizen. Every component:

- ✅ Meets WCAG 2.2 AA standards
- ✅ Supports keyboard navigation
- ✅ Includes proper ARIA attributes
- ✅ Has visible focus indicators
- ✅ Works with screen readers (NVDA, JAWS, VoiceOver, TalkBack)
- ✅ Maintains color contrast ratios (4.5:1 for normal text, 3:1 for large text)

For accessibility guidelines, see the [Accessibility Guide](https://hungry-ui.dev/docs/accessibility).

## 🔧 Copy/Paste Components

Prefer full control over your components? You can copy individual components directly into your project.

1. Visit the [Component Documentation](https://hungry-ui.dev/docs/components)
2. Select the component you want
3. Click the **"Copy Code"** button
4. Paste the code into your project
5. Install any required dependencies
6. Copy the styles (Tailwind classes + CSS variables)

No npm installation required!

## 📦 Component API

Each component follows a consistent API pattern:

```typescript
import { HungryButton } from '@hungry-ui/components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [HungryButton],
  template: `
    <hungry-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      (clicked)="handleClick($event)">
      Click me
    </hungry-button>
  `,
})
export class ExampleComponent {
  variant = 'primary';
  size = 'medium';
  disabled = false;
  loading = false;

  handleClick(event: MouseEvent) {
    console.log('Button clicked!', event);
  }
}
```

See individual component documentation for full API details.

## 🎯 Examples

Check out our [example ecommerce site](https://examples.hungry-ui.dev) to see Hungry UI in action:

- Product catalog with filtering
- Shopping cart flow
- Multi-step checkout process
- Product detail pages
- User account pages

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://hungry-ui.dev/docs/contributing) for details.

### Development

```bash
# Clone the repository
git clone https://github.com/hungry-ui/hungry-ui.git
cd hungry-ui

# Install dependencies
npm install

# Start the development server
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Run Storybook
npm run storybook
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [shadcn/ui](https://ui.shadcn.com)
- Built with [Angular](https://angular.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Accessibility patterns from [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

## 📞 Support

- 📖 [Documentation](https://hungry-ui.dev/docs)
- 🎨 [Storybook](https://hungry-ui.dev)
- 💬 [GitHub Discussions](https://github.com/hungry-ui/hungry-ui/discussions)
- 🐛 [GitHub Issues](https://github.com/hungry-ui/hungry-ui/issues)
- 📧 [Email](mailto:support@hungry-ui.dev)

## 🗺️ Roadmap

- [ ] Phase 1: Foundation Components (Q2 2026)
- [ ] Phase 2: Ecommerce Core (Q3 2026)
- [ ] Phase 3: Enhanced Features (Q4 2026)
- [ ] Phase 4: Public Launch (Q1 2027)

See our [GitHub Projects](https://github.com/hungry-ui/hungry-ui/projects) for detailed roadmap and progress.

---

<div align="center">

**Built with ❤️ for the Angular community**

[⭐ Star us on GitHub](https://github.com/hungry-ui/hungry-ui) • [🐦 Follow us on Twitter](https://twitter.com/hungryui) • [💬 Join our Discord](https://discord.gg/hungryui)

</div>
