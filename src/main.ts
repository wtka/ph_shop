import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap';
// Bootstrap Icon
import 'bootstrap-icons/font/bootstrap-icons.css';

// Bootstrap Dropdown
import 'bootstrap/dist/js/bootstrap.bundle';

// Pinia
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
