<template>
  <div>
    <b-container class="bv-example-row">
      <div class="row">
        <b-col class="text-center" col lg="12" md="12" sm="12" xs="auto"
          ><h4 class="titleAd">Reviews</h4></b-col
        >
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
                      <h6 class="pb-2">Muaadh</h6>
                      <p>
                        <i class="fa fa-clock-o" aria-hidden="true" /> 30min ago
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
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </b-col>
                </b-media>
              </ul>
            </div></b-col
          >
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
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
