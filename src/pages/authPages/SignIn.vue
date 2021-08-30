<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12"
          ><h4 class="titleAd">Login</h4>
          <hr />
          <b-form @submit="onSubmit">
            <b-col class="my-2 reg-form" cols="12">
              <b-form-group
                id="input-group-1"
                label="Phone Number:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  placeholder="Ex: john@example.com"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Password"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  placeholder="**********"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <hr />
            <div class="submit-btn">
              <b-button type="submit">Login</b-button>
            </div>
          </b-form>
        </b-col>
      </b-row></b-container
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions({
      login: "Auth/login",
    }),
    onSubmit(event) {
      event.preventDefault();
      this.login(this.form);
    },
  },
};
</script>
<style scoped></style>
