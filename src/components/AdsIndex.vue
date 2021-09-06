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
        <!-- <upp-catergories
          :harajs="harajs"
          v-on:selectedHaraj="getBrands($event)"
        /> -->
        <!-- <sub-catergories-one
          :brands="brands"
          v-if="switchBrands"
          v-on:selectedBrand="getModels($event)"
        /> -->
        <!-- <sub-catergories-two
          :models="models"
          v-if="switchModels"
          v-on:selectedModel="getAds($event)"
        /> -->
        <hr />
        <div>
          <b-row class="wrap" ref="wrap">
            <b-tabs>
              <categories-harajs
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
            </b-tabs>
          </b-row>
        </div>

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
import CategoriesHarajs from "@/components/CategoriesHarajs";

let allCategories = Harajs;

let allBrands = Brands;
let allModels = Models;
let allAds = Ads;
export default {
  components: {
    CategoriesHarajs,
    AdItem,
    LoadingIcon,
    // eslint-disable-next-line vue/no-unused-components
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
        if (this.selectedHaraj != null) {
          return {
            valueName: this.selectedHaraj,
            operator: "LIKE",
          };
        } else if (this.selectModel != null) {
          return {
            valueName: this.selectModel,
            operator: "EQ",
          };
        } else if (this.selectedBrand != null) {
          return {
            valueName: this.selectedBrand,
            operator: "EQ",
          };
        } else if (this.selectedHaraj == null) {
          return {
            valueName: "%%",
            operator: "LIKE",
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
          this.$apollo.queries.ads.refetch();
          return data;
        } else if (this.selectedHaraj != null) {
          this.$apollo.queries.ads.refetch();

          return data;
        } else if (this.selectedBrand != null) {
          this.$apollo.queries.ads.refetch();

          return data;
        } else {
          return data;
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
          this.$apollo.queries.ads.refetch();

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
          this.$apollo.queries.ads.refetch();
          return data;
        }
      },
    },
  },
  methods: {
    linkSubClass(index) {
      if (this.SubtabIndex === index) {
        return ["bg-info", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
    getBrands(haraj) {
      this.selectedHaraj = haraj;
      this.selectModel = null;
      this.selectedBrand = null;
      this.switchModels = false;
    },
    getModels(brand) {
      this.selectedHaraj = null;
      this.selectModel = null;
      this.selectedBrand = brand;
      this.switchModels = true;
    },
    getAds(model) {
      this.selectModel = model;
      this.selectedHaraj = null;
      this.selectedBrand = null;
    },
  },
};
</script>
