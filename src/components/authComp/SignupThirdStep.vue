<template>
  <b-col class="my-2 reg-form" cols="12">
    <b-container class="bv-example-row mt-3">
      <progress-bar :value="90" />
      <b-card bg-variant="light" header="Ad Details">
        <b-card-text>
          <div>
            <b-form-group id="input-group-1" label="Name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                placeholder="Enter your name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email:" label-for="input-2">
              <b-form-input
                type="email"
                id="input-2"
                v-model="form.email"
                placeholder="Ex: xx@xx.xx"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Password:"
              label-for="input-3"
            >
              <b-form-input
                type="password"
                id="input-3"
                v-model="form.password"
                placeholder="*********"
                required
              ></b-form-input>
            </b-form-group>
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
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
    };
  },
};
</script>
