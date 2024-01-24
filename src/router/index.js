// Import createRouter and createWebHistory from vue-router
import { createRouter, createWebHistory } from 'vue-router';

// Import your components with corrected paths
import Homepage from '../views/home.vue';
import Headphones from '../views/heaphone-section-page.vue';
import Speakers from '../views/speaker-section-page.vue';
import Earphones from '../views/earphone-section-page.vue';
import PDH from '../views/product-details-headphone.vue';

// Import refs from Vue
import { ref } from 'vue';

// Create refs for header classes
const isHeader1 = ref(true);
const isHeader2 = ref(false);

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Homepage },
    { path: '/headphone-page', name: 'Headphones', component: Headphones },
    { path: '/speaker-page', name: 'Speakers', component: Speakers },
    { path: '/earphone-page', name: 'Earphones', component: Earphones },
    { path: '/product-details-headphone', name: 'ProductDetailsHeadphone', component: PDH }
  ]
});

// Navigation guard to update header classes
router.beforeEach((to, from, next) => {
  // Set header classes based on the route name
  isHeader1.value = to.name === 'Home' || to.name === 'Earphones' || to.name ==='Speakers' || to.name ==='ProductDetailsHeadphone'; // Add more page names if needed
  isHeader2.value = !isHeader1.value;

  // Add a class to the body based on the route name
  document.body.className = `route-${to.name}`;

  next();
});

// Export the router instance and header refs
export { router, isHeader1, isHeader2 };
