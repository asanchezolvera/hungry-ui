import type { Meta, StoryObj } from '@storybook/angular';
import { HungryButton } from '../button/button.component';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<HungryButton> = {
  title: 'Components/Button',
  component: HungryButton,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="padding: 20px">${story}</div>`
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'link', 'danger'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state with spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
  },
};

export default meta;
type Story = StoryObj<HungryButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-button [variant]="variant" [size]="size">Primary Button</hungry-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-button [variant]="variant" [size]="size">Secondary Button</hungry-button>`,
  }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-button [variant]="variant" [size]="size">Ghost Button</hungry-button>`,
  }),
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-button [variant]="variant" [size]="size">Link Button</hungry-button>`,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-button [variant]="variant" [size]="size">Danger Button</hungry-button>`,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <hungry-button variant="primary" size="small">Small</hungry-button>
        <hungry-button variant="primary" size="medium">Medium</hungry-button>
        <hungry-button variant="primary" size="large">Large</hungry-button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-button [disabled]="disabled" [variant]="variant">Disabled Button</hungry-button>`,
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-button [loading]="loading" [variant]="variant">Loading</hungry-button>`,
  }),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-button [fullWidth]="fullWidth" [variant]="variant">Full Width Button</hungry-button>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <hungry-button variant="primary">Primary</hungry-button>
        <hungry-button variant="secondary">Secondary</hungry-button>
        <hungry-button variant="ghost">Ghost</hungry-button>
        <hungry-button variant="link">Link</hungry-button>
        <hungry-button variant="danger">Danger</hungry-button>
      </div>
    `,
  }),
};
