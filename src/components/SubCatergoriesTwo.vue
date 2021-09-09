<template>
  <div>
    <div>
      <b-tabs>
        <b-tab
          v-for="(taxon, index) in level2.levle2.children"
          :key="taxon.id"
          :title-link-class="linkSubClass(index)"
        >
          <template #title>
            <button
              style="min-height: 22px;"
              :class="[
                taxon.title === modelStyleTitle
                  ? 'text-light secondaryBackgroundColor'
                  : 'generalColorBrown text-light levelCatergories',
                'rounded border-light',
              ]"
              v-on:click="selectedModel(taxon.title)"
            >
              {{ taxon.title }}
            </button>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: ["level2", "modelStyleTitle"],
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
    selectedModel(taxon) {
      this.$emit("selectedLevelTwo", taxon);
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
