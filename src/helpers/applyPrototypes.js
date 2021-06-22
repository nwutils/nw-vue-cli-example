// Make NW.js and Node globals available in Vue
export default function applyPrototypes (component) {
  if (component && component.config && component.config.globalProperties) {
    component.config.globalProperties.isDesktop = !!window.nw;

    if (window.nw) {
      component.config.globalProperties.nw = window.nw;
      component.config.globalProperties.process = window.nw.process;
      component.config.globalProperties.require = window.nw.require;
      component.config.globalProperties.global = global;
    }
  }
}
