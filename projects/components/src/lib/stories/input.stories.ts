import type { Meta, StoryObj } from '@storybook/angular';
import { HungryInput } from '../input/input.component';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<HungryInput> = {
  title: 'Components/Input',
  component: HungryInput,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="padding: 20px; max-width: 400px;">${story}</div>`
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below input',
    },
    errorText: {
      control: 'text',
      description: 'Error text displayed below input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    readonly: {
      control: 'boolean',
      description: 'Make input read-only',
    },
    required: {
      control: 'boolean',
      description: 'Mark input as required',
    },
    showCharCount: {
      control: 'boolean',
      description: 'Show character count',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    prefix: {
      control: 'text',
      description: 'Prefix text/icon',
    },
    suffix: {
      control: 'text',
      description: 'Suffix text/icon',
    },
  },
};

export default meta;
type Story = StoryObj<HungryInput>;

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [type]="type" [placeholder]="placeholder"></hungry-input>`,
  }),
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [type]="type" [placeholder]="placeholder" [helperText]="helperText"></hungry-input>`,
  }),
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    errorText: 'Please enter a valid email address',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [type]="type" [placeholder]="placeholder" [errorText]="errorText"></hungry-input>`,
  }),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    value: 'Disabled value',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [placeholder]="placeholder" [disabled]="disabled" [value]="value"></hungry-input>`,
  }),
};

export const Readonly: Story = {
  args: {
    label: 'Readonly Input',
    placeholder: 'This input is readonly',
    readonly: true,
    value: 'Readonly value',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [placeholder]="placeholder" [readonly]="readonly" [value]="value"></hungry-input>`,
  }),
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [placeholder]="placeholder" [required]="required"></hungry-input>`,
  }),
};

export const WithMaxLength: Story = {
  args: {
    label: 'Bio',
    type: 'text',
    placeholder: 'Tell us about yourself',
    maxLength: 100,
    showCharCount: true,
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [type]="type" [placeholder]="placeholder" [maxLength]="maxLength" [showCharCount]="showCharCount"></hungry-input>`,
  }),
};

export const WithPrefix: Story = {
  args: {
    label: 'Website',
    type: 'url',
    placeholder: 'example.com',
    prefix: 'https://',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [type]="type" [placeholder]="placeholder" [prefix]="prefix"></hungry-input>`,
  }),
};

export const WithSuffix: Story = {
  args: {
    label: 'Price',
    type: 'number',
    placeholder: '0.00',
    suffix: 'USD',
  },
  render: (args) => ({
    props: args,
    template: `<hungry-input [label]="label" [type]="type" [placeholder]="placeholder" [suffix]="suffix"></hungry-input>`,
  }),
};

export const AllInputTypes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <hungry-input label="Text" type="text" placeholder="Text input"></hungry-input>
        <hungry-input label="Email" type="email" placeholder="Email input"></hungry-input>
        <hungry-input label="Password" type="password" placeholder="Password input"></hungry-input>
        <hungry-input label="Number" type="number" placeholder="Number input"></hungry-input>
        <hungry-input label="Tel" type="tel" placeholder="Phone input"></hungry-input>
        <hungry-input label="URL" type="url" placeholder="URL input"></hungry-input>
        <hungry-input label="Search" type="search" placeholder="Search input"></hungry-input>
      </div>
    `,
  }),
};

export const FormExample: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <hungry-input label="First Name" placeholder="John" required></hungry-input>
        <hungry-input label="Last Name" placeholder="Doe" required></hungry-input>
        <hungry-input label="Email" type="email" placeholder="john@example.com" required helperText="We'll never share your email."></hungry-input>
        <hungry-input label="Password" type="password" placeholder="••••••••" required maxLength="20" showCharCount="true"></hungry-input>
      </div>
    `,
  }),
};
