<template>
  <div>
    <div class="col">
      <b-card
        img-src="https://placekitten.com/500/350"
        img-alt="Image"
        img-top
        style="width: 15rem; height: 25rem; color:black"
      >
        <b-card-text>
          <b-row class="d-flex justify-content-between mx-1">
            <h6>
              <router-link :to="{ path: `ads/${ad.id}` }">
                <span class="primaryColor"> {{ ad.title }}</span>
              </router-link>
            </h6>
            <!-- <div><i class="fa fa-user"> Amer</i></div> -->
            <div>
              <small class="secondaryColor">
                <i class="fas fa-dollar-sign"></i> {{ ad.price }}
              </small>
            </div>
          </b-row>
        </b-card-text>
        <b-card-text>
          <p>
            <small class="secondaryColor">
              <i class="far fa-user"></i>
              {{ ad.user.name }}
            </small>
          </p>
          <p>
            <small class="secondaryColor">
              <i class="far fa-clock">{{ calDuration(ad.created_at) }} </i>
              <span v-if="duration.days"> {{ duration.days }}d</span>
              <span v-if="duration.hours"> {{ duration.hours }}h</span>
              <span v-if="duration.mins"> {{ duration.mins }}m</span>
              <span v-if="duration.secs"> {{ duration.secs }}s</span>
              <span v-if="duration.secs"> ago</span>
            </small>
          </p>

          <p>
            <small class="secondaryColor">
              <i class="fas fa-map-marker secondaryColor"></i>
              {{ ad.user.country.name }}
            </small>
          </p>
        </b-card-text>

        <template #footer>
          <div class="text-center">
            <router-link :to="{ path: `ads/${ad.id}` }">
              <b-button class="primaryBackgroundColor">View</b-button>
            </router-link>
          </div>
        </template>
      </b-card>
      <br />
      <div class=" card-body ">
        <h4 class=" card-title text-truncate"></h4>
        <p class="card-text text-truncate"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      duration: {
        days: null,
        hours: null,
        mins: null,
        secs: null,
      },
    };
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
