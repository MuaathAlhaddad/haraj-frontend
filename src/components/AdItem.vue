<template>
  <div>
    <div class="media mt-2 ">
      <router-link :to="{ path: `ads/${adData.id}` }">
        <img
          class="mr-3 align-self-start"
          src="https://source.unsplash.com/random/90x93"
        />
      </router-link>

      <div class="media-body">
        <h6>
          <router-link :to="{ path: `ads/${adData.id}` }">
            <span class="primaryColor"> {{ adData.title }}</span>
          </router-link>
        </h6>

        <b-row>
          <b-col sm="9">
            <b-row>
              <b-col class="col-8" sm="6">
                <small class="secondaryColor">
                  <i class="fas fa-dollar-sign"></i> {{ adData.price }}
                </small>
              </b-col>
              <b-col class="col-4" sm="6">
                <small class="secondaryColor">
                  <i class="far fa-clock"
                    >{{ calDuration(adData.created_at) }}
                  </i>
                  <span v-if="duration.days"> {{ duration.days }}d</span>
                  <span v-if="duration.hours"> {{ duration.hours }}h</span>
                  <span v-if="duration.mins"> {{ duration.mins }}m</span>
                  <span v-if="duration.secs"> {{ duration.secs }}s</span>
                  <span v-if="duration.secs"> ago</span>
                </small>
              </b-col>
            </b-row>
            <br />

            <b-row>
              <b-col class="col-8" sm="6">
                <small class="secondaryColor">
                  <i class="far fa-user"></i>
                  {{ adData.user.name }}
                </small>
              </b-col>
              <b-col class="col-4" sm="6">
                <small class="secondaryColor">
                  <i class="fas fa-map-marker secondaryColor"></i>
                  {{ adData.user.country.name }}
                </small>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      adData: [],
      duration: {
        days: null,
        hours: null,
        mins: null,
        secs: null,
      },
    };
  },
  created() {
    this.adData = this.$props.ad;
  },
  methods: {
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
