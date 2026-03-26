module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/projects/components/src/lib/$1',
    '@components': '<rootDir>/projects/components/src/public-api',
  },
  transformIgnorePatterns: ['node_modules/(?!@storybook|@ngneat)']
};
