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
        <upp-catergories
          :harajs="harajs"
          v-on:selectedHaraj="getBrands($event)"
        />
        <sub-catergories-one
          :brands="brands"
          v-if="switchBrands"
          v-on:selectedBrand="getModels($event)"
        />
        <sub-catergories-two
          :models="models"
          v-if="switchModels"
          v-on:selectedModel="getAds($event)"
        />
        <hr />
        <index-search />
        <b-row>
          <b-col sm="12" md="12" lg="9" xl="10" class="mt-2">
            <div v-for="(ad, index) in ads.ads.data" :key="index">
              <AdItem :ad="ad" />
              <hr style="width:100%;text-align:left;margin-left:0" />
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
import Brands from "../graphql/queries/taxonomies/brands.gql";
import Models from "../graphql/queries/taxonomies/models.gql";

let allCategories = Harajs;

let allBrands = Brands;
let allModels = Models;
let allAds = Ads;
export default {
  components: {
    AdItem,
    LoadingIcon,
    UppCatergories,
    IndexSearch,
    SubCatergoriesOne,
    SubCatergoriesTwo,
  },
  data() {
    return {
      ads: [],
      loadingCatergories: 0,
      harajs: [],
      brands: [],
      models: [],
      switchBrands: null,
      switchModels: null,
      selectedHaraj: null,
      selectedBrand: null,
      selectModel: null,
    };
  },
  apollo: {
    ads: {
      query: allAds,
      loadingKey: "loadingCatergories",
      variables() {
        if (this.selectModel != null) {
          return {
            valueName: this.selectModel,
            operator: "LIKE",
          };
        } else {
          return {
            valueName: "%%",
            operator: "LIKE",
          };
        }
      },
      update(data) {
        return data;
      },
    },
    harajs: {
      query: allCategories,
      loadingKey: "loadingCatergories",
      update(data) {
        return data;
      },
    },
    brands: {
      query: allBrands,
      loadingKey: "loadingCatergories",

      variables() {
        return {
          catergoryName: this.selectedHaraj,
          operator: "LIKE",
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
          return data;
        }
      },
    },
    models: {
      query: allModels,
      loadingKey: "loadingCatergories",
      variables() {
        return {
          model: this.selectModel,
          operator: "LIKE",
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
          return data;
        }
      },
    },
  },
  methods: {
    getBrands(haraj) {
      this.selectModel = null;
      this.selectedHaraj = haraj;
      this.switchModels = false;
    },
    getModels(brand) {
      this.selectedBrand = brand;
      this.switchModels = true;
    },
    getAds(model) {
      this.selectModel = this.selectedHaraj;
      console.log(model);
    },
  },
};
</script>
<style scoped></style>
