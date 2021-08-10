<template>
  <b-col cols="9" lg="9" md="9" sm="9" xs="12">
    <b-container class="bv-example-row mt-3">
      <b-card bg-variant="light">
        <b-card-text>
          <div>
            <b-form @submit="onSubmit" @reset="onReset">
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
  data() {
    return {
      form: {
        email: "",
        title: "",
        description: "",
        price: null,
        negotiable: false,
        category: null,
        city: null,
        tag: null,
        checked: [],
      },
      categories: [
        { text: "Select One", value: null },
        "aaaaaaa",
        "bbbbbbb",
        "cccccccc",
        "dddddd",
      ],
      cities: [
        { text: "Select city", value: null },
        "aaaaaaa",
        "bbbbbbb",
        "cccccccc",
        "dddddd",
      ],
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
.button {
  background-color: #4f9da6;
  width: 250px;
}
</style>
