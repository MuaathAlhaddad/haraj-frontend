<template>
  <div @click="selectedHaraj(haraj.title)">
    <b-tab
      v-for="haraj in harajs.taxonomyContents.data"
      :key="haraj.id"
      :title-link-class="[
        haraj.title === harajStyleTitle
          ? 'text-light secondaryBackgroundColor'
          : 'primaryColor',
        '',
      ]"
      @click="selectedHaraj(haraj.title)"
    >
      <template #title>
        <div class="d-flex justify-content-center row-hl">
          <div class="  item-hl">
            <i :class="[haraj.icon, 'fa-2x', 'd-block']"> </i>
          </div>
        </div>
        <div class="d-flex justify-content-center row-hl">
          <div class=" item-hl">
            <h6 style="min-height: 22px;" class="text-center">
              {{ haraj.title }}
            </h6>
          </div>
        </div>
      </template>
    </b-tab>
  </div>
</template>
<script>
export default {
  props: ["harajs", "harajStyleTitle"],
  name: "categories-test",

  data() {
    return {
      tabIndex: 0,
      SubtabIndex: 0,
    };
  },
  methods: {
    selectedHaraj(haraj) {
      console.log(haraj);
      this.$emit("selectedHaraj", haraj);
    },
  },
};
</script>
<style>
/*.active-category {*/
/*  color: #f05e23;*/
/*  background-color: #f05e23;*/
/*}*/

.nav-tabs {
  flex-wrap: nowrap;
  white-space: nowrap;
  max-width: 1050px;
  overflow: auto;
  overflow-y: hidden;
}
</style>
