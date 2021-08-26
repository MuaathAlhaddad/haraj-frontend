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
              <signup-first
                v-if="switchButton == 0"
                v-on:switchToVerification="moveToVerification($event)"
              />
              <signup-second-step
                v-if="switchButton == 1"
                v-on:verifyReg="moveTodetails($event)"
              />
              <signup-third-step
                v-if="switchButton == 2"
                :newUser="newUser"
                v-on:finishedStep="moveToFinish($event)"
                :SomaStates="states.country.states"
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
import SignupFirst from "../../components/authComp/SignupFirst.vue";
import SignupFourthStep from "../../components/authComp/SignupFourthStep.vue";
import SignupSecondStep from "../../components/authComp/SignupSecondStep.vue";
import SignupThirdStep from "../../components/authComp/SignupThirdStep.vue";
import LoadingIcon from "../../components/LoadingIcon.vue";
import SomaliaStates from "../../graphql/queries/somaliaState.gql";
import CreateUser from "../../graphql/mutations/auth/createUser.gql";
import VerifyUser from "../../graphql/mutations/auth/phoneVerification.gql";
import UpdateUser from "../../graphql/mutations/updateUser.gql";
import AlertErorr from "../../components/AlertErorr.vue";

/// Get  queries
const somaliaStates = SomaliaStates;

export default {
  components: {
    SignupFirst,
    SignupSecondStep,
    SignupThirdStep,
    SignupFourthStep,
    LoadingIcon,
    AlertErorr,
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
          this.newUser = data.data.createUser;
          if (this.newUser.id != null) {
            this.phone = phone;
            this.switchButton = 1;
          }
        })
        .catch((errors) => {
          let { graphQLErrors } = errors;
          if (graphQLErrors[0].extensions.category === "validation") {
            this.message =
              "Make sure you have entered a correct validation & you have not used this number before!";
            this.alert = true;
          }
        });
    },
    moveTodetails(value) {
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
          if (data.data.verifyOTP == "verified") {
            this.newUser.phone_no = "+60" + phone;
            this.switchButton = 2;
          } else {
            this.message = "Wrong Validation!";
            this.alert = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    moveToFinish(data) {
      try {
        this.$apollo
          .mutate({
            // Query
            mutation: UpdateUser,
            // Parameters
            variables: {
              id: data.id,
              name: data.name,
              email: data.email,
              password: data.password,
              gender: data.gender,
              state: data.state,
            },
          })
          .then(() => {
            this.switchButton = 3;
          })
          .catch((error) => {
            this.error = true;
            console.error(error);
          });
      } catch (e) {
        console.log(e);
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
