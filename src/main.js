import Vue from 'vue';

import App from '@/App.vue';
import applyPrototypes from '@/helpers/applyPrototypes.js';

Vue.config.productionTip = false;
applyPrototypes(Vue);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  render: function (hyperscript) {
    return hyperscript(App);
  }
}).$mount('#app');
