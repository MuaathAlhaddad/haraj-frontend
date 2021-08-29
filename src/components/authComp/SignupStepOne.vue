<template>
  <b-col class="my-2 reg-form" cols="12">
    <b-container class="bv-example-row mt-3">
      <progress-bar :value="30" />

      <b-card bg-variant="light" header="Ad Details">
        <b-card-text>
          <div>
            <b-form @submit.stop.prevent="onSubmit">
              <b-form-group id="name" label="Name" label-for="name">
                <b-input-group class="mb-2">
                  <b-form-input
                    id="name"
                    name="name"
                    type="text"
                    v-model="$v.form.name.$model"
                    :state="validateState('name')"
                    aria-describedby="input-1-live-feedback"
                  >
                  </b-form-input>
                </b-input-group>

                <b-form-invalid-feedback id="input-1-live-feedback">
                  This is a required field and must be characters.
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group id="email" label="Email" label-for="email">
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon icon="envelope-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    id="email"
                    name="email"
                    type="email"
                    v-model="$v.form.email.$model"
                    :state="validateState('email')"
                    aria-describedby="input-2-live-feedback"
                  >
                  </b-form-input>
                </b-input-group>

                <b-form-invalid-feedback id="input-2-live-feedback">
                  This is a required field and must be email!.
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group id="password" label="Password" label-for="password">
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon icon="key-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    id="password"
                    name="password"
                    type="password"
                    v-model="$v.form.password.$model"
                    :state="validateState('password')"
                    aria-describedby="input-3-live-feedback"
                  >
                  </b-form-input>
                </b-input-group>

                <b-form-invalid-feedback id="input-3-live-feedback">
                  This is a required!.
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group
                id="repeatPassword"
                label="Repeat Password"
                label-for="repeatPassword"
              >
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <b-icon icon="key-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    v-model="$v.form.repeatPassword.$model"
                    :state="validateState('repeatPassword')"
                    aria-describedby="input-4-live-feedback"
                  >
                  </b-form-input>
                </b-input-group>

                <b-form-invalid-feedback id="input-4-live-feedback">
                  This is a required!.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                id="example-input-group-5"
                label="Gender"
                label-for="example-input-5"
              >
                <b-form-select
                  id="example-input-5"
                  name="example-input-5"
                  v-model="$v.form.gender.$model"
                  :options="genders"
                  :state="validateState('gender')"
                  aria-describedby="input-5-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="input-5-live-feedback"
                  >This is a required field.</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group
                id="example-input-group-6"
                label="State"
                label-for="example-input-6"
              >
                <b-form-select
                  id="example-input-6"
                  name="example-input-6"
                  v-model="$v.form.state.$model"
                  :options="states"
                  :state="validateState('state')"
                  aria-describedby="input-6-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="input-6-live-feedback"
                  >This is a required field.</b-form-invalid-feedback
                >
              </b-form-group>

              <div class="text-center">
                <b-button class=" text-center" type="submit">Next</b-button>
              </div>
            </b-form>
          </div>
        </b-card-text>
      </b-card>
    </b-container>
  </b-col>
</template>

<script>
import ProgressBar from "../ProgressBar.vue";
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  components: { ProgressBar },
  props: ["SomaStates"],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(5),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      repeatPassword: {
        sameAsPassword: sameAs("password"),
      },
      gender: {
        required,
      },
      state: {
        required,
      },
    },
  },
  data() {
    return {
      states: [],
      genders: [
        { value: null, text: "Choose..." },
        { value: "m", text: "Male" },
        { value: "f", text: "Female" },
      ],
      form: {
        email: null,
        name: null,
        password: null,
        repeatPassword: "",
        gender: null,
        state: null,
      },
      userDetails: {
        name: null,
        email: null,
        password: null,
        gender: null,
        state: null,
      },
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
        const stateID = this.$props.SomaStates.find(
          (element) => element.name == this.form.state
        );

        this.userDetails.name = this.form.name;
        this.userDetails.email = this.form.email;
        this.userDetails.password = this.form.password;
        this.userDetails.gender = this.form.gender;
        this.userDetails.state = stateID.id;
 
        this.$emit("moveToSecondStep", this.userDetails);
      }
    },
  },
  mounted() {
    var finalArray = this.$props.SomaStates.map(function(obj) {
      return obj.name;
    });
    this.states = finalArray;
  },
};
</script>
