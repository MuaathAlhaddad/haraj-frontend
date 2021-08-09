<template>
  <div>
    <b-container class="bv-example-row mt-5">
      <div v-for="(ad, index) in adsData.ads.data" :key="index">
        <hr />
        <div class="media mt-2 ">
          <router-link :to="{ path: `ads/{{ad.id}}` }">
            <img
              class="mr-3 align-self-start"
              src="https://source.unsplash.com/random/90x93"
            />
          </router-link>
          <div class="media-body">
            <h6>
              <router-link
                :to="{
                  name: 'ad-show',
                  params: { userId: `{{  ad.id }}` },
                }"
                >{{ ad.name }}</router-link
              >
            </h6>

            <b-row>
              <b-col sm="9">
                <b-row>
                  <b-col class="col-8" sm="6">
                    <i class="fa fa-usd"> {{ ad.price }}</i>
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
                      <router-link
                        :to="{
                          name: 'seller-profile',
                          params: { userId: `{{ ad.user.id }}` },
                        }"
                      >
                        {{ ad.user.name }}</router-link
                      >
                    </i>
                  </b-col>
                  <b-col sm="6" class="col-4">
                    <i class="fa fa-map-marker">
                      {{ adsData.state.name }}
                    </i>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
          <div>
            <i class="fa fa-usd"> {{ ad.price }}</i>
          </div>
        </div>
        <hr />
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  props: ["adsData"],
};
</script>

<style scoped></style>
