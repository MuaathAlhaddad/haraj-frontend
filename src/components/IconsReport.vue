<template>
  <span>
    <button class=" primaryBackgroundColor" v-b-modal.modal-prevent-closing>
      <i class="fa fa-flag icon generalColorBrown" aria-hidden="true"> </i>
    </button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Report"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div>
          <b-dropdown
            text="What is the reason of this report?"
            block
            variant="danger"
            class="m-2 abs primaryBackgroundColor"
            menu-class="w-100"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </div>
        <b-form-group
          label="State your report"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-textarea
            id="textarea"
            v-model="name"
            :state="nameState"
            required
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </form>
    </b-modal>
  </span>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
<style scoped>
.custom-size-button1 {
  width: 200px !important;
}
</style>
