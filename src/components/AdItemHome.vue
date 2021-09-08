<template>
  <b-col cols="12" lg="3" xl="3" md="6" sm="12" class="">
    <b-card img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        <b-row class="d-flex justify-content-between mx-1">
          <router-link :to="{ path: `/1` }">
            <h6 class="generalColorBrown">Car for sell</h6>
          </router-link>
          <!-- <div><i class="fa fa-user"> Amer</i></div> -->
          <div>
            <i class="fa fa-usd generalColorBrown"> 200</i>
          </div>
        </b-row>
      </b-card-text>
      <b-card-text>
        <p><i class="fa fa-user generalColorBrown"> Messi</i></p>
        <p><i class="fa fa-clock-o generalColorBrown"> 10mins</i></p>
        <p><i class="fa fa-map-marker generalColorBrown"> Ryiad </i></p>
      </b-card-text>

      <template #footer>
        <div class="text-center">
          <b-button class="primaryBackgroundColor">View</b-button>
        </div>
      </template>
    </b-card>
    <br />
  </b-col>
</template>
