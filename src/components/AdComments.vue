<template>
  <div>
    <b-container class="bv-example-row mb-4">
      <div class="row">
        <b-col class="text-center" col lg="12" md="12" sm="12" xs="auto"
          ><h4 class="titleAd">Comments</h4></b-col
        >
        <b-card class="my-2">
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
                <p><i class="fa fa-clock-o" aria-hidden="true" /> 30min ago</p>
              </b-col>
              <b-col> </b-col>

              <b-col cols="12" md="auto">
                <i class="fa fa-flag" aria-hidden="true" />
              </b-col>
            </b-row>
            <b-col>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </b-col>

            <b-media>
              <template #aside>
                <b-img
                  blank
                  blank-color="#ccc"
                  width="64"
                  alt="placeholder"
                ></b-img>
              </template>

              <b-row>
                <b-col col lg="2">
                  <h6 class="pb-2">Amer</h6>
                  <p>
                    <i class="fa fa-clock-o" aria-hidden="true" /> 30min ago
                  </p>
                </b-col>
                <b-col> </b-col>

                <b-col cols="12" md="auto">
                  <i class="fa fa-flag" aria-hidden="true" />
                </b-col>
              </b-row>
              <b-col>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </b-col>
            </b-media>
          </b-media>
        </b-card>
        <b-card class="my-1">
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
                <p><i class="fa fa-clock-o" aria-hidden="true" /> 30min ago</p>
              </b-col>
              <b-col> </b-col>

              <b-col cols="12" md="auto">
                <i class="fa fa-flag" aria-hidden="true" />
              </b-col>
            </b-row>
            <b-col>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </b-col>

            <b-media>
              <template #aside>
                <b-img
                  blank
                  blank-color="#ccc"
                  width="64"
                  alt="placeholder"
                ></b-img>
              </template>

              <b-row>
                <b-col col lg="2">
                  <h6 class="pb-2">Amer</h6>
                  <p>
                    <i class="fa fa-clock-o" aria-hidden="true" /> 30min ago
                  </p>
                </b-col>
                <b-col> </b-col>

                <b-col cols="12" md="auto">
                  <i class="fa fa-flag" aria-hidden="true" />
                </b-col>
              </b-row>
              <b-col>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </b-col>
            </b-media>
          </b-media>
        </b-card>
      </div>
    </b-container>
    
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
#comment {
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
