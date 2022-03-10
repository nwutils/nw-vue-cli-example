const path = require('path');

const baseRestrictedSyntax = require('eslint-config-tjw-base/no-restricted-syntax.json');
const jestRestrictedSyntax = require('eslint-config-tjw-jest/no-restricted-syntax.json');

module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2022,
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
    'plugin:vuejs-accessibility/recommended',
    'tjw-base',
    'tjw-vue',
    'tjw-import',
    'tjw-jest'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': [
      'error',
      ...baseRestrictedSyntax,
      ...jestRestrictedSyntax
    ],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id']
        },
        allowChildren: false
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve('src'),
              '@@': path.resolve('tests')
            }
          }
        }
      }
    }
  }
};
