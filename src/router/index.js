// Import createRouter and createWebHistory from vue-router
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Homepage from '../views/home.vue'; // Adjust the path accordingly
import Heaphones from '../views/heaphone-section-page.vue';
import Speakers from '../views/speaker-section-page.vue';
import Earphones from '../views/earphone-section-page.vue';
import PDH from '../views/product-details-headphone.vue';

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Homepage },
        { path: '/headphone-page', component: Heaphones },
        { path: '/speaker-page', component: Speakers },
        { path: '/earphone-page', component: Earphones },
        { path: '/product-details-headphone', component: PDH }
    ]
});

// Export the router instance
export default router;
