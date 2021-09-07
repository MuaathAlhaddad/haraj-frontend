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
          <div v-for="(ad, index) in user.ads.data" :key="index">
            <div class="media mt-2 p-2 bg-light">
              <!-- <router-link :to="{ path: `ads/{{ad.id}}` }"> -->
              <img
                class="mr-3 align-self-start"
                src="https://source.unsplash.com/random/90x93"
              />
              <!-- </router-link> -->
              <div class="media-body">
                <h6>
                  <router-link
                    :to="{
                      name: 'ad-show',
                      params: { id: `${ad.id}` },
                    }"
                  >
                    {{ ad.title }}
                  </router-link>
                </h6>

                <b-row>
                  <b-col sm="9">
                    <b-row>
                      <b-col class="col-8" sm="6">
                        <small class="text-muted">
                          <i class="fas fa-dollar-sign"></i> {{ ad.price }}
                        </small>
                      </b-col>
                      <b-col class="col-4" sm="6">
                        <small class="text-muted">
                          <i class="far fa-clock"
                            >{{ calDuration(ad.created_at) }}
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
                          {{ ad.user.name }}
                        </small>
                      </b-col>
                      <b-col sm="6" class="col-4">
                        <small class="text-muted">
                          <i class="fas fa-map-marker"></i>
                          <!-- {{ ad.user.country.name }} -->
                        </small>
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
          </div>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      isFavourite: true,
      duration: {
        days: null,
        hours: null,
        mins: null,
        secs: null,
      },
    };
  },
  methods: {
    favourite(event) {
      event.target.disabled = !this.isFavourite;

      this.isFavourite = false;
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
