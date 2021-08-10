<template>
  <div>
    <b-container class="bv-example-row">
      <b-container class="bv-example-row mt-5">
        <b-row class="row">
          <b-col col lg="4" md="12" sm="12" xs="12">
            <b-button-group>
              <b-button
                v-bind="switchButton"
                class="custom-size-button2"
                v-bind:class="[
                  switchButton == 0 ? 'conditionalBtn' : 'normalBtn',
                ]"
                v-on:click="detail"
                >Ad Details</b-button
              >
              <b-button
                class="custom-size-button2"
                v-bind:class="[
                  switchButton == 1 ? 'conditionalBtn' : 'normalBtn',
                ]"
                v-bind="switchButton"
                v-on:click="review"
                >Photos</b-button
              >
              <b-button
                class="custom-size-button2"
                v-bind:class="[
                  switchButton == 2 ? 'conditionalBtn' : 'normalBtn',
                ]"
                v-on:click="comments"
                >Terms</b-button
              >
              <b-button
                class="custom-size-button2"
                v-bind:class="[
                  switchButton == 3 ? 'conditionalBtn' : 'normalBtn',
                ]"
                v-on:click="finish"
                >Finish</b-button
              >
            </b-button-group></b-col
          >
        </b-row>
      </b-container>
      <b-row class="mb-5">
        <Details v-if="switchButton == 0" />
        <photos v-if="switchButton == 1" />
        <terms v-if="switchButton == 2" />
        <finish v-if="switchButton == 3" />
        <b-col cols="12" lg="3" md="3" sm="12" class="mt-3">
          <b-card border-variant="info" header="Notes">
            <b-card-text>
              <ul>
                <li>Write a note</li>
                <li>Write a note</li>
                <li>Write a note</li>
                <li>Write a note</li>
                <li>Write a note</li>
                <li>Write a note</li>
              </ul></b-card-text
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Details from "../components/createAdComp/Details.vue";
import Finish from "../components/createAdComp/Finish.vue";
import Photos from "../components/createAdComp/Photos.vue";
import Terms from "../components/createAdComp/Terms.vue";
export default {
  components: { Details, Photos, Terms, Finish },
  data() {
    return {
      switchButton: 0,
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
      this.switchButton = 3;
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
.custom-size-button1 {
  width: 200px !important;
}
.custom-size-button2 {
  width: 100px !important;
}

#detail {
  background-color: #f5f5f5;
  border: 1px solid #e4e7f5;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 100px;
}

.normalBtn {
  background-color: #747474;
}

.conditionalBtn {
  background-color: #4f9da6;
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
