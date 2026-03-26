import type { Meta, StoryObj } from '@storybook/angular';
import { HungrySkeletonLoader } from '../skeleton-loader/skeleton-loader.component';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<HungrySkeletonLoader> = {
  title: 'Components/SkeletonLoader',
  component: HungrySkeletonLoader,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="padding: 20px">${story}</div>`
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['circle', 'rectangle', 'text', 'custom'],
      description: 'Shape variant',
    },
    width: {
      control: 'text',
      description: 'Custom width (e.g., "100px", "50%")',
    },
    height: {
      control: 'text',
      description: 'Custom height (e.g., "100px", "50%")',
    },
    lines: {
      control: 'number',
      description: 'Number of lines for text variant',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'shimmer', 'wave', 'none'],
      description: 'Animation type',
    },
  },
};

export default meta;
type Story = StoryObj<HungrySkeletonLoader>;

export const Default: Story = {
  args: {
    variant: 'rectangle',
    width: '200px',
    height: '40px',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-skeleton-loader [variant]="variant" [width]="width" [height]="height"></hungry-skeleton-loader>`,
  }),
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: '80px',
    height: '80px',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-skeleton-loader [variant]="variant" [width]="width" [height]="height"></hungry-skeleton-loader>`,
  }),
};

export const Rectangle: Story = {
  args: {
    variant: 'rectangle',
    width: '300px',
    height: '200px',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-skeleton-loader [variant]="variant" [width]="width" [height]="height"></hungry-skeleton-loader>`,
  }),
};

export const Text: Story = {
  args: {
    variant: 'text',
    lines: 3,
  },
  render: (args) => ({
    props: args,
    template: `<hungry-skeleton-loader [variant]="variant" [lines]="lines"></hungry-skeleton-loader>`,
  }),
};

export const Pulse: Story = {
  args: {
    variant: 'rectangle',
    width: '200px',
    height: '40px',
    animation: 'pulse',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-skeleton-loader [variant]="variant" [width]="width" [height]="height" [animation]="animation"></hungry-skeleton-loader>`,
  }),
};

export const Shimmer: Story = {
  args: {
    variant: 'rectangle',
    width: '200px',
    height: '40px',
    animation: 'shimmer',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-skeleton-loader [variant]="variant" [width]="width" [height]="height" [animation]="animation"></hungry-skeleton-loader>`,
  }),
};

export const Wave: Story = {
  args: {
    variant: 'rectangle',
    width: '200px',
    height: '40px',
    animation: 'wave',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-skeleton-loader [variant]="variant" [width]="width" [height]="height" [animation]="animation"></hungry-skeleton-loader>`,
  }),
};

export const AllShapes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <hungry-skeleton-loader variant="circle" width="60px" height="60px"></hungry-skeleton-loader>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <hungry-skeleton-loader variant="rectangle" width="200px" height="24px"></hungry-skeleton-loader>
          <hungry-skeleton-loader variant="rectangle" width="150px" height="16px"></hungry-skeleton-loader>
        </div>
      </div>
    `,
  }),
};

export const ProductCardSkeleton: Story = {
  render: () => ({
    template: `
      <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; max-width: 300px;">
        <hungry-skeleton-loader variant="rectangle" width="100%" height="200px"></hungry-skeleton-loader>
        <div style="margin-top: 16px;">
          <hungry-skeleton-loader variant="text" [lines]="2"></hungry-skeleton-loader>
        </div>
        <div style="margin-top: 12px;">
          <hungry-skeleton-loader variant="rectangle" width="100px" height="32px"></hungry-skeleton-loader>
        </div>
      </div>
    `,
  }),
};

export const AllAnimations: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p>Pulse:</p>
          <hungry-skeleton-loader variant="rectangle" width="200px" height="40px" animation="pulse"></hungry-skeleton-loader>
        </div>
        <div>
          <p>Shimmer:</p>
          <hungry-skeleton-loader variant="rectangle" width="200px" height="40px" animation="shimmer"></hungry-skeleton-loader>
        </div>
        <div>
          <p>Wave:</p>
          <hungry-skeleton-loader variant="rectangle" width="200px" height="40px" animation="wave"></hungry-skeleton-loader>
        </div>
        <div>
          <p>None:</p>
          <hungry-skeleton-loader variant="rectangle" width="200px" height="40px" animation="none"></hungry-skeleton-loader>
        </div>
      </div>
    `,
  }),
};
