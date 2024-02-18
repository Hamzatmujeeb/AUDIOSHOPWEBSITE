// Import createRouter and createWebHistory from vue-router
import { createRouter, createWebHistory } from 'vue-router';

// Import your components with corrected paths
import Homepage from '../views/home.vue';
import Headphones from '../views/heaphone-section-page.vue';
import Speakers from '../views/speaker-section-page.vue';
import Earphones from '../views/earphone-section-page.vue';
import PDH from '../views/product-details-headphone.vue';
import PDHHeadphones from '../views/product-details-headphone2.vue';
import PDHHeadphonesLast from '../views/product-details-headphone3.vue';
import PDSpeakers from '../views/product-detail-Speakers-1.vue';
import PDSpeakersLast from '../views/product-detail-speakers-2.vue';
import PDEarphone from '../views/product-detail-earphones-1.vue';
import Cart from '../views/cart.vue';
import Checkout from '../views/checkout.vue'
import checkoutModal from '../views/checkout-modal.vue';


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
    { path: '/product-details-headphone', name: 'ProductDetailsHeadphone', component: PDH },
    { path: '/product-details-headphone2', name: 'ProductDetailsHeadphone2', component: PDHHeadphones }, // Corrected the route name
    { path: '/product-details-headphone3', name: 'ProductDetailsHeadphone3', component: PDHHeadphonesLast },
    { path: '/product-details-speakers1', name: 'ProductDetailSpeaker1', component: PDSpeakers }, // Corrected the route name
    { path: '/product-details-speakers2', name: 'ProductDetailSpeaker2', component: PDSpeakersLast }, // Corrected the route name
    { path: '/product-details-Earphone', name: 'ProductDetailsEarphone', component: PDEarphone }, // Corrected the route name
    { path: '/cart', name: 'cart', component: Cart }, // Corrected the route name
    { path: '/checkout', name: 'checkout', component: Checkout }, // Corrected the route name
    { path: '/checkoutmodal', name: 'checkout-modal', component: checkoutModal}
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
