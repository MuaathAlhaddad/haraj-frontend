<template>
  <b-col cols="12" lg="8" xl="8" sm="12" md="8" class="user-info-div">
    <div class="m-3">
      <h4 class="text-center">
        <b-icon icon="archive-fill" font-scale="0.9"> </b-icon>
        My ads
        <b-icon icon="archive-fill" font-scale="0.9"> </b-icon>
      </h4>
      <hr />
      <b-row>
        <b-col cols="12" lg="12" xl="12" md="12" sm="12" class="">
          <div class="media mt-2 p-2 bg-light">
            <!-- <router-link :to="{ path: `ads/{{ad.id}}` }"> -->
            <img
              class="mr-3 align-self-start"
              src="https://source.unsplash.com/random/90x93"
            />
            <!-- </router-link> -->
            <div class="media-body">
              <h6>
                <!-- <router-link
                :to="{
                  name: 'ad-show',
                  params: { userId: `{{  ad.id }}` },
                }"
                > -->
                <!-- {{ ad.title }} -->
                title
                <!-- </router-link
              > -->
              </h6>

              <b-row>
                <b-col sm="9">
                  <b-row>
                    <b-col class="col-8" sm="6">
                      <i class="fa fa-usd"> 20</i>
                    </b-col>
                    <b-col class="col-4" sm="6">
                      <i class="fa fa-clock-o">
                        Sold
                      </i>
                    </b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col sm="6" class="col-8">
                      <i class="fa fa-user">
                        <!-- <router-link
                        :to="{
                          name: 'seller-profile',
                          params: { userId: `{{ ad.user.id }}` },
                        }"
                      > -->
                        <!-- {{ ad.user.name }} -->
                        <!-- </router-link> -->
                      </i>
                    </b-col>
                    <b-col sm="6" class="col-4">
                      <i class="fa fa-map-marker">
                        <!-- {{ adsData.state.name }} -->
                      </i>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
            <div>
              <i class="fa fa-usd"> 300</i>
            </div>
          </div>
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
