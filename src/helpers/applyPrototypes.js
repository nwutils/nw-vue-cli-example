// Make NW.js and Node globals available in Vue
export default {
  toApp: function (component) {
    if (component && component.config && component.config.globalProperties) {
      component.config.globalProperties.isDesktop = !!window.nw;
      if (window.nw) {
        component.config.globalProperties.nw = window.nw;
        component.config.globalProperties.process = window.nw.process;
        component.config.globalProperties.require = window.nw.require;
        component.config.globalProperties.global = global;
      }
    }
  },
  toOptions: function (options) {
    options = options || {};
    options.global = options.global || {};
    options.global.config = options.global.config || {};
    options.global.config.globalProperties = options.global.config.globalProperties || {};

    options.global.config.globalProperties.isDesktop = !!window.nw;
    if (window.nw) {
      options.global.config.globalProperties.nw = window.nw;
      options.global.config.globalProperties.process = window.nw.process;
      options.global.config.globalProperties.require = window.nw.require;
      options.global.config.globalProperties.global = global;
    }
  }
};
