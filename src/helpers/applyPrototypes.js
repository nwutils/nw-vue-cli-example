// Make NW.js and Node globals available in Vue
export default function applyPrototypes (Vue) {
  Vue.prototype.isDesktop = !!window.nw;

  if (window.nw) {
    Vue.prototype.nw = window.nw;
    Vue.prototype.process = window.nw.process;
    Vue.prototype.require = window.nw.require;
    Vue.prototype.global = global;
  }
}
