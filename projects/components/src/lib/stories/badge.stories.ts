import type { Meta, StoryObj } from '@storybook/angular';
import { HungryBadge } from '../badge/badge.component';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<HungryBadge> = {
  title: 'Components/Badge',
  component: HungryBadge,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="padding: 20px">${story}</div>`
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Content to display in the badge',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge',
    },
    dot: {
      control: 'boolean',
      description: 'Show as dot indicator',
    },
    showZero: {
      control: 'boolean',
      description: 'Show badge when content is zero',
    },
  },
};

export default meta;
type Story = StoryObj<HungryBadge>;

export const Default: Story = {
  args: {
    content: 'Badge',
    variant: 'default',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-badge [content]="content" [variant]="variant"></hungry-badge>`,
  }),
};

export const Primary: Story = {
  args: {
    content: 'Primary',
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-badge [content]="content" [variant]="variant"></hungry-badge>`,
  }),
};

export const Success: Story = {
  args: {
    content: 'Success',
    variant: 'success',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-badge [content]="content" [variant]="variant"></hungry-badge>`,
  }),
};

export const Warning: Story = {
  args: {
    content: 'Warning',
    variant: 'warning',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-badge [content]="content" [variant]="variant"></hungry-badge>`,
  }),
};

export const Danger: Story = {
  args: {
    content: 'Danger',
    variant: 'danger',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-badge [content]="content" [variant]="variant"></hungry-badge>`,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <hungry-badge content="Small" variant="primary" size="small"></hungry-badge>
        <hungry-badge content="Medium" variant="primary" size="medium"></hungry-badge>
        <hungry-badge content="Large" variant="primary" size="large"></hungry-badge>
      </div>
    `,
  }),
};

export const Numeric: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <hungry-badge [content]="5" variant="primary"></hungry-badge>
        <hungry-badge [content]="99" variant="success"></hungry-badge>
        <hungry-badge [content]="1000" variant="danger"></hungry-badge>
      </div>
    `,
  }),
};

export const Dot: Story = {
  args: {
    dot: true,
    variant: 'success',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-badge [dot]="dot" [variant]="variant"></hungry-badge>`,
  }),
};

export const DotVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <hungry-badge dot variant="default"></hungry-badge>
        <hungry-badge dot variant="primary"></hungry-badge>
        <hungry-badge dot variant="success"></hungry-badge>
        <hungry-badge dot variant="warning"></hungry-badge>
        <hungry-badge dot variant="danger"></hungry-badge>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <hungry-badge content="Default" variant="default"></hungry-badge>
        <hungry-badge content="Primary" variant="primary"></hungry-badge>
        <hungry-badge content="Success" variant="success"></hungry-badge>
        <hungry-badge content="Warning" variant="warning"></hungry-badge>
        <hungry-badge content="Danger" variant="danger"></hungry-badge>
      </div>
    `,
  }),
};

export const WithButton: Story = {
  render: () => ({
    template: `
      <div style="position: relative; display: inline-block;">
        <hungry-badge [content]="3" variant="danger" size="small" dot></hungry-badge>
      </div>
    `,
  }),
};
