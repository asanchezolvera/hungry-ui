import type { Meta, StoryObj } from '@storybook/angular';
import { HungryIcon } from '../icon/icon.component';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<HungryIcon> = {
  title: 'Components/Icon',
  component: HungryIcon,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="padding: 20px">${story}</div>`
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    path: {
      control: 'text',
      description: 'SVG path for the icon',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Size of the icon',
    },
    color: {
      control: 'color',
      description: 'Custom color for the icon',
    },
    spin: {
      control: 'boolean',
      description: 'Enable spinning animation',
    },
    decorative: {
      control: 'boolean',
      description: 'Icon is decorative (no ARIA label)',
    },
  },
};

export default meta;
type Story = StoryObj<HungryIcon>;

const searchIconPath = `<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`;

export const Default: Story = {
  args: {
    path: searchIconPath,
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-icon [path]="path" [size]="size"></hungry-icon>`,
  }),
};

export const Small: Story = {
  args: {
    path: searchIconPath,
    size: 'small',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-icon [path]="path" [size]="size"></hungry-icon>`,
  }),
};

export const Medium: Story = {
  args: {
    path: searchIconPath,
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-icon [path]="path" [size]="size"></hungry-icon>`,
  }),
};

export const Large: Story = {
  args: {
    path: searchIconPath,
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-icon [path]="path" [size]="size"></hungry-icon>`,
  }),
};

export const ExtraLarge: Story = {
  args: {
    path: searchIconPath,
    size: 'xlarge',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-icon [path]="path" [size]="size"></hungry-icon>`,
  }),
};

export const CustomColor: Story = {
  args: {
    path: searchIconPath,
    size: 'medium',
    color: '#ff6b6b',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-icon [path]="path" [size]="size" [color]="color"></hungry-icon>`,
  }),
};

export const Spinning: Story = {
  args: {
    path: searchIconPath,
    size: 'medium',
    spin: true,
  },
  render: (args) => ({
    props: args,
    template: `<hungry-icon [path]="path" [size]="size" [spin]="spin"></hungry-icon>`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <hungry-icon [path]="'${searchIconPath}'" size="small"></hungry-icon>
        <hungry-icon [path]="'${searchIconPath}'" size="medium"></hungry-icon>
        <hungry-icon [path]="'${searchIconPath}'" size="large"></hungry-icon>
        <hungry-icon [path]="'${searchIconPath}'" size="xlarge"></hungry-icon>
      </div>
    `,
  }),
};

export const CommonIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <hungry-icon [path]="'${searchIconPath}'" size="medium" title="Search"></hungry-icon>
        <hungry-icon [path]="'<path d=\'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\'></path>'" size="medium" title="Heart"></hungry-icon>
        <hungry-icon [path]="'<path d=\'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\'></path><line x1=\'3\' y1=\'6\' x2=\'21\' y2=\'6\'></line><path d=\'M16 10a4 4 0 0 1-8 0\'></path>'" size="medium" title="Shopping Cart"></hungry-icon>
        <hungry-icon [path]="'<path d=\'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\'></path><circle cx=\'12\' cy=\'7\' r=\'4\'></circle>'" size="medium" title="User"></hungry-icon>
      </div>
    `,
  }),
};
