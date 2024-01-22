<script setup>
import Headphones from '../components/headphone-section.vue'
import Speakers from '../components/speakers-section.vue'
import Earphone from '../components/earphone-section.vue'
</script>

<template>
  <div>
    <Headphones />
    <Speakers />
    <Earphone />
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
