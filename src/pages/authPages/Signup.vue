<template>
  <div>
    <template v-if="loading">
      <div>
        <loading-icon />
      </div>
    </template>

    <template v-else>
      <div>
        <b-container class="mt-5">
          <b-row>
            <b-col cols="12"
              ><h4 class="titleAd">SIGN UP</h4>
              <hr />
              <alert-erorr :message="message" v-if="alert" />

              <signup-step-one
                v-if="switchButton == 0"
                :newUser="newUser"
                v-on:moveToSecondStep="moveToStepTwo($event)"
                :SomaStates="states.country.states"
              />
              <signup-step-two
                v-if="switchButton == 1"
                v-on:switchToVerification="moveToVerification($event)"
                :newUser="newUser"
              />

              <signup-step-three
                v-if="switchButton == 2"
                v-on:verifyReg="signUp($event)"
              />

              <signup-fourth-step v-if="switchButton == 3" />
              <hr />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </template>
  </div>
</template>

<script>
import SignupFourthStep from "../../components/authComp/SignupFourthStep.vue";

import LoadingIcon from "../../components/LoadingIcon.vue";
import SomaliaStates from "../../graphql/queries/somaliaState.gql";
// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from "vuex";
import CreateUser from "../../graphql/mutations/auth/createUser.gql";
import VerifyUser from "../../graphql/mutations/auth/phoneVerification.gql";
import SignupUser from "../../graphql/mutations/signupUser.gql";
import AlertErorr from "../../components/AlertErorr.vue";
import SignupStepOne from "../../components/authComp/SignupStepOne.vue";
import SignupStepTwo from "../../components/authComp/SignupStepTwo.vue";
import SignupStepThree from "../../components/authComp/SignupStepThree.vue";
import Login from "../../graphql/mutations/auth/login.gql";
import ValidateEmail from "../../graphql/mutations/auth/validateEmail.gql";

/// Get  queries
const somaliaStates = SomaliaStates;

export default {
  components: {
    SignupFourthStep,
    LoadingIcon,
    AlertErorr,
    SignupStepOne,
    SignupStepTwo,
    SignupStepThree,
  },

  data() {
    return {
      switchButton: 0,
      phone: null,
      states: [],
      users: [],
      loading: 0,
      newUser: null,
      verifiedCode: null,
      alert: false,
      message: null,
      validationErrors: null,
    };
  },

  methods: {
    moveToStepTwo(userDetails) {
      this.newUser = userDetails;
      console.log(this.newUser);
      this.$apollo
        .mutate({
          // Query
          mutation: ValidateEmail,
          // Parameters
          variables: {
            email: this.newUser.email,
          },
        })
        .then(() => {
          this.alert = false;
          this.switchButton = 1;
        })
        .catch((errors) => {
          let { graphQLErrors } = errors;
          if (graphQLErrors[0].extensions.category === "validation") {
            this.message = "This email has already been taken.";
            this.alert = true;
          }
        });
    },
    moveToVerification(data) {
      const phone = data;
      this.$apollo
        .mutate({
          // Query
          mutation: CreateUser,

          loadingKey: "loading",

          // Parameters
          variables: {
            phone_no: "+60" + phone,
          },
        })
        .then((data) => {
          if (data.data.sendOTP.data.status == "200") {
            this.phone = phone;
            this.alert = false;
            this.switchButton = 2;
          }
        })
        .catch((errors) => {
          let { graphQLErrors } = errors;
          if (
            graphQLErrors[0].extensions.validation.phone_no[0] ===
            "The phone no format is invalid."
          ) {
            this.message = "The phone no format is invalid!";
            this.alert = true;
          } else if (
            graphQLErrors[0].extensions.validation.phone_no[0] ===
            "The phone no has already been taken."
          ) {
            this.message = "The phone no has already been taken.";
            this.alert = true;
          }
        });
      console.log(phone);
    },
    ...mapActions({
      login: "Auth/login",
    }),
    signUp(value) {
      const code = value;
      const phone = this.phone;

      this.$apollo
        .mutate({
          // Query
          mutation: VerifyUser,
          // Parameters
          variables: {
            verification_code: code,
            phone_no: "+60" + phone,
          },
        })
        .then((data) => {
          console.log(data);
          if (data.data.verifyOTP.data.status == "200") {
            this.$apollo
              .mutate({
                // Query
                mutation: SignupUser,
                // Parameters
                variables: {
                  name: this.newUser.name,
                  phone_no: "+60" + phone,
                  email: this.newUser.email,
                  password: this.newUser.password,
                  gender: this.newUser.gender,
                  state: parseInt(this.newUser.state),
                },
              })
              .then((data) => {
                console.log(data);
                this.$apollo
                  .mutate({
                    mutation: Login,
                    variables: {
                      phone_no: "+60" + phone,
                      password: this.newUser.password,
                    },
                  })
                  .then((data) => {
                    this.login(data.data.login.access_token);
                    this.alert = false;
                    this.$router.push("/");
                  })
                  .catch((errors) => {
                    console.log(errors);
                  });
              })
              .catch((errors) => {
                let { graphQLErrors } = errors;
                if (graphQLErrors[0].extensions.category === "validation") {
                  this.message = "!";
                  this.alert = true;
                }
              });
          } else {
            this.message = "Something goes wrong!";
            this.alert = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    checkUser() {
      var user = localStorage.getItem("user");
      console.log(user);
      if (user != "false") {
        this.$router.go(-1);
      }
    },
  },
  apollo: {
    ////// Get Countries
    states: {
      query: somaliaStates,
      loadingKey: "loading",
      update: (data) => data,
    },

    //   ///////Get users
    //   users: {
    //     query: users,
    //     loadingKey: "loadingCountries",
    //     update: (data) => data,
    //   },
  },

  created() {
    this.checkUser();
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
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
