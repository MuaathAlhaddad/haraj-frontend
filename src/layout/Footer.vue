<template>
  <div>
    <footer class="text-center">
      <div class="footer-above">
        <div class="container">
          <div class="row">
            <div class="footer-col col-md-4">
              <img v-bind:src="logo" width="150px" />
            </div>
            <div class="footer-col col-md-4">
              <div>
                <router-link
                  :to="{
                    name: 'about',
                  }"
                  >About
                </router-link>
              </div>
              <div>
                <router-link
                  :to="{
                    name: 'terms-conditions',
                  }"
                >
                  Terms & Conditions
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{
                    name: 'usage-agreement',
                  }"
                >
                  Usage Agreement
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{
                    name: 'prohibited-ads',
                  }"
                >
                  Prohibited Ads
                </router-link>
              </div>

              <ul class="list-inline">
                <!-- some social networks -->
              </ul>
            </div>
            <div class="footer-col col-md-4">
              <h3>About Suuq Foran</h3>
              <p>
                Suuq Foran is a system meant for making users selling & buying
                variety things from different catergories.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-below">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              Developed by
              <a
                href="http://areebtech.io"
                target="_blank"
                rel="noopener noreferrer"
                >Areebtech.io</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "../assets/logoWhite.png";
export default {
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>

<style scoped>
footer {
  color: #fff;
}
footer h3 {
  margin-bottom: 30px;
}
footer .footer-above {
  padding-top: 50px;
  background-color: #fc7843;
}
footer .footer-col {
  margin-bottom: 50px;
}
footer .footer-below {
  padding: 5px 0;
  background-color: #3d2314;
}
a {
  color: white;
}
</style>
