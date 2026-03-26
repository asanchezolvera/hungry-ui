import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../projects/components/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/angular',
    options: {
      builderOptions: {
        tsConfigPath: './tsconfig.json',
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
