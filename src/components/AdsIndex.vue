<template>
  <div>
    <ApolloQuery :query="(gql) => allAds">
      <!-- TODO -->

      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo"><loading-icon /></div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">
          <loading-icon />
        </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <b-container>
            <template v-if="loadingCatergories">
              <div></div>
            </template>

            <template v-else>
              <upp-catergories :catergories="catergories" />
              <sub-catergories-one :brands="brands" />
              <sub-catergories-two :models="models" />
            </template>

            <hr />
            <index-search />
            <b-row>
              <SideCatergories :catergories="catergories" />

              <b-col sm="12" md="12" lg="9" xl="10" class="mt-2">
                <!-- TOP ALIGNED (DEFAULT) -->

                <div v-for="(ad, index) in data.ads.data" :key="index">
                  <AdItem :ad="ad" />
                  <hr style="width:100%;text-align:left;margin-left:0" />
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">
          <loading-icon />
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import AdItem from "./AdItem.vue";

import allAds from "../graphql/queries/ads.gql";
import LoadingIcon from "../components/LoadingIcon.vue";
import UppCatergories from "../components/UppCatergories.vue";
import SideCatergories from "../components/SideCatergories.vue";
import IndexSearch from "../components/IndexSearch.vue";
import Catergories from "../graphql/queries/taxonomies/categories.gql";
import Brands from "../graphql/queries/taxonomies/brands.gql";
import Models from "../graphql/queries/taxonomies/models.gql";
import SubCatergoriesOne from "./SubCatergoriesOne.vue";
import SubCatergoriesTwo from "./SubCatergoriesTwo.vue";

const allCategories = Catergories;
const allBrands = Brands;
const allModels = Models;
export default {
  components: {
    AdItem,
    LoadingIcon,
    UppCatergories,
    IndexSearch,
    SideCatergories,
    SubCatergoriesOne,
    SubCatergoriesTwo,
  },
  data() {
    return {
      allAds,
      loadingCatergories: 0,
      catergories: [],
      brands: [],
    };
  },
  apollo: {
    catergories: {
      query: allCategories,
      loadingKey: "loadingCatergories",
      update(data) {
        return data;
      },
    },
    brands: {
      query: allBrands,
      loadingKey: "loadingCatergories",
      variables: {
        catergoryName: "devices",
      },
      update(data) {
        return data;
      },
    },
    models: {
      query: allModels,
      loadingKey: "loadingCatergories",
      update(data) {
        return data;
      },
    },
  },
};
</script>
<style scoped></style>
