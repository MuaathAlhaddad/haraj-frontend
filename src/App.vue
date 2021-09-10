<template>
  <div id="app">
    <template v-if="loading">
      <div>
        <loading-icon />
      </div>
    </template>
    <template v-else>
      <navbar />
      <router-view> </router-view>
    </template>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import CurrnetUser from "./graphql/queries/currentUser.gql";
import { mapActions } from "vuex";
import LoadingIcon from "./components/LoadingIcon.vue";

const userDetails = CurrnetUser;

export default {
  components: { Navbar, LoadingIcon },
  name: "App",

  data() {
    return { loading: 0 };
  },
  methods: {
    ...mapActions({
      currentUser: "Auth/currentUser",
    }),
  },
  apollo: {
    currentUserDetails: {
      query: userDetails,
      loadingKey: "loading",

      update(data) {
        this.currentUser(data.currentUser);
        return data;
      },
    },
  },
};
</script>

<style>
.generalBackgroundOrange {
  background-color: #f8f9fa !important;
}
.BrownBackground {
  background-color: #704d39 !important;
}
.primaryColor {
  color: #f88558 !important;
}
.secondaryColor {
  color: #3d2314 !important;
}
.secondaryBackgroundColor {
  background-color: #3d2314 !important;
}
.primaryBackgroundColor {
  background-color: #fc7843 !important;
}
.generalColorBrown {
  color: #3d2314 !important;
}
.levelCatergories {
  background-color: #968077 !important;
}
</style>
