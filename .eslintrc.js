module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    jsdom: true,
    Promise: true,
    nw: true,
    Vue: true,
    Vuex: true,
    VueRouter: true,
    store: true,
    router: true
  },
  plugins: [
    'jest',
    'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:vue-a11y/recommended',
    'tjw-base',
    'tjw-vue'
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      'Property[method="true"]'
    ],
    // https://github.com/maranran/eslint-plugin-vue-a11y/issues/10
    'vue-a11y/click-events-have-key-events': 'off'
  }
};
