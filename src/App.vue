<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
};
</script>

<style></style>
