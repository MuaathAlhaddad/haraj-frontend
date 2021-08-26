<template>
  <b-card class="">
    <b-row>
      <div
        v-for="(model, index) in models.taxonomyContent.models.slice(0, 15)"
        :key="index"
      >
        <div>
          <b-button class="m-1" v-on:click="selectedModel(model.title)">
            {{ model.title }}
          </b-button>
        </div>
      </div>
      <b-dropdown id="dropdown-right" right text="All" variant="dark">
        <div
          v-for="(model, index) in models.taxonomyContent.models"
          :key="index"
        >
          <b-dropdown-item v-on:click="selectedModel(model.title)"
            >{{ model.title }}
          </b-dropdown-item>
        </div>
      </b-dropdown>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: ["models"],
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
  },
};
</script>
