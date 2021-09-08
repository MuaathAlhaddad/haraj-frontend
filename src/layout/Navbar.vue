<template>
  <div>
    <b-navbar class="generalBackgroundOrange" toggleable="lg" type="light">
      <b-navbar-brand class="d-lg-none">
        <div class="bg-light">
          <img v-bind:src="logo" width="80px" />
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
      <b-collapse id="collapse-area" is-nav>
        <b-navbar-nav class="pl-5">
          <b-nav-item>
            <router-link :to="{ path: `/` }">
              <div class="bg-light">
                <img v-bind:src="logo" width="100px" />
              </div>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="!isAuth">
          <b-nav-item>
            <router-link :to="{ path: `/login` }">
              <b-button class="primaryBackgroundColor">Login</b-button>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ path: `/signup` }">
              <b-button class="primaryBackgroundColor">Sign Up</b-button>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="d-md-block mx-auto" v-if="isAuth">
          <b-nav-text variant="light">
            <b-nav-item-dropdown no-caret>
              <template #button-content>
                <b-button variant="light" class="mr-3">
                  <span class="secondaryColor mr-1 h5">{{ user.name }} </span>
                  <b-icon
                    icon="person-circle"
                    class="primaryColor "
                    scale="1.0"
                    aria-hidden="true"
                  ></b-icon>
                </b-button>
              </template>
              <b-dropdown-item>
                <router-link :to="{ path: `/user/${user.id}` }">
                  <div class="bg-light">
                    <span class="secondaryColor h6">My profile</span>
                  </div>
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item @click="logoutUser()">
                <span class="secondaryColor h6">Logout</span>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-text>

          <b-nav-text>
            <b-button variant="light" class="mr-3">
              <span class="secondaryColor mr-1 h5">Ads </span>
              <b-icon
                icon="archive-fill"
                class="primaryColor"
                scale="1.0"
                aria-hidden="true"
              ></b-icon>
            </b-button>
            <b-button variant="light" class="mr-3">
              <span class="secondaryColor mr-1 h5">Favorite </span>
              <b-icon
                icon="heart-fill"
                class="primaryColor"
                scale="1.0"
                aria-hidden="true"
              ></b-icon>
            </b-button>
            <b-button variant="light" class="mr-3">
              <span class="secondaryColor mr-1 h5">Inbox </span>
              <b-icon
                icon="inboxes-fill"
                class="primaryColor"
                scale="1.0"
                aria-hidden="true"
              ></b-icon>
            </b-button>
          </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav v-if="isAuth">
          <router-link :to="{ path: `/create-ad` }">
            <b-button
              class="add-post mr-5 primaryBackgroundColor"
              type="submit"
            >
              Add Post
            </b-button>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import Logo from "../assets/logo.png";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      logo: Logo,
    };
  },
  methods: {
    ...mapActions({
      logout: "Auth/logout",
    }),
    logoutUser() {
      this.logout();
    },
  },
  computed: {
    ...mapGetters({
      isAuth: "Auth/isAuth",
      user: "Auth/user",
    }),
  },
};
</script>
<style scoped>
.add-post {
  width: 130px !important;
}
</style>
