import type { Meta, StoryObj } from '@storybook/angular';
import { HungryCard } from '../card/card.component';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<HungryCard> = {
  title: 'Components/Card',
  component: HungryCard,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="padding: 20px">${story}</div>`
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Padding size',
    },
    bordered: {
      control: 'boolean',
      description: 'Show border',
    },
    elevated: {
      control: 'boolean',
      description: 'Show elevation/shadow',
    },
    clickable: {
      control: 'boolean',
      description: 'Make card clickable',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled'],
      description: 'Visual style variant',
    },
  },
};

export default meta;
type Story = StoryObj<HungryCard>;

export const Default: Story = {
  args: {
    bordered: true,
    padding: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <hungry-card [bordered]="bordered" [padding]="padding">
        <h3>Card Title</h3>
        <p>This is a card with some content inside it.</p>
      </hungry-card>
    `,
  }),
};

export const WithHeader: Story = {
  args: {
    bordered: true,
    padding: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <hungry-card [bordered]="bordered" [padding]="padding">
        <ng-template #header>
          <h3>Card Header</h3>
        </ng-template>
        <p>This is the card content.</p>
      </hungry-card>
    `,
  }),
};

export const WithFooter: Story = {
  args: {
    bordered: true,
    padding: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <hungry-card [bordered]="bordered" [padding]="padding">
        <p>This is the card content.</p>
        <ng-template #footer>
          <button>Action</button>
        </ng-template>
      </hungry-card>
    `,
  }),
};

export const WithHeaderAndFooter: Story = {
  args: {
    bordered: true,
    padding: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <hungry-card [bordered]="bordered" [padding]="padding">
        <ng-template #header>
          <h3>Complete Card</h3>
        </ng-template>
        <p>This card has both header and footer sections.</p>
        <ng-template #footer>
          <button>Cancel</button>
          <button>Confirm</button>
        </ng-template>
      </hungry-card>
    `,
  }),
};

export const Elevated: Story = {
  args: {
    bordered: false,
    elevated: true,
    padding: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <hungry-card [bordered]="bordered" [elevated]="elevated" [padding]="padding">
        <h3>Elevated Card</h3>
        <p>This card has a shadow/elevation effect.</p>
      </hungry-card>
    `,
  }),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <hungry-card [variant]="variant" [padding]="padding">
        <h3>Outlined Card</h3>
        <p>This card uses the outlined variant.</p>
      </hungry-card>
    `,
  }),
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    padding: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <hungry-card [variant]="variant" [padding]="padding">
        <h3>Filled Card</h3>
        <p>This card uses the filled variant.</p>
      </hungry-card>
    `,
  }),
};

export const Clickable: Story = {
  args: {
    bordered: true,
    clickable: true,
    padding: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <hungry-card [bordered]="bordered" [clickable]="clickable" [padding]="padding" (clicked)="console.log('Card clicked!')">
        <h3>Clickable Card</h3>
        <p>Click this card to trigger an event.</p>
      </hungry-card>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
        <hungry-card bordered padding="medium">
          <h3>Default</h3>
          <p>Standard card with border</p>
        </hungry-card>
        <hungry-card variant="outlined" padding="medium">
          <h3>Outlined</h3>
          <p>Card with outlined style</p>
        </hungry-card>
        <hungry-card variant="filled" padding="medium">
          <h3>Filled</h3>
          <p>Card with filled background</p>
        </hungry-card>
        <hungry-card elevated padding="medium">
          <h3>Elevated</h3>
          <p>Card with shadow effect</p>
        </hungry-card>
      </div>
    `,
  }),
};

export const ProductCard: Story = {
  render: () => ({
    template: `
      <hungry-card bordered elevated clickable padding="small">
        <div style="text-align: center;">
          <div style="width: 100%; height: 200px; background: #f0f0f0; border-radius: 8px; margin-bottom: 12px;"></div>
          <h3>Product Name</h3>
          <p>$99.99</p>
          <button>Add to Cart</button>
        </div>
      </hungry-card>
    `,
  }),
};
