module.exports = {
  preset: 'jest-preset-angular',
  transform: {
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    '.html'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-jest.ts'],
  setupFiles: ['<rootDir>/.jest/setup-require-context.js'],
  transformIgnorePatterns: [
    'node_modules'
  ]
};