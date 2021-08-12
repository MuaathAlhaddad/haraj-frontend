<template>
  <b-col cols="12" lg="3" xl="3" md="6" sm="12" class="">
    <b-card img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        <b-row class="d-flex justify-content-between mx-1">
          <h6 class="titleAd">Car for sell</h6>
          <!-- <div><i class="fa fa-user"> Amer</i></div> -->
          <div><i class="fa fa-usd"> 200</i></div>
        </b-row>
      </b-card-text>
      <b-card-text>
        <p><i class="fa fa-user"> Messi</i></p>
        <p><i class="fa fa-clock-o"> 10mins</i></p>
        <p><i class="fa fa-map-marker"> Ryiad </i></p>
      </b-card-text>

      <template #footer>
        <div class="text-center"><b-button>View</b-button></div>
      </template>
    </b-card>
    <br />
  </b-col>
</template>
<style scoped>
.titleAd {
  color: #336699;
}
</style>
