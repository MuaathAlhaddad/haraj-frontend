<template>
  <div>
    <b-container>
      <upp-catergories />
      <hr />
      <index-search />
      <b-row>
        <b-col sm="4" md="12" lg="2" xl="2" class="mt-5">
          <div>
            <h6>All Catergories</h6>
          </div>

          <hr style="width:auto" />
          <p>Automobiles</p>
          <p>Phones & Tables</p>
          <p>Electonics</p>
          <p>Fashions</p>
          <p>Furniture</p>
          <div>
            <hr style="width:auto" />

            <h6>Locations</h6>
          </div>
          <hr style="width:auto" />
          <p>Magadisgu</p>
          <p>Kasapero</p>
          <p>Hosha</p>
          <p>South Somalia</p>
        </b-col>

        <b-col sm="12" md="12" lg="9" xl="10" class="mt-2">
          <!-- TOP ALIGNED (DEFAULT) -->
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
                <div v-for="(ad, index) in data.ads.data" :key="index">
                  <AdItem :ad="ad" />
                  <hr style="width:100%;text-align:left;margin-left:0" />
                </div>
              </div>

              <!-- No result -->
              <div v-else class="no-result apollo">
                <loading-icon />
              </div>
            </template>
          </ApolloQuery>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdItem from "./AdItem.vue";

import allAds from "../graphql/queries/ads.gql";
import LoadingIcon from "../components/LoadingIcon.vue";
import UppCatergories from "../components/UppCatergories.vue";
import IndexSearch from "../components/IndexSearch.vue";
export default {
  components: { AdItem, LoadingIcon, UppCatergories, IndexSearch },
  data() {
    return { allAds };
  },
};
</script>
<style scoped></style>
