module.exports = {
  globals: {
    __TRANSFORM_HTML__: true
  },
  testPathIgnorePatterns: ["/node_modules/", "/projects/"],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|html)$': 'jest-preset-angular'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', '.html'],
};