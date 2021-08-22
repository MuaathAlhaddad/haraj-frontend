<template>
  <div>
    <b-col class="my-2 reg-form" cols="12">
      <alert-erorr :message="'Invalid Code!'" v-if="alert" />
      <progress-bar :value="60" />
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group id="code" label="Verification Code" label-for="code">
          <b-form-input
            id="code"
            name="code"
            v-model="$v.form.code.$model"
            :state="validateState('code')"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback"
            >This is a required field and must be 6
            characters.</b-form-invalid-feedback
          >
        </b-form-group>

        <div class="submit-btn">
          <b-button type="submit">Finish</b-button>
        </div>
      </b-form>
    </b-col>
  </div>
</template>

<script>
import AlertErorr from "../AlertErorr.vue";
import ProgressBar from "../ProgressBar.vue";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  components: { ProgressBar, AlertErorr },
  validations: {
    form: {
      code: {
        required,
        minLength: minLength(6),
      },
    },
  },
  data() {
    return {
      form: {
        code: null,
      },
      alert: null,
    };
  },
  methods: {
    validateState(code) {
      const { $dirty, $error } = this.$v.form[code];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.$emit("verifyReg", this.form.code);
    },
  },
};
</script>
<style scoped></style>
