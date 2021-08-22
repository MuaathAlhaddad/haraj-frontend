<template>
  <b-col cols="12" lg="8" xl="8" sm="12" md="8" class="user-info-div">
    <div class="m-3">
      <h4 class="text-center">
        <b-icon icon="heart-fill" variant="danger" font-scale="0.9"> </b-icon>
        My Favourite ads
        <b-icon icon="heart-fill" variant="danger" font-scale="0.9"> </b-icon>
      </h4>
      <hr />
      <b-row>
        <b-col cols="12" lg="12" xl="12" md="12" sm="12" class="">
          <b-card v-if="isFavourite">
            <b-card-text>
              <b-row class="d-flex justify-content-between mx-1">
                <router-link :to="{ path: `/1` }">
                  <h6 class="titleAd">Car for sell</h6>
                </router-link>
                <!-- <div><i class="fa fa-user"> Amer</i></div> -->
                <div>
                  <b-button
                    variant="outline-dark"
                    v-on:click="favourite($event)"
                  >
                    X
                  </b-button>
                </div>
              </b-row>
            </b-card-text>
            <b-card-text>
              <p><i class="fa fa-user"> Messi</i></p>
              <p><i class="fa fa-map-marker"> Ryiad </i></p>
            </b-card-text>

            <template #footer>
              <div class="text-center">
                <b-button>View</b-button>
              </div>
            </template>
          </b-card>
          <br />
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      isFavourite: true,
    };
  },
  methods: {
    favourite(event) {
      event.target.disabled = !this.isFavourite;

      this.isFavourite = false;
    },
  },
};
</script>

<style scoped></style>
