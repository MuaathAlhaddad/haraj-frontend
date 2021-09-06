<template>
  <div>
    <b-tab
      v-for="(haraj, index) in harajs.taxonomyContents.data"
      :key="haraj.id"
      :title-link-class="linkClass(index)"
      @click="selectedHaraj(haraj.title)"
    >
      <template #title>
        <i :class="[haraj.icon, 'fa-3x', 'd-block']"> </i>

        <h6 style="min-height: 22px;" class="text-center">
          {{ haraj.title }}
        </h6>
      </template>
    </b-tab>
  </div>
</template>
<script>
export default {
  props: ["harajs"],
  name: "categories-test",

  data() {
    return {
      tabIndex: 0,
      SubtabIndex: 0,
    };
  },
  methods: {
    linkClass(index) {
      if (this.tabIndex === index) {
        return ["bg-info", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },
    linkSubClass(index) {
      if (this.SubtabIndex === index) {
        return ["bg-info", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },

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
