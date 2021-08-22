<template>
  <b-col cols="9" lg="9" md="12" sm="12" xs="12">
    <b-container class="bv-example-row mt-3">
      <b-card bg-variant="light" header="Ad Details">
        <b-card-text>
          <div>
            <alert-erorr :message="'You have to upload photos!'" v-if="alert" />
            <b-form-file
              v-model="photos"
              :state="Boolean(photos)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </div>
        </b-card-text>
        <div class="submit-btn">
          <b-button v-on:click="submitPhotos" type="submit">Next</b-button>
        </div>
      </b-card>
    </b-container>
  </b-col>
</template>

<script>
import AlertErorr from "../AlertErorr.vue";
export default {
  components: { AlertErorr },
  data() {
    return {
      photos: null,
      alert: null,
    };
  },
  methods: {
    submitPhotos() {
      if (this.photos == null) {
        this.alert = true;
        console.log("Photos should not be not");
      } else {
        this.$emit("passPhotos", this.photos);
      }
    },
  },
};
</script>

<style scoped>
.drag-box {
  height: 400px !important;
}
.submit-btn {
  text-align: center;
  max-width: 100%;
}
.submit-btn button {
  background-color: #4f9da6;
  width: 250px;
}
</style>

<!-- TODO: We need to work on how to store files to the local storage.-->
