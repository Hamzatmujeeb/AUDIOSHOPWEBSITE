// Import createRouter and createWebHistory from vue-router
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Homepage from '../components/MainHeader.vue'; // Adjust the path accordingly
import Heaphones from '../views/heaphone-section-page.vue';
import Speakers from '../views/speaker-section-page.vue';
import Earphones from '../views/earphone-section-page.vue';

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Homepage },
        { path: '/headphonePage', component: Heaphones },
        { path: '/speakerPage', component: Speakers },
        { path: '/earphonePage', component: Earphones }
    ]
});

// Export the router instance
export default router;
