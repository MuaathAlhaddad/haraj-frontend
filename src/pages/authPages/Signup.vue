<template>
  <div>
    <template v-if="loadingStates">
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
import UpdateUser from "../../graphql/mutations/updateUser.gql";
import AlertErorr from "../../components/AlertErorr.vue";
import SignupStepOne from "../../components/authComp/SignupStepOne.vue";
import SignupStepTwo from "../../components/authComp/SignupStepTwo.vue";
import SignupStepThree from "../../components/authComp/SignupStepThree.vue";

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
      loadingStates: 0,
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

      this.switchButton = 1;
    },
    moveToVerification(data) {
      const phone = data;
      this.$apollo
        .mutate({
          // Query
          mutation: CreateUser,
          // Parameters
          variables: {
            phone_no: "+60" + phone,
          },
        })
        .then((data) => {
          if (data.data.sendOTP.data.status == "200") {
            this.phone = phone;
            this.switchButton = 2;
          }
        })
        .catch((errors) => {
          let { graphQLErrors } = errors;
          if (graphQLErrors[0].extensions.category === "validation") {
            this.message = "Invalid Credentials!";
            this.alert = true;
          }
        });
      console.log(phone);
    },
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
                mutation: UpdateUser,
                // Parameters
                variables: {
                  name: this.newUser.name,
                  phone_no: "+601121288754",
                  email: this.newUser.email,
                  password: this.newUser.password,
                  gender: this.newUser.gender,
                  // state: 3223,
                },
              })
              .then((data) => {
                console.log(data);
                this.switchButton = 1;
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
      loadingKey: "loadingStates",
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
