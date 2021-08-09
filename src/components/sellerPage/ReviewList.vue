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
                      blank
                      blank-color="#cba"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>

                  <b-row>
                    <b-col col lg="2">
                      <h6 class="pb-2">Reviewer</h6>
                      <p>
                        <i class="fa fa-clock-o" aria-hidden="true" />
                        {{ review.created_at }}
                      </p>
                    </b-col>
                    <b-col>
                      <i class="fa fa-star" aria-hidden="true" />
                      <i class="fa fa-star" aria-hidden="true" />
                      <i class="fa fa-star" aria-hidden="true" />
                      <i class="fa fa-star" aria-hidden="true" />
                    </b-col>

                    <b-col cols="12" md="auto">
                      <i class="fa fa-flag" aria-hidden="true" />
                    </b-col>
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
