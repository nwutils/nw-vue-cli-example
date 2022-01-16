import Vue from 'vue';

import applyPrototypes from '@/helpers/applyPrototypes.js';

const { getComputedStyle } = window;

Vue.config.productionTip = false;

// Prevents console log message to install Vue DevTools
Vue.config.devtools = false;

// Monkeypatch JSDOM missing transition styles + vue-test-utils not properly stubbing transitions
// in globally included libs (VeeValidate in our case)
// https://github.com/vuejs/vue-test-utils/issues/839#issuecomment-410474714
window.getComputedStyle = function getComputedStyleStub (el) {
  return {
    ...getComputedStyle(el),
    transitionDelay: '',
    transitionDuration: '',
    animationDelay: '',
    animationDuration: ''
  };
};

window.webSetup = function () {
  delete window.nw;
  applyPrototypes(Vue);

  window.open = jest.fn();
};

global.beforeEach(() => {
  window.nw = {
    process: {
      cwd: process.cwd,
      env: {
        NODE_ENV: 'development'
      },
      versions: {
        chromium: '91.0.4472.77',
        nw: '0.54.0',
        'nw-flavor': 'sdk',
        node: '16.1.0'
      }
    },
    require: jest.fn((module) => {
      const modules = {
        fs: {
          readdirSync: jest.fn(() => {
            return [
              'example-file-1.ext',
              'example-file-2.ext'
            ];
          })
        },
        net: {
          Socket: jest.fn(() => {
            return {
              connect: jest.fn(() => {}),
              write: jest.fn(() => {})
            };
          })
        }
      };

      if (modules[module]) {
        return modules[module];
      }
    }),
    Shell: {
      openExternal: jest.fn()
    },
    Window: {
      get: function () {
        return {
          closeDevTools: jest.fn(),
          showDevTools: jest.fn(),
          show: jest.fn()
        };
      }
    }
  };

  applyPrototypes(Vue);
});

global.afterEach(() => {
  if (window.nw) {
    window.nw.Window.get().showDevTools.mockClear();
  }
});


// Jest's setTimeout defaults to 5 seconds.
// Bump the timeout to 60 seconds.
jest.setTimeout(60 * 1000);
