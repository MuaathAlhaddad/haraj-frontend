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
          <div v-for="(ad, index) in favorites" :key="index">
            <div class="media mt-2 p-2 bg-light" :key="componentKey">
              <!-- <router-link :to="{ path: `ads/{{ad.id}}` }"> -->
              <img
                class="mr-3 align-self-start"
                width="110px"
                height="110px"
                :src="ad.attachments.data[0].path"
              />
              <!-- </router-link> -->
              <div class="media-body">
                <h6>
                  <router-link
                    :to="{
                      name: 'ad-show',
                      params: { id: ad.id },
                    }"
                  >
                    {{ ad.ad.title }}
                  </router-link>
                </h6>

                <b-row>
                  <b-col sm="9">
                    <b-row>
                      <b-col class="col-8" sm="6">
                        <small class="text-muted">
                          <i class="fas fa-dollar-sign"></i> {{ ad.ad.price }}
                        </small>
                      </b-col>
                      <b-col class="col-4" sm="6">
                        <small class="text-muted">
                          <i class="far fa-clock"
                            >{{ calDuration(ad.ad.created_at) }}
                          </i>
                          <span v-if="duration.days">
                            {{ duration.days }}d</span
                          >
                          <span v-if="duration.hours">
                            {{ duration.hours }}h</span
                          >
                          <span v-if="duration.mins">
                            {{ duration.mins }}m</span
                          >
                          <span v-if="duration.secs">
                            {{ duration.secs }}s</span
                          >
                          <span v-if="duration.secs"> ago</span>
                        </small>
                      </b-col>
                    </b-row>
                    <br />
                    <b-row>
                      <b-col sm="6" class="col-8">
                        <small class="text-muted">
                          <i class="far fa-user"></i>
                          {{ ad.ad.user.name }}
                        </small>
                      </b-col>
                      <b-col sm="6" class="col-4">
                        <small class="text-muted">
                          <i class="fas fa-map-marker"></i>
                          {{ ad.ad.user.state.name }}
                        </small>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </div>
              <div>
                <span style="cursor:pointer" @click="unFavorited(ad.id)">
                  <i class="fas fa-trash text-danger"></i>
                </span>
              </div>
            </div>
            <br />
          </div>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>

<script>
import unFavoriteAd from "../../graphql/mutations/unfavouriteAd.gql";
export default {
  props: ["favoritesAds", "user"],
  data() {
    return {
      componentKey: 0,

      favorites: this.$props.user.favorites.data,
      duration: {
        days: null,
        hours: null,
        mins: null,
        secs: null,
      },
      isFavourite: true,
    };
  },
  methods: {
    unFavorited(ad_id) {
      this.$apollo
        .mutate({
          mutation: unFavoriteAd,
          variables: {
            favorite_id: ad_id,
          },
        })
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          this.componentKey += 1;

          this.favorites.splice(this.favorites.indexOf(ad_id), 1);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    calDuration: function(created_at) {
      let self = this;
      let created_date = created_at;
      setInterval(function() {
        let created_at = new Date(created_date).getTime();

        let now = new Date().getTime();

        let duration = now - created_at;

        self.duration.days = Math.floor(duration / (1000 * 60 * 60 * 24));
        self.duration.hours = Math.floor(
          (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        self.duration.mins = Math.floor(
          (duration % (1000 * 60 * 60)) / (1000 * 60)
        );
        self.duration.secs = Math.floor((duration % (1000 * 60)) / 1000);
      }, 5000);
    },
  },
};
</script>

<style scoped></style>
