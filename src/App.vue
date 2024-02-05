<template>
  <div class="app" id="app">
    <MainHeaderNav />
    <router-view />
    <!-- Render the footer only if the route is not the cart page -->
    <MainFooter v-if="!isCartPage" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue'; // Import computed from vue, not vue-router
import MainHeaderNav from './components/MainHeaderNav.vue';
import MainFooter from './components/MainFooter.vue';

const route = useRoute();

const isCartPage = computed(() => {
  return route.name === 'cart';
});
</script>



<style scoped>
/* Global styles for the initial section */
body {
  margin: 0;
  max-width: 99.678rem;
  height: 100%; /* Ensure the body takes up the full height of the viewport */
}

.app {
  padding: 0;
  margin: 0;
  max-width: 99.678%;
  height: 100%; /* Ensure the app takes up the full height of the viewport */
  overflow: hidden;
  background: #fafafa;
  font-family: Manrope;
  /* Add other global styles here */
}
</style>
