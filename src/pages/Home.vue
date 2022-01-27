<template>
  <div>
    <template v-if="loadingCatergories">
      <div>
        <loading-icon />
      </div>
    </template>
    <template v-else>
      <div>
        <b-container class="bv-example-row my-5">
          <home-search
            :states="states.country.states"
            :ads="ads"
            v-on:searchHomeAds="getAds($event)"
          />
          <b-row>
            <b-col cols="12"
              ><b-card class="tabs-body-card">
                <template v-slot:header>
                  <b-row class="d-flex justify-content-between">
                    <div class="ml-2 secondaryColor h6">
                      Browser by catergory
                    </div>
                  </b-row>
                </template>
                <b-row class="text-center">
                  <div>
                    <b-col class="wrap" ref="wrap">
                      <b-tabs>
                        <home-harajs
                          :harajs="harajs"
                          v-on:selectedHaraj="getHaraj($event)"
                          :harajStyleTitle="harajStyleTitle"
                        />
                      </b-tabs>
                    </b-col>
                  </div>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="my-5">
              <b-card>
                <template v-slot:header>
                  <b-row class="d-flex justify-content-between">
                    <div class="ml-2 secondaryColor h6">Latest ads</div>
                    <div class="mr-2">
                      <router-link
                        :to="{ path: `ads` }"
                        class="secondaryColor h6"
                      >
                        View all ads
                      </router-link>
                    </div>
                  </b-row>
                </template>
                <div
                  class="row justify-content-center"
                  v-if="isFiltered == false"
                >
                  <span v-for="(ad, index) in ads" :key="index">
                    <AdItem :ad="ad" v-if="isFiltered == false" />
                  </span>
                </div>
                <div class="row" v-if="isFiltered == true">
                  <span v-for="(ad, index) in filters" :key="index">
                    <AdItem :ad="ad" />
                  </span>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </template>
  </div>
</template>

<script>
import AdItem from "../components/AdItemHome.vue";
import HomeHarajs from "../components/HomeHarajs.vue";
import LoadingIcon from "../components/LoadingIcon.vue";
import Harajs from "../graphql/queries/taxonomies/harajs.gql";
import Ads from "../graphql/queries/ads.gql";
import States from "../graphql/queries/somaliaState.gql";
import HomeSearch from "../components/HomeSearch.vue";

let allHarajs = Harajs;
let allAds = Ads;
let allStates = States;

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { AdItem, LoadingIcon, HomeHarajs, HomeSearch },
  data() {
    return {
      selectedHaraj: null,
      currentUserDetails: [],
      loadingCatergories: 0,
      harajs: [],
      harajStyleTitle: "",
      filters: null,
      isFiltered: false,
    };
  },
  apollo: {
    ads: {
      query: allAds,
      loadingKey: "loadingCatergories",
      variables() {
        if (this.selectedHaraj != null) {
          return {
            valueName: this.selectedHaraj,
            operator: "LIKE",
            itemsNumber: 12,
          };
        } else if (this.selectedHaraj == null) {
          return {
            valueName: "%%",
            operator: "LIKE",
            itemsNumber: 12,
          };
        }
      },

      update(data) {
        if (this.selectedHaraj != null) {
          return data.ads.data;
        } else {
          return data.ads.data;
        }
      },
    },
    harajs: {
      query: allHarajs,
      loadingKey: "loadingCatergories",
      update(data) {
        return data;
      },
    },
    states: {
      query: allStates,
      loadingKey: "loadingCatergories",
      update(data) {
        return data;
      },
    },
  },
  methods: {
    getHaraj(haraj) {
      this.harajStyleTitle = haraj;
      this.selectedHaraj = haraj;
      this.isFiltered = false;
      this.$apollo.queries.ads.refetch();
    },
    getAds(filteredAds) {
      this.filters = filteredAds;
      this.isFiltered = true;
    },
  },
};
</script>

<style scoped>
.catergory-label {
  color: #aaaaaa;
  font-size: 12px;
}
.more {
  height: 60px !important;
}

.searchBox {
  border-radius: 30px;
}
</style>
