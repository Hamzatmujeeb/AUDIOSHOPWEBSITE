import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue'; // Adjust the path accordingly
import { router } from '../src/router/index'; // Import the named exports

const app = createApp(App);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
