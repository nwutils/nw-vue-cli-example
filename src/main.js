import { createApp } from 'vue';

import App from '@/App.vue';
import applyPrototypes from '@/helpers/applyPrototypes.js';

const app = createApp(App);
applyPrototypes.toApp(app);
app.mount('#app');
