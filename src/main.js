import { createApp } from 'vue';

import App from '@/App.vue';
import applyPrototypes from '@/helpers/applyPrototypes.js';

const app = createApp(App);
applyPrototypes(app.config.globalProperties);
app.mount('#app');
