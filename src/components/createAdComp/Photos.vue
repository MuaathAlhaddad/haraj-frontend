<template>
  <b-col cols="9" lg="9" md="9" sm="9" xs="12">
    <b-container class="bv-example-row mt-3">
      <b-card bg-variant="light" header="Add Photos">
        <b-card-text>
          <div class="drag-box text-center">
            <b-form-file
              v-model="file1"
              :state="Boolean(file1)"
              placeholder="Choose or drop photos..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </div>
        </b-card-text>
        <div class="submit-btn">
          <b-button class="btn1 m-1" type="submit">Back</b-button>
          <b-button class="btn2" type="submit">Next</b-button>
        </div>
      </b-card>
    </b-container>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      file1: null,
    };
  },
  methods: {
    detail() {
      this.switchButton = 0;
    },
    review() {
      this.switchButton = 1;
    },
    comments() {
      this.switchButton = 2;
    },
    finish() {
      this.switchButton = 4;
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
.drag-box {
  position: relative;
  top: 120px;
  height: 300px !important;
}
.submit-btn {
  text-align: center;
  max-width: 100%;
}
.submit-btn .btn1 {
  background-color: #747474;
  width: 100px;
}
.submit-btn .btn2 {
  background-color: #4f9da6;
  width: 100px;
}
</style>
