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
            {{ adData.title }}
          </router-link>
        </h6>

        <b-row>
          <b-col sm="9">
            <b-row>
              <b-col class="col-8" sm="6">
                <i class="fa fa-usd"> {{ adData.price }}</i>
              </b-col>
              <b-col class="col-4" sm="6">
                <i class="fa fa-clock-o">
                  {{ adData.created_at }}
                </i>
              </b-col>
            </b-row>
            <br />

            <b-row>
              <b-col sm="6" class="col-8">
                <i class="fa fa-user"> {{ adData.user.name }}</i>
              </b-col>
              <b-col sm="6" class="col-4">
                <i class="fa fa-map-marker">
                  {{ adData.user.country.name }}
                </i>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div>
        <i class="fa fa-usd"> {{ adData.price }}</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      adData: [],
    };
  },
  created() {
    this.adData = this.$props.ad;
  },
};
</script>
