const { getComputedStyle } = window;

// Prevents console log message to install Vue DevTools
// Vue.config.devtools = false;

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
        chromium: '100.0.4896.127',
        nw: '0.63.1',
        'nw-flavor': 'sdk',
        node: '17.8.0'
      }
    },
    require: jest.fn((module) => {
      if (module === 'fs') {
        return {
          readdirSync: jest.fn(() => {
            return ['example-file-1.ext', 'example-file-2.ext'];
          })
        };
      }
    }),
    Shell: {
      openExternal: jest.fn()
    },
    Window: {
      get: function () {
        return {
          showDevTools: jest.fn(),
          closeDevTools: jest.fn()
        };
      }
    }
  };
});

global.afterEach(() => {
  if (window.nw) {
    window.nw.Window.get().showDevTools.mockClear();
  }
});


// Jest's setTimeout defaults to 5 seconds.
// Bump the timeout to 60 seconds.
jest.setTimeout(60 * 1000);
