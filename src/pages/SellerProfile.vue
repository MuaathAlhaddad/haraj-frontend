<template>
  <div>
    <div class="bg-dark colored-div">
      <div class="avatar text-center">
        <b-avatar
          rounded
          size="100px"
          src="https://placekitten.com/300/300"
        ></b-avatar>
      </div>
    </div>
    <div class="text-center">
      <h5>Amer</h5>
      <p class="text-muted">@amer_muaadh</p>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="5"> </b-col>
          <b-col cols="1">
            <b-badge class="budget">
              <b-icon-patch-check variant="dark"></b-icon-patch-check></b-badge
          ></b-col>

          <b-col cols="1">
            <b-badge class="budget">
              <b-icon-calendar2-check-fill
                variant="dark"
              ></b-icon-calendar2-check-fill></b-badge
          ></b-col>
        </b-row>
        <div class="row">
          <b-col cols="5"> </b-col>
          <b-col cols="1"> <span class="spanText">Vertified</span></b-col>

          <b-col cols="1"><span class="spanText">6 years ago</span></b-col>
          <b-col cols="5"> </b-col>
        </div>
      </b-container>
    </div>
    <b-container class="bv-example-row mt-3">
      <div class="row">
        <b-col col lg="4" md="12" sm="12" xs="12">
          <b-button-group>
            <b-button
              v-bind="switchButton"
              class="custom-size-button2"
              v-bind:class="[
                switchButton == 0 ? 'conditionalBtn' : 'normalBtn',
              ]"
              v-on:click="product"
              >Products</b-button
            >
            <b-button
              class="custom-size-button2"
              v-bind:class="[
                switchButton == 1 ? 'conditionalBtn' : 'normalBtn',
              ]"
              v-bind="switchButton"
              v-on:click="review"
              >Reviews</b-button
            >
          </b-button-group></b-col
        >
      </div>
    </b-container>
    <ads-list v-if="switchButton == 0" />
    <review-list v-if="switchButton == 1" />
  </div>
</template>

<script>
import AdsList from "../components/sellerPage/AdsList.vue";
import ReviewList from "../components/sellerPage/ReviewList.vue";
export default {
  components: { AdsList, ReviewList },
  data() {
    return {
      switchButton: 0,
    };
  },

  methods: {
    product() {
      this.switchButton = 0;
    },
    review() {
      this.switchButton = 1;
    },
  },
};
</script>

<style scoped>
.colored-div {
  height: 250px;
  margin-bottom: 70px;
}
.avatar {
  position: relative;
  top: 200px;
}
.budget-div {
  width: 100px;
}
.budget {
  background-color: #cbf7d9;
}
.spanText {
  font-size: 12px;
}
.normalBtn {
  background-color: #747474;
}

.conditionalBtn {
  background-color: #4f9da6;
}
</style>
