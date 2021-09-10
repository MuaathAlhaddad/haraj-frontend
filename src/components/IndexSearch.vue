<template>
  <!-- Search -->
  <b-col cols="12" class="my-5 text-center">
    <div>
      <div>
        <b-row class="d-flex justify-content-center find-section">
          <div v-if="isCars">
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="searchData.year"
              :options="allyears"
              :value="null"
            ></b-form-select>
          </div>
          <div>
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="searchData.state"
              :options="allStates"
              :value="null"
            ></b-form-select>
          </div>
          <!--Input-->
          <div>
            <b-form-input
              id="inline-form-input-search"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Search"
              v-model="searchData.searchKeyword"
            ></b-form-input>
          </div>
          <div>
            <b-button class="primaryBackgroundColor" @click="search"
              >Find</b-button
            >
          </div>
        </b-row>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ["years", "states", "ads", "isCars"],
  data() {
    return {
      searchData: {
        state: null,
        searchKeyword: "",
        year: null,
      },
      filteredAds: null,
      allStates: [],
      allyears: [],
    };
  },
  methods: {
    search() {
      if (this.searchData.searchKeyword != "") {
        var item = this.$props.ads.filter(
          (item) =>
            item.title.toLowerCase().includes(this.searchData.searchKeyword) ||
            item.description
              .toLowerCase()
              .includes(this.searchData.searchKeyword) ||
            item.user.name.includes(this.searchData.searchKeyword) ||
            item.user.state.name.includes(this.searchData.state)
        );
        this.filteredAds = item;
        console.log(this.filteredAds);
        this.$emit("searchAds", this.filteredAds);
      }
    },
  },
  mounted() {
    var finalYears = this.$props.years.map(function(obj) {
      return obj.title;
    });

    this.allyears = finalYears;

    const insert = (arr, index, newItem) => [
      // part of the array before the specified index
      ...arr.slice(0, index),
      // inserted item
      newItem,
      // part of the array after the specified index
      ...arr.slice(index),
    ];

    this.allyears = insert(this.allyears, 0, { text: "Years...", value: null });

    var finalStates = this.$props.states.map(function(obj) {
      return obj.name;
    });
    this.allStates = finalStates;
    this.allStates = insert(this.allStates, 0, {
      text: "States...",
      value: null,
    });
  },
};
</script>
