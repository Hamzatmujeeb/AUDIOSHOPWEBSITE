<template>
  <div class="app" id="app">
    <MainHeader></MainHeader>
    <Headphones />
    <Speakers />
    <Earphone />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import Headphones from './components/headphone-section.vue'; // Fix the typo
import Speakers from './components/speakers-section.vue';
import Earphone from './components/earphone-section.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    Headphones,
    Speakers,
    Earphone,
  },
};
</script>

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
  background: #FAFAFA;
  /* Add other global styles here */
}
</style>
