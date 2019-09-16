process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!**/node_modules/**'
  ],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/unit/setup.js'
  ],
  snapshotSerializers: [
    '<rootDir>/tests/unit/serializer.js'
  ],
  testEnvironment: 'jest-environment-jsdom-global',
  testMatch: [
    '**/tests/unit/**/*.test.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/tests/e2e'
  ],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
