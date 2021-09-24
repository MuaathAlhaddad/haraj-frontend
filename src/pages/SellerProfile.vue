<template>
  <!-- TOP ALIGNED (DEFAULT) -->
  <ApolloQuery
    :query="(gql) => UserDetails"
    :variables="{ id: $route.params.sellerId }"
  >
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
        <div>
          <div class="bg-dark colored-div">
            <div class="avatar text-center">
              <b-avatar
                rounded
                size="100px"
                v-if="data.user.attachments.data.length != 0"
                :src="
                  data.user.attachments.data[
                    data.user.attachments.data.length - 1
                  ].path
                "
              ></b-avatar>
              <b-avatar
                rounded
                size="100px"
                v-if="data.user.attachments.data.length == 0"
                :src="
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                "
              ></b-avatar>
            </div>
          </div>
          <div class="text-center">
            <h5>{{ data.user.name }}</h5>
            <b-container class="bv-example-row">
              <b-row>
                <b-col cols="5"> </b-col>
                <b-col cols="1">
                  <b-badge class="budget">
                    <b-icon-patch-check
                      variant="dark"
                    ></b-icon-patch-check> </b-badge
                ></b-col>

                <b-col cols="1">
                  <b-badge class="budget">
                    <b-icon-calendar2-check-fill
                      variant="dark"
                    ></b-icon-calendar2-check-fill> </b-badge
                ></b-col>
              </b-row>
              <div class="row">
                <b-col cols="5"> </b-col>
                <b-col cols="1">
                  <span class="spanText"> Verified</span>
                </b-col>

                <b-col cols="1"
                  ><span class="spanText">{{
                    data.user.created_at
                  }}</span></b-col
                >
                <b-col cols="5"> </b-col>
              </div>
            </b-container>
          </div>
          <b-container class="bv-example-row mt-3">
            <div class="row">
              <b-col col lg="4" md="12" sm="12" xs="12">
                <b-button-group>
                  <b-button
                    v-bind:class="
                      switchButton == 0 ? 'primaryBackgroundColor' : 'normalBtn'
                    "
                    v-on:click="product"
                    >Products</b-button
                  >
                  <b-button
                    class="custom-size-button2"
                    v-bind:class="
                      switchButton == 1 ? 'primaryBackgroundColor' : 'normalBtn'
                    "
                    v-on:click="review"
                    >Reviews</b-button
                  >
                </b-button-group></b-col
              >
            </div>
          </b-container>
          <ads-list v-if="switchButton == 0" :adsData="data.user" />
          <review-list v-if="switchButton == 1" :reviewData="data.user" />
        </div>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">
        <loading-icon />
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import AdsList from "../components/sellerPage/AdsList.vue";
import ReviewList from "../components/sellerPage/ReviewList.vue";
import LoadingIcon from "../components/LoadingIcon.vue";
import UserDetails from "../graphql/queries/userData.gql";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { AdsList, ReviewList, LoadingIcon },
  data() {
    return {
      switchButton: 0,
      UserDetails,
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
