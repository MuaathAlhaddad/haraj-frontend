<template>
  <div>
    <template v-if="loading">
      <div>
        <loading-icon />
      </div>
    </template>

    <template v-else>
      <div>
        <b-container class="bv-example-row mt-5">
          <b-row>
            <!-- User's ads-->

            <b-col cols="12" lg="3" xl="3" md="3" xs="12" sm="12" class="mr-4">
              <div>
                <b-card class="user-small-card" bg-variant="light">
                  <div
                    class="secondaryBackgroundColor p-2 text-light text-center"
                  >
                    <span class="h5"> Profile</span>
                  </div>
                  <hr />

                  <b-row class="p-2 mb-1 bg-white text-dark  ">
                    <b-col class="text-center">
                      <b-button
                        size="sm"
                        class="hoverButton"
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
                        class="button hoverButton"
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
                        class="button hoverButton"
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
                        class="button hoverButton"
                        v-on:click="switchButton = 0"
                      >
                        <router-link
                          :to="{ path: `/inbox` }"
                          class="secondaryColor"
                        >
                          <b-icon
                            icon="inboxes-fill"
                            variant="info"
                            aria-hidden="true"
                          >
                          </b-icon>
                          Inbox
                        </router-link>
                      </b-button>
                    </b-col>
                  </b-row>
                  <div class="text-center mt-5">
                    <b-button class="px-4 primaryBackgroundColor"
                      >Logout</b-button
                    >
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
                  class="primaryColor"
                  header-tag="header"
                  header-bg-variant="light"
                  style="max-width: 100%;"
                >
                  <div class="text-center">
                    <div v-if="user.attachments.data.length > 0">
                      <b-avatar
                        rounded
                        size="100px"
                        v-if="
                          user.attachments.data[
                            user.attachments.data.length - 1
                          ].path != 'undefined'
                        "
                        :src="
                          user.attachments.data[
                            user.attachments.data.length - 1
                          ].path
                        "
                      >
                      </b-avatar>
                    </div>

                    <b-avatar
                      rounded
                      size="100px"
                      v-if="user.attachments.data.length == 0"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    >
                    </b-avatar>
                    <uploading-avatar
                      v-on:uploadProfile="submitImage($event)"
                    />
                  </div>
                  <div class="my-8"></div>
                </b-card>
              </div>
              <br />
              <div>
                <update-user-details
                  v-on:updateUser="updateUserDetails($event)"
                  :SomaStates="states.country.states"
                  :user="user"
                />
              </div>
            </b-col>
            <favorite v-if="switchButton == 1" />
            <ads :user="user" v-if="switchButton == 2" />
          </b-row>
        </b-container>
      </div>
    </template>
  </div>
</template>

<script>
import Favorite from "../components/userPage/Favorite.vue";
import Ads from "../components/userPage/Ads.vue";
import store from "../store/Auth";
import { mapGetters } from "vuex";
import UploadingAvatar from "../components/UploadingAvatar.vue";
import UploadAvatarPhoto from "../graphql/mutations/updateAvatar.gql";
import somaliaStates from "../graphql/queries/somaliaState.gql";
import UpdateUserDetails from "../components/UpdateUserDetails.vue";
import UpdateDetails from "../graphql/mutations/updateUserDetails.gql";
import LoadingIcon from "../components/LoadingIcon.vue";

export default {
  components: {
    Favorite,
    Ads,
    UploadingAvatar,
    UpdateUserDetails,
    LoadingIcon,
  },
  data() {
    return {
      msg: "Vue Image Upload and Resize Demo",
      hasImage: false,
      image: null,
      loading: 0,
      form: {
        name: "",
        username: "",
        email: "",
        phone: "",
        gender: [],
      },
      switchButton: 0,
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
  apollo: {
    ////// Get Countries
    states: {
      query: somaliaStates,
      loadingKey: "loading",
      update: (data) => data,
    },
  },

  methods: {
    updateUserDetails(user) {
      console.log(user);
      this.$apollo
        .mutate({
          // Query
          mutation: UpdateDetails,
          // Parameters
          variables: {
            userId: this.user.id,
            name: user.name,
            email: user.email,
            gender: user.gender,
            password: user.password,
            state: parseInt(user.state),
          },
        })
        .then(() => {
          location.reload();
        })
        .catch((errors) => {
          console.log(errors);
        });
      console.log(user);
    },
    submitImage(image) {
      this.$apollo
        .mutate({
          // Query
          mutation: UploadAvatarPhoto,
          // Parameters
          variables: {
            userId: this.user.id,
            photo: image,
            deleteIds:
              this.user.attachments.data.length == 0
                ? null
                : this.user.attachments.data[
                    [this.user.attachments.data.length - 1]
                  ],
          },
        })
        .then(() => {
          location.reload();
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    setImage: function(output) {
      this.hasImage = true;
      this.image = output;
      console.log("Info", output.info);
      console.log("Exif", output.exif);
    },
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
#fileInput {
  display: none;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
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
