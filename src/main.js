import { createApp } from 'vue';

import applyPrototypes from '@/helpers/applyPrototypes.js';

import App from '@/App.vue';

const app = createApp(App);
applyPrototypes(app.config.globalProperties);
app.mount('#app');
