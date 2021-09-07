<template>
  <div>
    <b-container class="bv-example-row mt-5">
      <b-row>
        <!-- User's ads-->
        <b-col cols="12" lg="3" xl="3" md="3" xs="12" sm="12" class="mr-4">
          <div>
            <b-card class="user-small-card" bg-variant="light">
              <div class="bg-dark p-2 text-light">
                Profile
              </div>
              <hr />

              <b-row class="p-2 mb-1 bg-white text-dark">
                <b-col class="text-center">
                  <b-button
                    size="sm"
                    variant="outline-dark"
                    v-on:click="switchButton = 0"
                  >
                    <b-icon icon="person-fill" aria-hidden="true"></b-icon>
                    {{ user.name }}
                  </b-button>
                </b-col>
              </b-row>
              <b-row class="p-2 mb-1 bg-white text-dark">
                <b-col class="text-center">
                  <b-button
                    size="sm"
                    variant="outline-dark"
                    class="button"
                    v-on:click="switchButton = 2"
                  >
                    <b-icon icon="archive-fill" aria-hidden="true"></b-icon>
                    Ads
                  </b-button>
                </b-col>
              </b-row>

              <b-row class="p-2 mb-1 bg-white text-dark ">
                <b-col class="text-center">
                  <b-button
                    size="sm"
                    class="button"
                    variant="outline-dark"
                    v-on:click="switchButton = 1"
                  >
                    <b-icon
                      icon="heart-fill"
                      variant="danger"
                      aria-hidden="true"
                    ></b-icon>
                    Favourite
                  </b-button>
                </b-col>
              </b-row>
              <b-row class="p-2 mb-1 bg-white text-dark">
                <b-col class="text-center">
                  <b-button
                    size="sm"
                    variant="outline-dark"
                    class="button"
                    v-on:click="switchButton = 0"
                  >
                    <b-icon
                      icon="inboxes-fill"
                      variant="info"
                      aria-hidden="true"
                    ></b-icon>
                    Inbox
                  </b-button>
                </b-col>
              </b-row>
              <div class="text-center mt-5">
                <b-button class="px-4 generalBackgroundBrown">Logout</b-button>
              </div>
            </b-card>
          </div>
        </b-col>

        <!-- User account Details-->
        <b-col
          cols="12"
          lg="8"
          xl="8"
          sm="12"
          md="8"
          class="user-info-div"
          v-if="switchButton == 0"
        >
          <div class="m-3">
            <h4>Muaadh Ali</h4>
            <p>your last logged at: 12 July 2021</p>
          </div>

          <div>
            <b-card
              header="Avatar photo"
              header-text-variant="dark"
              header-tag="header"
              header-bg-variant="light"
              style="max-width: 100%;"
            >
              <div class="text-center">
                <b-avatar
                  rounded
                  size="100px"
                  src="https://placekitten.com/300/300"
                ></b-avatar>
              </div>
            </b-card>
          </div>
          <br />
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-card
                header="Account Details"
                header-text-variant="dark"
                header-tag="header"
                header-bg-variant="light"
                style="max-width: 100%;"
              >
                <b-row>
                  <b-col cols="3">Gender</b-col>
                  <b-col cols="9">
                    <b-form-group id="input-group-1">
                      <b-form-select
                        id="inline-form-custom-select-pref"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        :options="[
                          { text: 'Gender...', value: null },
                          'Male',
                          'Female',
                          ,
                        ]"
                        :value="null"
                      ></b-form-select>
                      <!-- <b-form-checkbox-group
                        v-model="form.gender"
                        id="checkboxes-4"
                        :aria-describedby="ariaDescribedby"
                      >
                        <b-form-checkbox value="m">Male</b-form-checkbox>
                        <b-form-checkbox value="f">Female</b-form-checkbox>
                      </b-form-checkbox-group> -->
                    </b-form-group></b-col
                  >
                </b-row>

                <b-row>
                  <b-col cols="3">
                    <b-form-group
                      id="input-group-2"
                      label="Name:"
                      label-for="input-2"
                    >
                    </b-form-group
                  ></b-col>
                  <b-col cols="9">
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      type="text"
                      required
                    ></b-form-input
                  ></b-col>
                </b-row>

                <b-row>
                  <b-col cols="3">
                    <b-form-group
                      id="input-group-3"
                      label="Username:"
                      label-for="input-3"
                    >
                    </b-form-group
                  ></b-col>
                  <b-col cols="9">
                    <b-form-input
                      id="input-3"
                      v-model="form.username"
                      type="text"
                    ></b-form-input
                  ></b-col>
                </b-row>

                <b-row>
                  <b-col cols="3">
                    <b-form-group
                      id="input-group-4"
                      label="Email:"
                      label-for="input-4"
                    >
                    </b-form-group
                  ></b-col>
                  <b-col cols="9">
                    <b-form-input
                      id="input-4"
                      v-model="form.email"
                      type="email"
                    ></b-form-input
                  ></b-col>
                </b-row>
                <b-row>
                  <b-col cols="3">
                    <b-form-group
                      id="input-group-5"
                      label="Phone:"
                      label-for="input-5"
                    >
                    </b-form-group
                  ></b-col>
                  <b-col cols="9">
                    <b-form-input
                      id="input-5"
                      v-model="form.phone"
                      type="text"
                    ></b-form-input
                  ></b-col>
                </b-row>
                <br />

                <div class="col-md-12 text-center">
                  <b-button type="button" class="px-5" variant="info"
                    >Update</b-button
                  >
                </div>
              </b-card>
            </b-form>
          </div>
        </b-col>
        <favorite
          :favoritesAds="user.favorites.data"
          :user="user"
          v-if="switchButton == 1"
        />
        <ads :user="user" v-if="switchButton == 2" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Favorite from "../components/userPage/Favorite.vue";
import Ads from "../components/userPage/Ads.vue";
import store from "../store/Auth";
import { mapGetters } from "vuex";

export default {
  components: { Favorite, Ads },
  data() {
    return {
      form: {
        name: "",
        username: "",
        email: "",
        phone: "",
        gender: [],
      },
      switchButton: 2,
      show: true,
    };
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.authStatus) {
      next();
    } else {
      next("login");
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
  },
};
</script>
<style scoped>
.user-info-div {
  background-color: #e2e2e2 !important;
  border-radius: 30px;
  min-height: 700px;
}
.user-small-card {
  background-color: #e2e2e2 !important;
  height: 500px;
  border-radius: 30px;
}
.button {
  width: 100px !important;
}
</style>
