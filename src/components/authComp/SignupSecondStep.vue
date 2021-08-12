<template>
  <div>
    <b-col class="my-2 reg-form" cols="12">
      <progress-bar :value="60" />

      <b-form-group
        id="input-group-2"
        label="Code number that has been sent to your number:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.phone"
          placeholder="Ex:3541"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>
  </div>
</template>

<script>
import ProgressBar from "../ProgressBar.vue";
export default {
  components: { ProgressBar },
  data() {
    return {
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
};
</script>
<style scoped></style>
