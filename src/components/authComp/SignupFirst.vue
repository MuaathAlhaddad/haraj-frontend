<template>
  <div>
    <b-col class="my-2 reg-form" cols="12">
      <progress-bar :value="30" />
      <b-form-group id="input-group-1" label="Country:" label-for="input-1">
        <b-form-select
          id="input-1"
          v-model="form.country"
          :options="countries"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Phone Number:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.phone"
          placeholder="Ex: 0122125"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>
  </div>
</template>

<script>
import ProgressBar from "../ProgressBar.vue";

export default {
  name: "signup-first",
  components: { ProgressBar },
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
  methods: {},
};
</script>
<style scoped></style>
