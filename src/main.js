import { createApp } from 'vue';

import App from '@/App.vue';
import applyPrototypes from '@/helpers/applyPrototypes.js';

let app = createApp(App);
applyPrototypes(app.config.globalProperties);
app.mount('#app');
