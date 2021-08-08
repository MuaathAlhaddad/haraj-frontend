<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./layout/Footer.vue";
import Navbar from "./layout/Navbar.vue";
export default {
  components: { Navbar, Footer },
  name: "App",
};
</script>

<style></style>
