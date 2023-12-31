<template>
  <div class="app" id="app">
    <MainHeader />
    <Headphone />
    <Speaker />
    <Earphone />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import Headphone from './components/headphone-section.vue'
import Speaker from './components/speakers-section.vue'
import Earphone from './components/earphone-section.vue'
import MainFooter from './components/MainFooter.vue'
export default {
  components: {
    MainHeader,
    Headphone,
    Speaker,
    Earphone,
    MainFooter
  }
}
</script>

<style scoped>
/* Global styles for the initial section */
body {
  margin: 0;
}

.app {
  padding: 0;
  margin: 0;
  max-width: 99.678%;
  height: auto;
  overflow: hidden;
  /* Add other global styles here */
}
</style>
