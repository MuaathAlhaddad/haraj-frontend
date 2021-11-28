<template>
  <div>
    <!-- Result -->

    <b-container>
      <template v-if="loadingCatergories">
        <div>
          <loading-icon />
        </div>
      </template>

      <template v-else>
        <hr />
        <div>
          <b-row class="wrap" ref="wrap">
            <b-tabs>
              <categories-harajs
                :harajs="harajs"
                v-on:selectedHaraj="getHaraj($event)"
                :harajStyleTitle="harajStyleTitle"
              />
              <sub-catergories-one
                :level1="level1"
                v-if="switchBrands"
                v-on:selectedBrand="getBrand($event)"
                :brandStyleTitle="brandStyleTitle"
              />
              <sub-catergories-two
                :level2="level2"
                v-if="switchModels"
                v-on:selectedLevelTwo="getLevelTwo($event)"
                :modelStyleTitle="modelStyleTitle"
              />
            </b-tabs>
          </b-row>
        </div>

        <hr />
        <index-search
          :states="states.country.states"
          v-on:getSearchedAds="getSearchedAds($event)"
          :ads="ads"
        />
        <b-row>
          <b-col
            sm="12"
            md="12"
            lg="9"
            xl="10"
            class="mt-2"
            v-if="isFiltered == false"
          >
            <div v-for="(ad, index) in ads" :key="index">
              <AdItem :ad="ad" v-if="isFiltered == false" />
              <hr
                style="width:100%;text-align:left;margin-left:0"
                v-if="isFiltered == false"
              />
            </div>
            <div class="text-center">
              <b-button class="secondaryBackgroundColor my-2" @click="showMore"
                >Show More</b-button
              >
            </div>
          </b-col>
          <b-col
            sm="12"
            md="12"
            lg="9"
            xl="10"
            class="mt-2"
            v-if="isFiltered == true"
          >
            <div v-for="(ad, index) in filters" :key="index">
              <AdItem :ad="ad" v-if="isFiltered == true" />
              <hr
                style="width:100%;text-align:left;margin-left:0"
                v-if="isFiltered == true"
              />
            </div>
          </b-col>
        </b-row>
      </template>
    </b-container>
  </div>
</template>

<script>
import AdItem from "./AdItem.vue";
import LoadingIcon from "../components/LoadingIcon.vue";
import UppCatergories from "../components/UppCatergories.vue";
import IndexSearch from "../components/IndexSearch.vue";
import SubCatergoriesOne from "./SubCatergoriesOne.vue";
import SubCatergoriesTwo from "./SubCatergoriesTwo.vue";

///queries
import Ads from "../graphql/queries/ads.gql";
import Harajs from "../graphql/queries/taxonomies/harajs.gql";
import Level1 from "../graphql/queries/taxonomies/brands.gql";
import Level2 from "../graphql/queries/taxonomies/models.gql";
import Years from "../graphql/queries/taxonomies/years.gql";
import States from "../graphql/queries/somaliaState.gql";
import CategoriesHarajs from "./CategoriesHarajs.vue";

let allCategories = Harajs;

let allLevel1Tax = Level1;
let allLevel2Tax = Level2;
let allAds = Ads;
let allYears = Years;
let allStates = States;

export default {
  components: {
    CategoriesHarajs,
    AdItem,
    LoadingIcon,
    // eslint-disable-next-line vue/no-unused-components
    UppCatergories,
    // eslint-disable-next-line vue/no-unused-components
    IndexSearch,
    SubCatergoriesOne,
    SubCatergoriesTwo,
  },
  data() {
    return {
      ads: [],
      loadingCatergories: 0,
      // isShowFilteredAds: false,
      harajs: [],
      level1: [],
      level2: [],
      years: [],
      states: [],
      switchBrands: null,
      switchModels: null,
      selectedHaraj: null,
      selectedBrand: null,
      selectModel: null,
      harajStyleTitle: "",
      brandStyleTitle: "",
      modelStyleTitle: "",
      filters: null,
      isFiltered: false,
      isCars: false,
      itemsNumber: 10,
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
            itemsNumber: this.itemsNumber,
          };
        } else if (this.selectModel != null) {
          return {
            valueName: this.selectModel,
            operator: "EQ",
            itemsNumber: this.itemsNumber,
          };
        } else if (this.selectedBrand != null) {
          return {
            valueName: this.selectedBrand,
            operator: "EQ",
            itemsNumber: this.itemsNumber,
          };
        } else if (this.selectedHaraj == null) {
          return {
            valueName: "%%",
            operator: "LIKE",
            itemsNumber: this.itemsNumber,
          };
        }
      },
      skip() {
        if (this.selectModel != null) {
          return false;
        } else if (this.selectedHaraj != null) {
          return false;
        } else if (this.selectedBrand != null) {
          return false;
        } else {
          return false;
        }
      },
      update(data) {
        if (this.selectModel != null) {
          // this.$apollo.queries.ads.refetch();
          return data.ads.data;
        } else if (this.selectedHaraj != null) {
          this.$apollo.queries.ads.refetch();

          return data.ads.data;
        } else if (this.selectedBrand != null) {
          // this.$apollo.queries.ads.refetch();

          return data.ads.data;
        } else {
          return data.ads.data;
        }
      },
    },
    harajs: {
      query: allCategories,
      loadingKey: "loadingCatergories",
      update(data) {
        return data;
      },
    },
    level1: {
      query: allLevel1Tax,
      loadingKey: "loadingCatergories",

      variables() {
        return {
          catergoryName: this.selectedHaraj,
        };
      },
      skip() {
        if (this.selectedHaraj == null) {
          return true;
        }
      },
      update(data) {
        if (this.selectedHaraj != null) {
          this.switchBrands = true;
          // this.$apollo.queries.ads.refetch();

          return data;
        }
      },
    },
    level2: {
      query: allLevel2Tax,
      loadingKey: "loadingCatergories",
      variables() {
        return {
          LevelName: this.selectedBrand,
        };
      },
      skip() {
        if (this.selectedBrand == null) {
          return true;
        }
      },
      update(data) {
        if (this.selectedBrand != null) {
          this.switchModels = true;
          // this.$apollo.queries.ads.refetch();
          return data;
        }
      },
    },
    years: {
      query: allYears,
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
    showMore() {
      this.itemsNumber = this.itemsNumber + 10;
    },
    getHaraj(haraj) {
      this.selectedHaraj = haraj;
      this.selectedHaraj = haraj;
      this.harajStyleTitle = haraj;
      this.selectModel = null;
      this.selectedBrand = null;
      this.switchModels = false;
      this.isCars = false;
      this.isFiltered = false;
      this.$apollo.queries.ads.refetch();

      if (haraj == "cars") {
        this.isCars = true;
      }
    },
    getBrand(brand) {
      this.selectedHaraj = null;
      this.brandStyleTitle = brand;
      this.selectModel = null;
      this.selectedBrand = brand;
      this.switchModels = true;
      this.isFiltered = false;
      this.$apollo.queries.ads.refetch();

      // this.$apollo.queries.ads.refetch();
    },
    getLevelTwo(model) {
      this.modelStyleTitle = model;
      this.selectModel = model;
      this.selectedHaraj = null;
      this.selectedBrand = null;
      this.isFiltered = false;

      this.$apollo.queries.ads.refetch();
    },

    getSearchedAds(filteredAds) {
      this.filters = filteredAds;
      this.isFiltered = true;
    },
  },
};
</script>
