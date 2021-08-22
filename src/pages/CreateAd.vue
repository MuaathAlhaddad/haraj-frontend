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
                  :class="switchButton == 0 ? 'conditionalBtn' : 'normalBtn'"
                >
                  Ad Details
                </b-button>

                <b-button
                  class="custom-size-button2"
                  :class="switchButton == 1 ? 'conditionalBtn' : 'normalBtn'"
                >
                  Photos
                </b-button>

                <b-button
                  class="custom-size-button2"
                  :class="switchButton == 2 ? 'conditionalBtn' : 'normalBtn'"
                >
                  Terms
                </b-button>

                <b-button
                  class="custom-size-button2"
                  :class="switchButton == 3 ? 'conditionalBtn' : 'normalBtn'"
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
            :states="cities.states.data"
          />

          <photos
            v-if="switchButton == 1"
            v-on:passPhotos="addPhotos($event)"
          />

          <terms v-if="switchButton == 2" v-on:passTerm="postAd($event)" />

          <finish v-if="switchButton == 3" :newAd="details" />

          <b-col cols="12" lg="3" md="3" sm="12" class="mt-3">
            <b-card border-variant="info" header="Notes">
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
import Finish from "../components/createAdComp/Finish.vue";
import Photos from "../components/createAdComp/Photos.vue";
import Terms from "../components/createAdComp/Terms.vue";
import LoadingIcon from "../components/LoadingIcon.vue";
import states from "../graphql/queries/states.gql";

//// store the gql data in variables
const cities = states;

export default {
  components: { Details, Photos, Terms, Finish, LoadingIcon },
  data() {
    return {
      switchButton: 0,
      details: null,
      photos: null,
      terms: null,
      value: "",
      ads: "",
      cities: [],
      loading: 0,
    };
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
    postAd(data) {
      this.terms = data;
      this.switchButton = 3;

      this.details["photos"] = this.photos;
      console.log(this.details);
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
  background-color: #747474;
}

.conditionalBtn {
  background-color: #4f9da6;
}
.submit-btn {
  text-align: center;
  max-width: 100%;
}
.submit-btn button {
  background-color: #4f9da6;
  width: 250px;
}
</style>
