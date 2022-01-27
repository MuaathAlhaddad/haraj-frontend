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
html,
body {
  max-width: 100%;
  overflow-x: hidden !important;
}
p,
h1,
h2,
h3,
h4,
h5,
span {
  font-family: Helvetica, Arial;
}
.limitText {
  display: block;
  width: 105px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

/* Haraj scroll */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #fc7843;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fc7843;
}
.tabs-body-card {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  overflow-x: hidden !important;
}

.logo-div {
  position: relative;
  height: 50px;
}
.logo {
  position: absolute;
  top: -60px;
  width: 180px;
}
/* .categories-tabs {
  position: relative !important;
  box-sizing: border-box;
  margin: 0;
} */
.nav-tabs {
  display: flex;
  white-space: nowrap;
  display: block !important;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
}

/* @media screen and (max-width: 500px) {
  .nav-tabs {
    display: flex;
    white-space: nowrap;
    display: block !important;
    flex-wrap: nowrap;
    width: 600px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
} */
@media screen and (max-width: 357px) {
  .add-post {
    margin: 10px;
  }
}

/*  */
</style>
