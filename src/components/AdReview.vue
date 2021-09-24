<template>
  <div>
    <b-container class="bv-example-row">
      <b-col v-if="user" class="mt-4">
        <b-media v-if="adData.user.id !== user.id">
          <template #aside>
            <b-img
              v-if="user.attachments.data.length != 0"
              :src="
                user.attachments.data[user.attachments.data.length - 1].path
              "
              width="64"
              alt="placeholder"
            >
            </b-img>
            <b-img
              v-if="user.attachments.data.length == 0"
              :src="
                'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg'
              "
              width="64"
              alt="placeholder"
            >
            </b-img>
          </template>

          <b-form-textarea
            id="textarea-default"
            v-model="review"
            placeholder="Type your comments"
          ></b-form-textarea>
        </b-media>
      </b-col>

      <b-col v-if="user">
        <div
          class="d-flex justify-content-end row-hl"
          v-if="adData.user.id !== user.id"
        >
          <b-form-rating
            v-model="star"
            class="primaryColor mr-2"
            inline
            value="0"
          ></b-form-rating>
          <b-button size="sm" class="BrownBackground" @click="addReview"
            >Submit Review</b-button
          >
        </div>
      </b-col>
      <div class="row">
        <b-col class="text-center" col lg="12" md="12" sm="12" xs="auto"
          ><h4 class="generalColorBrown">Reviews</h4></b-col
        >
      </div>
      <div id="review">
        <b-col col lg="12" md="12" sm="12" xs="auto"
          ><div>
            <div
              v-for="(review, index) in adData.user.reviews.data"
              :key="index"
            >
              <ul class="list-unstyled">
                <b-media tag="li" class="my-0">
                  <template #aside>
                    <b-img
                      v-if="review.reviewer.attachments.data.length != 0"
                      :src="
                        review.reviewer.attachments.data[
                          review.reviewer.attachments.data.length - 1
                        ].path
                      "
                      width="64"
                      alt="placeholder"
                    >
                    </b-img>
                    <b-img
                      v-if="review.reviewer.attachments.data.length == 0"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>

                  <b-row>
                    <b-col col lg="2">
                      <h6 class="pb-2">{{ review.reviewer.name }}</h6>
                      <p>
                        <i
                          class="fas fa-clock generalColorBrown"
                          aria-hidden="true"
                        />
                        <span style="font-size:12px;">
                          {{ review.created_at }}</span
                        >
                      </p>
                    </b-col>
                    <b-col>
                      <b-form-rating
                        v-model="review.star"
                        class="primaryColor mr-2 reviewRating"
                        inline
                        disabled
                      ></b-form-rating>
                    </b-col>

                    <b-col cols="12" md="auto">
                      <icons-report :id="review.id" :type="'review'" />
                    </b-col>
                  </b-row>

                  <b-col>
                    <p>{{ review.body }}</p>
                  </b-col>
                </b-media>
              </ul>
              <hr />
            </div></div
        ></b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
import Review from "../graphql/mutations/review.gql";
import { mapGetters } from "vuex";
import IconsReport from "./IconsReport.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { IconsReport },
  props: ["adData", "routeParam"],
  data() {
    return { star: 0, review: "" };
  },
  methods: {
    addReview() {
      if (this.review == "" && this.star == 0) {
        return;
      }
      if (this.review != null && this.star == 0) {
        return;
      }
      if (this.star == 1) {
        this.star = "STAR1";
        console.log(this.star);
      } else if (this.star == 2) {
        this.star = "STAR2";
        console.log(this.star);
      } else if (this.star == 3) {
        this.star = "STAR3";
        console.log(this.star);
      } else if (this.star == 4) {
        this.star = "STAR4";
        console.log(this.star);
      } else if (this.star == 5) {
        this.star = "STAR5";
        console.log(this.star);
      }
      this.$apollo
        .mutate({
          mutation: Review,
          variables: {
            body: this.review,
            star: this.star,
            reviewerId: this.user.id,
            reviewable: this.$props.adData.user.id,
          },
        })
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          this.$emit("userReview", data);
          console.log(data);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
  },
};
</script>
<style scoped>
#review {
  background-color: #f5f5f5;
  border: 1px solid #e4e7f5;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 100px;
  width: 100%;
}
</style>
