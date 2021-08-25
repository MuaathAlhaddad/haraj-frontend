<template>
  <b-card class="">
    <b-row>
      <div
        v-for="(brand, index) in brands.taxonomyContent.brands.slice(0, 15)"
        :key="index"
      >
        <div>
          <b-button class="m-1">
            {{ brand.title }}
          </b-button>
        </div>
      </div>
      <b-dropdown id="dropdown-right" right text="All" variant="dark">
        <div
          v-for="(brand, index) in brands.taxonomyContent.brands"
          :key="index"
        >
          <b-dropdown-item href="#">{{ brand.title }}</b-dropdown-item>
        </div>
      </b-dropdown>
    </b-row>
  </b-card>
</template>

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
      selectedBrand: "All",
    };
  },
};
</script>
