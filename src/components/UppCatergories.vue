<template>
  <b-card class="mt-5">
    <b-row>
      <div v-for="(haraj, index) in harajs.taxonomyContents.data" :key="index">
        <div class="text-center m-1">
          <b-button
            class="generalBackgroundBrown"
            v-on:click="selectedHaraj(haraj.title)"
          >
            <b-badge variant="light">
              <i :class="icons[index]" class="generalColorBrown"></i>
              {{ haraj.title }}
            </b-badge>
          </b-button>
        </div>
      </div>
      {{ selected }}
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: ["harajs"],
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
      selected: "",
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
