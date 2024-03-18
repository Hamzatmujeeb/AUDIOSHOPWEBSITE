<script setup>
import MainHeader from './components/MainHeader.vue'
import Headphones from './components/headphone-section.vue'
import Speakers from './components/speakers-section.vue'
import Earphone from './components/earphone-section.vue'
import MainFooter from './components/MainFooter.vue'
import { createWebHistory, createRouter } from 'vue-router'

// Create the router instance
/*const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Homepage },
        { path: '/headphonePage', component: Heaphones },
        { path: '/speakerPage', component: Speakers },
        { path: '/earphonePage', component: Earphones }
    ]
});*/
</script>

<template>
  <div class="app" id="app">
    <MainHeader />
    <Headphones />
    <Speakers />
    <!-- <Earphone />
    <MainFooter /> -->
  </div>
</template>

<style scoped>
/* Global styles for the initial section */
body {
  margin: 0;
  max-width: 99.678rem;
}

.app {
  padding: 0;
  margin: 0;
  max-width: 99.678%;
  height: auto;
  overflow: hidden;
  background: #fafafa;
  /* Add other global styles here */
}
</style>
