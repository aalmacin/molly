module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    __TRANSFORM_HTML__: true
  },
  testPathIgnorePatterns: ["/node_modules/", "/projects/"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', '.html'],
};