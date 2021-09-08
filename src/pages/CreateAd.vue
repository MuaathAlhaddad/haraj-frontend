<template>
  <div>
    <template v-if="loading">
      <div>
        <loading-icon />
      </div>
    </template>
    <template v-else>
      <b-container class="bv-example-row">
        <b-container class="bv-example-row mt-5">
          <b-row class="row">
            <b-col col lg="4" md="12" sm="12" xs="12">
              <b-button-group>
                <b-button
                  class="custom-size-button2"
                  :class="
                    switchButton == 0 ? 'primaryBackgroundColor' : 'normalBtn'
                  "
                >
                  Ad Details
                </b-button>

                <b-button
                  class="custom-size-button2"
                  :class="
                    switchButton == 1 ? 'primaryBackgroundColor' : 'normalBtn'
                  "
                >
                  Photos
                </b-button>

                <b-button
                  class="custom-size-button2"
                  :class="
                    switchButton == 2 ? 'primaryBackgroundColor' : 'normalBtn'
                  "
                >
                  Terms
                </b-button>

                <b-button
                  class="custom-size-button2"
                  :class="
                    switchButton == 3 ? 'primaryBackgroundColor' : 'normalBtn'
                  "
                >
                  Finish
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>
        </b-container>
        <b-row class="mb-5">
          <Details
            v-if="switchButton == 0"
            v-on:passAdDetails="addDetails($event)"
            :states="cities.country.states"
            :harajs="harajs.taxonomyContents.data"
          />

          <photos
            v-if="switchButton == 1"
            v-on:passPhotos="addPhotos($event)"
          />

          <terms v-if="switchButton == 2" v-on:passTerm="postAd($event)" />

          <b-col cols="12" lg="3" md="3" sm="12" class="mt-3">
            <b-card border-variant="dark" header="Notes">
              <b-card-text>
                <ul>
                  <li>Write a note</li>
                  <li>Write a note</li>
                  <li>Write a note</li>
                  <li>Write a note</li>
                  <li>Write a note</li>
                  <li>Write a note</li>
                </ul></b-card-text
              >
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </div>
</template>

<script>
import Details from "../components/createAdComp/Details.vue";
import Photos from "../components/createAdComp/Photos.vue";
import Terms from "../components/createAdComp/Terms.vue";
import LoadingIcon from "../components/LoadingIcon.vue";
import states from "../graphql/queries/somaliaState.gql";
import Harajs from "../graphql/queries/taxonomies/harajs.gql";
import CreateAd from "../graphql/mutations/createAd.gql";
import store from "../store/Auth";

//// store the gql data in variables
const harajs = Harajs;
const cities = states;
export default {
  components: { Details, Photos, Terms, LoadingIcon },
  data() {
    return {
      switchButton: 0,
      details: null,
      photos: null,
      terms: null,
      value: "",
      harajs: [],
      ads: "",
      cities: [],
      loading: 0,
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
    //// Recieving the data from the emit functions
    addDetails(data) {
      this.details = data;
      this.switchButton = 1;
      console.log(data);
    },
    addPhotos(data) {
      this.photos = data.name;
      this.switchButton = 2;
    },
    postAd() {
      this.details["photos"] = this.photos;
      this.$apollo
        .mutate({
          // Query
          mutation: CreateAd,
          // Parameters
          variables: {
            title: this.details.title,
            description: this.details.description,
            price: parseFloat(this.details.price),
            negotiable: this.details.negotiable,
            userId: 1,
            catergories: this.details.taxonomyContents,
          },
        })
        .then((data) => {
          console.log(data);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },

  apollo: {
    // Local state 'states' data will be updated
    // by the GraphQL query result
    cities: {
      // GraphQL query
      query: cities,
      // Will update the 'loading' attribute
      // +1 when a new query is loading
      // -1 when a query is completed
      loadingKey: "loading",
      update: (data) => data,
    },
    harajs: {
      // GraphQL query
      query: harajs,
      // Will update the 'loading' attribute
      // +1 when a new query is loading
      // -1 when a query is completed
      loadingKey: "loading",
      update: (data) => data,
    },
  },
};
</script>

<style scoped>
.custom-size-button1 {
  width: 200px !important;
}
.custom-size-button2 {
  width: 100px !important;
}

#detail {
  background-color: #f5f5f5;
  border: 1px solid #e4e7f5;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 100px;
}

.normalBtn {
  background-color: #96847d;
}
</style>
