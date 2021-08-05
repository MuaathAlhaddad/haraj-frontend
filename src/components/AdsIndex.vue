<template>
  <div>
    <div class="container">
      <!-- RESPONSIVE GRID -->
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5">
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
        </div>

        <div class="col-sm-6 col-md-8 col-lg-9 col-xl-10 mt-2">
          <!-- TOP ALIGNED (DEFAULT) -->
          <div v-for="(ad, index) in ads" :key="index">
            <AdItem :ad="ad" />
            <hr style="width:100%;text-align:left;margin-left:0" />
          </div>
        </div>
      </div>
    </div>
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
