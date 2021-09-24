<template>
  <span v-if="user">
    <b-button
      v-b-modal.modal-report
      class="px-5 py-2 mr-1 custom-size-button1 "
      rounded
      variant="light"
    >
      Report <i class="fa fa-flag" aria-hidden="true"></i>
    </b-button>
    <b-modal
      :id="`modal-report`"
      ref="modal"
      ok-only
      title="Submit Your Report"
      ok-variant="outline-dark"
      ok-title="Cancel"
    >
      <div>
        <div v-if="isBody == false">
          <span v-for="(report, index) in reportContents" :key="index">
            <b-button
              block
              pill
              variant="outline-danger"
              class="mb-1"
              @click="reportAds(report.id)"
            >
              {{ report.body }}
            </b-button>
          </span>
        </div>
        <b-button
          block
          pill
          variant="outline-info"
          class="mb-1"
          @click="isBody = true"
          v-if="isBody == false"
        >
          Other
        </b-button>

        <b-button
          block
          pill
          variant="white"
          class="mb-1"
          @click="isBody = false"
          v-if="isBody == true"
        >
          <b-icon
            icon="arrow-up-circle-fill
"
            font-scale="2"
          >
          </b-icon>
        </b-button>

        <div v-if="isBody == true">
          <b-form-valid-feedback :state="validation"> </b-form-valid-feedback>
          <label for="feedback-user">Report Your Issue:</label>
          <b-form-textarea
            id="textarea"
            v-model="body"
            :state="validation"
            placeholder="State your report..."
            rows="3"
            max-rows="6"
            required
          >
          </b-form-textarea>
          <b-form-invalid-feedback :state="validation">
            Your report should be more than 10 characters.
          </b-form-invalid-feedback>
          <b-button
            @click="reportAdsBody"
            block
            pill
            class="mt-2 primaryBackgroundColor"
          >
            Submit
          </b-button>
        </div>
      </div>
    </b-modal>
  </span>
</template>
<script>
import ReportOptions from "../graphql/queries/reportOptions.gql";
import CreateBodyReport from "../graphql/mutations/createBodyReport.gql";
import OptionReport from "../graphql/mutations/optionReport.gql";
import { mapGetters } from "vuex";

export default {
  props: ["adId"],
  data() {
    return {
      isBody: false,
      body: "",
      nameState: null,
      submittedNames: [],
      loadingReport: 0,
    };
  },
  apollo: {
    reportContents: {
      query: ReportOptions,
      loadingKey: "loadingReport",

      update(data) {
        return data.reportContents;
      },
    },
  },
  methods: {
    reportAds(optionId) {
      this.$apollo
        .mutate({
          mutation: OptionReport,
          variables: {
            reporterId: this.user.id,
            reportId: optionId,
            type: "ad",
            adId: this.$props.adId,
          },
        })
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          console.log(data);
          this.$refs["modal"].hide();
          this.$bvModal
            .msgBoxOk("Your report was submitted successfully", {
              title: "Well Done!",
              size: "sm",
              buttonSize: "sm",
              okVariant: "success",
              headerClass: "p-2 border-bottom-0",
              footerClass: "p-2 border-top-0",
              centered: true,
            })
            .then((value) => {
              this.boxTwo = value;
            })
            .catch(() => {});
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    reportAdsBody() {
      if (this.body.length >= 11 && this.body.length < 300) {
        this.$apollo
          .mutate({
            mutation: CreateBodyReport,
            variables: {
              reporterId: this.user.id,
              body: this.body,
              type: "ad",
              adId: this.$props.adId,
            },
          })
          // eslint-disable-next-line no-unused-vars
          .then((data) => {
            console.log(data);
            this.$bvModal
              .msgBoxOk("Your report was submitted successfully", {
                title: "Well Done!",
                size: "sm",
                buttonSize: "sm",
                okVariant: "success",
                headerClass: "p-2 border-bottom-0",
                footerClass: "p-2 border-top-0",
                centered: true,
              })
              .then((value) => {
                this.boxTwo = value;
              })
              .catch(() => {});
            this.$refs["modal"].hide();
          })
          .catch((errors) => {
            console.log(errors);
          });
      }
    },
  },
  computed: {
    validation() {
      return this.body.length > 10 && this.body.length < 300;
    },
    ...mapGetters({
      user: "Auth/user",
    }),
  },
};
</script>
<style scoped>
.custom-size-button1 {
  width: 200px !important;
}
</style>
