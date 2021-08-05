<template>
  <div>
    <Navbar />
    <div class="container">
      <!-- RESPONSIVE GRID -->
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-2">
          <div class="row">
            <div class="mb-2">
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
            </div>
            <div class="mb-2">
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
            </div>
            <div class="mb-2">
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
              <img
                class="align-self-start mr-2"
                width="50px"
                src="https://source.unsplash.com/random/90x93"
              />
            </div>
          </div>
        </div>

        <div
          class="col-sm-6 col-md-8 col-lg-9 col-xl-10 mt-2"
          style="border:1px solid #333"
        >
          <!-- TOP ALIGNED (DEFAULT) -->

          <div class="media  mt-2">
            <div class="media-body">
              <h6>Top aligned media</h6>

              <div class="row">
                <div class="col-sm-9" style="border:1px solid blue">
                  <i><font-awesome-icon icon="user-secret" /> amer </i>
                  <div class="row">
                    <div class="col-8 col-sm-6" style="border:1px solid red">
                      <i><font-awesome-icon icon="user-secret" /> amer </i>
                    </div>
                    <div class="col-4 col-sm-6" style="border:1px solid red">
                      <i><font-awesome-icon icon="user-secret" /> amer </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="mr-3 align-self-start"
              src="https://source.unsplash.com/random/90x93"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../layout/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
