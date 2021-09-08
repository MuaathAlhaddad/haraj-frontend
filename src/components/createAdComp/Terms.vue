<template>
  <b-col cols="9" lg="9" md="12" sm="12" xs="12">
    <b-container class="bv-example-row mt-3">
      <b-card bg-variant="light" header="Terms Agreement">
        <alert-erorr
          v-if="error"
          :message="'You have to accept the agreement!'"
        />
        <b-card-text>
          <div>
            <div>
              <b-card no-body>
                <div class="m-5">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Scrambled it to make a type specimen
                  book. Scrambled it to make a type specimen book. Scrambled it
                  to make a type specimen book. Scrambled it to make a type
                  specimen book. Scrambled it to make a type specimen book.
                  Scrambled it to make a type specimen book. Scrambled it to
                  make a type specimen book.
                </div>
              </b-card>
            </div>
            <b-form-checkbox v-model="agreed" class="my-3 mr-sm-2 mb-sm-0">
              I am agreed
            </b-form-checkbox>

            <div class="submit-btn">
              <!-- <b-button class="btn1 m-1" type="submit">Back</b-button> -->
              <b-button
                v-on:click="submitTerms"
                class="btn2 primaryBackgroundColor"
                type="submit"
                >Post</b-button
              >
            </div>
          </div>
        </b-card-text>
      </b-card>
    </b-container>
  </b-col>
</template>

<script>
import AlertErorr from "../AlertErorr.vue";
export default {
  components: { AlertErorr },
  data() {
    return {
      agreed: null,
      error: null,
    };
  },
  methods: {
    submitTerms() {
      if (this.agreed) {
        this.$emit("passTerm", this.agreed);
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.submit-btn {
  text-align: center;
  max-width: 100%;
}
.submit-btn .btn1 {
  background-color: #747474;
  width: 100px;
}
.submit-btn .btn2 {
  background-color: #4f9da6;
  width: 100px;
}
</style>
