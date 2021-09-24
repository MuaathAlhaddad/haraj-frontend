<template>
  <div>
    <b-container class="bv-example-row mt-5">
      <div v-for="(review, index) in reviewData.reviews.data" :key="index">
        <hr />
        <div id="review">
          <b-col col lg="12" md="12" sm="12" xs="auto"
            ><div>
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
                      :src="
                        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                      "
                      width="64"
                      alt="placeholder"
                    >
                    </b-img>
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

                    <b-col cols="12" md="auto"> </b-col>
                  </b-row>
                  <b-col>
                    <p>
                      {{ review.body }}
                    </p>
                  </b-col>
                </b-media>
              </ul>
            </div></b-col
          >
        </div>
        <hr />
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  props: ["reviewData"],
};
</script>

<style scoped></style>
