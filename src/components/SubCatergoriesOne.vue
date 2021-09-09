<template>
  <div>
    <b-tabs>
      <b-tab
        v-for="(brand, index) in level1.level1.children"
        :key="brand.id"
        :title-link-class="linkSubClass(index)"
      >
        <template #title>
          <button
            style="min-height: 22px;"
            :class="[
              brand.title === brandStyleTitle
                ? 'text-light secondaryBackgroundColor'
                : 'generalColorBrown text-light levelCatergories',
              'rounded border-light',
            ]"
            v-on:click="selectedBrand(brand.title)"
          >
            {{ brand.title }}
          </button>
        </template>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  props: ["level1", "brandStyleTitle"],
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
