<template>
  <div>
    <b-tabs>
      <b-tab
        v-for="(brand, index) in brands.taxonomyContent.brands"
        :key="brand.id"
        :title-link-class="linkSubClass(index)"
      >
        <template #title>
          <span
            style="min-height: 22px;"
            v-on:click="selectedBrand(brand.title)"
          >
            {{ brand.title }}
          </span>
        </template>
      </b-tab>
    </b-tabs>
  </div>
</template>
<!-- <div>
          <b-button class="m-1" v-on:click="selectedBrand(brand.title)">
            {{ brand.title }}
          </b-button>
        </div> -->
<script>
export default {
  props: ["brands"],
  data() {
    return {
      icons: [
        "fa fa-car",
        "fa fa-desktop",
        "fa fa-home",
        "fa fa-tree",
        "fa fa-black-tie",
        "fa fa-car",
        "fa fa-desktop",
        "fa fa-home",
        "fa fa-tree",
        "fa fa-black-tie",
      ],
      selected: "All",
    };
  },
  methods: {
    selectedBrand(brand) {
      this.$emit("selectedBrand", brand);
    },
    linkSubClass(index) {
      if (this.SubtabIndex === index) {
        return ["bg-info", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
  },
};
</script>
<style scoped>
/*.active-category {*/
/*  color: #f05e23;*/
/*  background-color: #f05e23;*/
/*}*/
</style>
