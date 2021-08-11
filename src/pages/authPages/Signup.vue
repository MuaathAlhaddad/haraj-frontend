<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12"
          ><h4 class="titleAd">SIGN UP</h4>
          <hr />
          <b-form @submit="onSubmit">
            <signup-first v-if="switchButton == 0" />
            <signup-second-step v-if="switchButton == 1" />
            <signup-third-step v-if="switchButton == 2" />
            <signup-fourth-step v-if="switchButton == 3" />
            <hr />
            <div class="submit-btn">
              <b-button
                type="submit"
                v-if="switchButton == 0"
                v-on:click="step2"
                >Next</b-button
              >
              <b-button
                type="submit"
                v-if="switchButton == 1"
                v-on:click="step3"
                >Next</b-button
              >
              <b-button
                type="submit"
                v-if="switchButton == 2"
                v-on:click="step4"
                >Next</b-button
              >
              <b-button
                type="submit"
                v-if="switchButton == 3"
                v-on:click="finish"
                >Finish</b-button
              >
            </div>
          </b-form>
        </b-col>
      </b-row></b-container
    >
  </div>
</template>

<script>
import SignupFirst from "../../components/authComp/SignupFirst.vue";
import SignupFourthStep from "../../components/authComp/SignupFourthStep.vue";
import SignupSecondStep from "../../components/authComp/SignupSecondStep.vue";
import SignupThirdStep from "../../components/authComp/SignupThirdStep.vue";
export default {
  components: {
    SignupFirst,
    SignupSecondStep,
    SignupThirdStep,
    SignupFourthStep,
  },

  data() {
    return {
      switchButton: 0,
      form: {
        country: null,
      },
      countries: [
        { text: "select your country", value: null },
        "aaaaaaa",
        "bbbbbbb",
        "cccccccc",
        "dddddd",
      ],
    };
  },
  methods: {
    step2() {
      this.switchButton = 1;
    },
    step3() {
      this.switchButton = 2;
    },
    step4() {
      this.switchButton = 3;
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
<style>
.titleAd {
  color: #336699;
}
.submit-btn {
  text-align: center;
  max-width: 100%;
}
.submit-btn button {
  width: 250px;
}
.reg-form {
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 30px;
}
</style>
