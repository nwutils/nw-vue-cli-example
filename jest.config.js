process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  setupFilesAfterEnv: [
    '<rootDir>/tests/unit/setup.js'
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue-tjw'
  ],
  testMatch: [
    '**/tests/unit/**/*.test.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/tests/e2e',
    '<rootDir>/dist',
    '<rootDir>/dist-vue'
  ]
};
