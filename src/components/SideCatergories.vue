<template>
  <b-col sm="4" md="12" lg="2" xl="2" class="mt-5">
    <div>
      <h6>All Catergories</h6>
    </div>
    <hr style="width:auto" />
    <div
      v-for="(catergory, index) in catergories.taxonomyContents.data"
      :key="index"
    >
      <p>{{ catergory.title }}</p>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ["catergories"],
};
</script>
