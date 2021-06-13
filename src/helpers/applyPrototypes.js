// Make NW.js and Node globals available in Vue
export default function applyPrototypes (app) {
  app.isDesktop = !!window.nw;

  if (window.nw) {
    app.nw = window.nw;
    app.process = window.nw.process;
    app.require = window.nw.require;
    app.global = global;
  }
}
