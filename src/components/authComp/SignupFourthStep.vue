<template>
  <b-col class="my-2 reg-form" cols="12">
    <b-container class="bv-example-row mt-3">
      <progress-bar :value="100" />
      <b-card bg-variant="light" header=" ">
        <b-card-text>
          <div>
            <div>
              <b-card no-body>
                <div class="m-5">
                  Thank you for joining .............
                </div>
              </b-card>
            </div>
            <router-link to="ads">
              <div class="submit-btn">
                <b-button type="submit" variant="success">Close</b-button>
              </div>
            </router-link>
          </div>
        </b-card-text>
      </b-card>
    </b-container>
  </b-col>
</template>

<script>
import ProgressBar from "../ProgressBar.vue";
export default {
  components: { ProgressBar },
};
</script>
