<template>
  <div>
    <b-container>
      <!-- RESPONSIVE GRID -->
      <b-row>
        <b-col sm="6" md="4" lg="3" xl="2" class="mt-5">
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

        <b-col sm="6" md="8" lg="9" xl="10" class="mt-2">
          <!-- TOP ALIGNED (DEFAULT) -->
          <div v-for="(ad, index) in ads" :key="index">
            <AdItem :ad="ad" />
            <hr style="width:100%;text-align:left;margin-left:0" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
import AdItem from "./AdItem.vue";

export default {
  components: { AdItem },
  apollo: {
    // Simple query that will update the 'hello' vue property
    ads: gql`
      query {
        ads {
          id
          name
          description
          price
        }
      }
    `,
  },
};
</script>
<style scoped></style>
