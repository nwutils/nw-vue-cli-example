process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
  // preset: '@vue/cli-plugin-unit-jest',
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  moduleFileExtensions: [
    'vue',
    'js',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '^@@/(.*)$': '<rootDir>/tests/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/unit/setup.js'
  ],
  snapshotSerializers: [
    '<rootDir>/tests/unit/serializer.js'
  ],
  testMatch: [
    '**/tests/unit/**/*.test.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/tests/e2e/*',
    '<rootDir>/dist/*',
    '<rootDir>/dist-vue/*'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest'
  }
};
