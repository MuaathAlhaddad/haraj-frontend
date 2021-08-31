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

<style>
.generalBackgroundOrange {
  background-color: ghostwhite !important;
}
.generalColorOrange {
  color: #f05e23 !important;
}
.generalBackgroundBrown {
  background-color: #f05e23 !important;
}
.generalColorBrown {
  color: #3d2314 !important;
}
</style>
