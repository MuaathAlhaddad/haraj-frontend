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
                v-if="switchButton == 0"
                v-on:switchToVerification="moveToVerification($event)"
              />

              <signup-step-three
                v-if="switchButton == 0"
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
import CreateUser from "../../graphql/mutations/auth/createUser.gql";
// eslint-disable-next-line no-unused-vars
import VerifyUsser from "../../graphql/mutations/auth/phoneVerification.gql";
// eslint-disable-next-line no-unused-vars
import UpdateUser from "../../graphql/mutations/updateUser.gql";
import AlertErorr from "../../components/AlertErorr.vue";
import SignupStepOne from "../../components/authComp/SignupStepOne.vue";
import SignupStepTwo from "../../components/authComp/SignupStepTwo.vue";
import SignupStepThree from "../../components/authComp/SignupStepThree.vue";
import store from "../../store/Auth";

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
  beforeRouteEnter(to, from, next) {
    if (!store.state.authStatus) {
      return next();
    } else {
      next("/");
    }
  },
  methods: {
    moveToVerification(data) {
      const phone = data;
      // this.$apollo
      //   .mutate({
      //     // Query
      //     mutation: CreateUser,
      //     // Parameters
      //     variables: {
      //       phone_no: "+60" + phone,
      //     },
      //   })
      //   .then((data) => {
      //     this.newUser = data.data.createUser;
      //     if (this.newUser.id != null) {
      //       this.phone = phone;
      //       this.switchButton = 1;
      //     }
      //   })
      //   .catch((errors) => {
      //     let { graphQLErrors } = errors;
      //     if (graphQLErrors[0].extensions.category === "validation") {
      //       this.message =
      //         "Make sure you have entered a correct validation & you have not used this number before!";
      //       this.alert = true;
      //     }
      //   });
      console.log(phone);
    },
    signUp(value) {
      const code = value;
      // const phone = this.phone;

      // this.$apollo
      //   .mutate({
      //     // Query
      //     mutation: VerifyUser,
      //     // Parameters
      //     variables: {
      //       verification_code: code,
      //       phone_no: "+60" + phone,
      //     },
      //   })
      //   .then((data) => {
      //     if (data.data.verifyOTP == "verified") {
      //       this.newUser.phone_no = "+60" + phone;
      //       this.switchButton = 2;
      //     } else {
      //       this.message = "Wrong Validation!";
      //       this.alert = true;
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      console.log(code);
    },

    moveToStepTwo(data) {
      // try {
      //   this.$apollo
      //     .mutate({
      //       // Query
      //       mutation: UpdateUser,
      //       // Parameters
      //       variables: {
      //         id: data.id,
      //         name: data.name,
      //         email: data.email,
      //         password: data.password,
      //         gender: data.gender,
      //         state: data.state,
      //       },
      //     })
      //     .then(() => {
      //       this.switchButton = 3;
      //     })
      //     .catch((error) => {
      //       this.error = true;
      //       console.error(error);
      //     });
      // } catch (e) {
      //   console.log(e);
      // }
      console.log(data);
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
