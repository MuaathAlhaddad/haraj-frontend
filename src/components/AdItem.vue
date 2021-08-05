<template>
  <div>
    <div class="media mt-2 ">
      <router-link :to="{ path: `ads/${ad.id}` }">
        <img
          class="mr-3 align-self-start"
          src="https://source.unsplash.com/random/90x93"
        />
      </router-link>
      <div class="media-body">
        <h6>
          <router-link :to="{ path: `ads/${ad.id}` }">{{
            ad.name
          }}</router-link>
        </h6>

        <div class="row">
          <div class="col-sm-9 ">
            <div class="row">
              <div class="col-8 col-sm-6">
                <i class="fa fa-usd"> {{ ad.price }}</i>
              </div>
              <div class="col-4 col-sm-6">
                <i class="fa fa-clock-o">
                  amer
                </i>
              </div>
            </div>
            <br />

            <div class="row">
              <div class="col-8 col-sm-6">
                <i class="fa fa-user"> Amer</i>
              </div>
              <div class="col-4 col-sm-6">
                <i class="fa fa-map-marker">
                  Magadisgu
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <i class="fa fa-usd"> {{ ad.price }}</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ad"],
};
</script>
