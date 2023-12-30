<template>
  <div class="app" id="app">
    <Header />
    <Headphone />
    <Speaker />
    <Earphone />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/home.vue";
import Headphone from "./components/headphone-section.vue";
import Speaker from "./components/speakers-section.vue";
import Earphone from "./components/earphone-section.vue";
import Footer   from "./components/footer.vue";
export default {
  components: {
    Header,
    Headphone,
    Speaker,
    Earphone,
    Footer
  }
};
</script>

<style scoped>
/* Global styles for the initial section */
.app {
  padding: 0;
  margin: 0;
  width: 1680px;
  height:auto;
  overflow: hidden;
  /* Add other global styles here */
}
</style>
