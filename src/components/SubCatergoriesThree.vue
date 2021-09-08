<template>
  <div>
    <div>
      <b-tabs>
        <b-tab
          v-for="(model, index) in models.models.children"
          :key="model.id"
          :title-link-class="linkSubClass(index)"
        >
          <template #title>
            <button
              style="min-height: 22px;"
              :class="[
                model.title === modelStyleTitle
                  ? 'text-light secondaryBackgroundColor'
                  : 'generalColorBrown text-light levelCatergories',
                'rounded border-light',
              ]"
              v-on:click="selectedModel(model.title)"
            >
              {{ model.title }}
            </button>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: ["models", "modelStyleTitle"],
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
    selectedModel(model) {
      this.$emit("selectedModel", model);
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
