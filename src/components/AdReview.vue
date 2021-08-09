<template>
  <div>
    <b-container class="bv-example-row">
      <div class="row">
        <b-col class="text-center" col lg="12" md="12" sm="12" xs="auto"
          ><h4 class="titleAd">Reviews</h4></b-col
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
                      blank
                      blank-color="#cba"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>

                  <b-row>
                    <b-col col lg="2">
                      <h6 class="pb-2"></h6>
                      <p>
                        <i class="fa fa-clock-o" aria-hidden="true" />
                      </p>
                    </b-col>
                    <b-col>
                      <i class="fa fa-star" aria-hidden="true" />
                      <i class="fa fa-star" aria-hidden="true" />
                      <i class="fa fa-star" aria-hidden="true" />
                      <i class="fa fa-star" aria-hidden="true" />
                    </b-col>

                    <b-col cols="12" md="auto">
                      {{ review.created_at }}
                      <i class="fa fa-flag" aria-hidden="true" />
                    </b-col>
                  </b-row>
                  <b-col>
                    <p>{{ review.body }}</p>
                  </b-col>
                </b-media>
              </ul>
            </div>
          </div></b-col
        >
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["adData"],
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
.titleAd {
  color: #336699;
}
</style>
