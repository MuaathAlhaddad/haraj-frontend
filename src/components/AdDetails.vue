<template>
  <div class="detailsComp">
    <b-container class="bv-example-row mt-3">
      <div class="row">
        <b-col class="text-center" col lg="12" md="12" sm="12" xs="auto">
          <h4 class="generalColorBrown">Details</h4>
          <div id="detail">
            <p>
              {{ adData.description }}
            </p>
          </div>
        </b-col>
        <br />
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["adData"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.detailsComp {
  margin-bottom: 150px !important;
}
#details {
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
