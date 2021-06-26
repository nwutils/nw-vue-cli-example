// Make NW.js and Node globals available in Vue
export default function (component) {
  component.isDesktop = !!window.nw;
  if (window.nw) {
    component.nw = window.nw;
    component.process = window.nw.process;
    component.require = window.nw.require;
    component.global = global;
  }
  return component;
}
