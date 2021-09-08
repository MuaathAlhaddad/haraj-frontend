<template>
  <div>
    <alert-erorr :message="'Make sure to fill the details'" v-if="alert" />
    <b-col class="my-2 reg-form" cols="12">
      <progress-bar :value="60" />

      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group id="phone" label="Phone" label-for="phone">
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>
              +60
            </b-input-group-prepend>
            <b-form-input
              id="phone"
              name="phone"
              type="number"
              v-model="$v.form.phone.$model"
              :state="validateState('phone')"
              aria-describedby="input-1-live-feedback"
            >
            </b-form-input>
          </b-input-group>

          <b-form-invalid-feedback id="input-1-live-feedback">
            This is a required field and must be number! characters.
          </b-form-invalid-feedback>
        </b-form-group>
        <div class="submit-btn">
          <b-button type="submit" class="primaryBackgroundColor"
            >Verify</b-button
          >
        </div>
      </b-form>
    </b-col>
  </div>
</template>

<script>
import ProgressBar from "../ProgressBar.vue";
import AlertErorr from "../AlertErorr.vue";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "signup-first",
  components: { ProgressBar, AlertErorr },
  validations: {
    form: {
      phone: {
        required,
        minLength: minLength(8),
      },
    },
  },
  data() {
    return {
      form: {
        phone: null,
      },

      alert: null,
    };
  },
  methods: {
    validateState(value) {
      const { $dirty, $error } = this.$v.form[value];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      } else {
        this.$emit("switchToVerification", this.form.phone);
      }
    },
  },

  // mounted() {
  //   var finalArray = this.$props.countriesData.map(function(obj) {
  //     return obj.name;
  //   });
  //   this.countries = finalArray;
  // },
};
</script>
<style scoped></style>
