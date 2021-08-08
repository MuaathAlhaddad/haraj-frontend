<template>
  <div>
    <b-container class="bv-example-row mt-5">
      <hr />
      <div class="media mt-2 ">
        <router-link :to="{ path: `ads/1` }">
          <img
            class="mr-3 align-self-start"
            src="https://source.unsplash.com/random/90x93"
          />
        </router-link>
        <div class="media-body">
          <h6>
            <router-link :to="{ path: `ads/1` }">Amer</router-link>
          </h6>

          <b-row>
            <b-col sm="9">
              <b-row>
                <b-col class="col-8" sm="6">
                  <i class="fa fa-usd"> Price</i>
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
                  <i class="fa fa-user"> Amer</i>
                </b-col>
                <b-col sm="6" class="col-4">
                  <i class="fa fa-map-marker">
                    Magadisgu
                  </i>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
        <div>
          <i class="fa fa-usd"> Price</i>
        </div>
      </div>
      <hr />
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
