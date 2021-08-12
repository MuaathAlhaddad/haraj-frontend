<template>
  <b-col cols="9" lg="9" md="9" sm="9" xs="12">
    <b-container class="bv-example-row mt-3">
      <b-card bg-variant="light">
        <b-card-text>
          {{ newAd }}
          <div>
            <b-form @submit="onSubmit">
              <b-card
                bg-variant="light"
                title="Click here to post your ad"
                class="text-center"
              >
                <b-button class="button mt-3">Post</b-button>
              </b-card>
            </b-form>
          </div>
        </b-card-text>
      </b-card>
    </b-container>
  </b-col>
</template>

<script>
export default {
  props: ["newAd"],
  data() {
    return {};
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
.button {
  background-color: #4f9da6;
  width: 250px;
}
</style>
