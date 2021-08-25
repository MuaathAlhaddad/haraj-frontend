<template>
  <b-card class="mt-5">
    <b-row>
      <div
        v-for="(catergory, index) in catergories.taxonomyContents.data"
        :key="index"
      >
        <div class="text-center m-1">
          <b-button
            variant="info"
            v-on:click="selectedCatergory = catergory.title"
          >
            <b-badge variant="light">
              <i :class="icons[index]"></i> {{ catergory.title }}
            </b-badge>
          </b-button>
        </div>
      </div>
      {{ selectedCatergory }}
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: ["catergories"],
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
      selectedCatergory: "dfdf",
    };
  },
};
</script>
