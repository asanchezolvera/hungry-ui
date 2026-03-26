import type { Meta, StoryObj } from '@storybook/angular';
import { HungryLoadingSpinner } from '../loading-spinner/loading-spinner.component';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<HungryLoadingSpinner> = {
  title: 'Components/LoadingSpinner',
  component: HungryLoadingSpinner,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="padding: 20px">${story}</div>`
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the spinner',
    },
    color: {
      control: 'color',
      description: 'Custom color for the spinner',
    },
    label: {
      control: 'text',
      description: 'Accessibility label for screen readers',
    },
  },
};

export default meta;
type Story = StoryObj<HungryLoadingSpinner>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-loading-spinner [size]="size"></hungry-loading-spinner>`,
  }),
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-loading-spinner [size]="size"></hungry-loading-spinner>`,
  }),
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-loading-spinner [size]="size"></hungry-loading-spinner>`,
  }),
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-loading-spinner [size]="size"></hungry-loading-spinner>`,
  }),
};

export const CustomColor: Story = {
  args: {
    size: 'medium',
    color: '#ff6b6b',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-loading-spinner [size]="size" [color]="color"></hungry-loading-spinner>`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <hungry-loading-spinner size="small"></hungry-loading-spinner>
        <hungry-loading-spinner size="medium"></hungry-loading-spinner>
        <hungry-loading-spinner size="large"></hungry-loading-spinner>
      </div>
    `,
  }),
};

export const WithButton: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px;">
        <hungry-button variant="primary" loading>Loading</hungry-button>
        <hungry-button variant="secondary" loading>Loading</hungry-button>
      </div>
    `,
  }),
};

export const FullPage: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 200px; gap: 16px;">
        <hungry-loading-spinner size="large"></hungry-loading-spinner>
        <p>Loading content...</p>
      </div>
    `,
  }),
};
