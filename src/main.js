import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  render: function (hyperscript) {
    return hyperscript(App);
  }
}).$mount('#app');
