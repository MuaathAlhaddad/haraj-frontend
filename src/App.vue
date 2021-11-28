<template>
  <div id="app">
    <template v-if="loading">
      <div>
        <loading-icon />
      </div>
    </template>
    <template v-else>
      <navbar />
      <section style="min-height: 410px;">
        <router-view></router-view>
      </section>
      <Footer />
    </template>
  </div>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import CurrnetUser from "./graphql/queries/currentUser.gql";
import { mapActions } from "vuex";
import LoadingIcon from "./components/LoadingIcon.vue";
import Footer from "./layout/Footer.vue";

const userDetails = CurrnetUser;

export default {
  components: { Navbar, LoadingIcon, Footer },
  name: "App",

  data() {
    return { loading: 0, skiped: true, userId: null };
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
        if (data.currentUser == null) {
          return this.currentUser(null);
        }

        this.currentUser(data.currentUser);
        this.userId = data.currentUser.id;
        this.skiped = false;
        return data;
      },
    },
  },
};
</script>

<style>
p,
h1,
h2,
h3,
h4,
h5,
span {
  font-family: Helvetica, Arial;
}
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

.reviewRating {
  background-color: #f5f5f5 !important;
  border: 0px solid #e4e7f5 !important;
}
.hoverButton:hover {
  background-color: #f1bea0 !important;
}
</style>
