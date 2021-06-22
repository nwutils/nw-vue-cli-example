// Make NW.js and Node globals available in Vue
export default function applyPrototypes (component) {
  console.log(2, { component });
  if (component && component.config && component.config.globalProperties) {
    component.config.globalProperties.isDesktop = !!window.nw;

    if (window.nw) {
      component.config.globalProperties.nw = window.nw;
      component.config.globalProperties.process = window.nw.process;
      component.config.globalProperties.require = window.nw.require;
      component.config.globalProperties.global = global;
    }
  } else if (component && component.vm) {
    component.vm.isDesktop = !!window.nw;

    if (window.nw) {
      component.vm.nw = window.nw;
      component.vm.process = window.nw.process;
      component.vm.require = window.nw.require;
      component.vm.global = global;
    }
  } else {
    console.log('COMPONENT NO GOOD MAN');
  }
}
