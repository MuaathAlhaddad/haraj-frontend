<template>
  <!-- Search -->
  <b-col cols="12" class="my-5 text-center">
    <div>
      <div>
        <b-row class="d-flex justify-content-center find-section">
          <div v-if="isAuth">
            <router-link :to="{ path: `/create-ad` }">
              <b-button
                class="add-post mr-1 px-4 secondaryBackgroundColor hoverButton"
                type="submit"
              >
                Add Post
              </b-button>
            </router-link>
          </div>
          <div v-if="!isAuth">
            <router-link :to="{ path: `/login` }">
              <b-button
                class="add-post mr-1 px-4 secondaryBackgroundColor hoverButton"
                type="submit"
              >
                Add Post
              </b-button>
            </router-link>
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
import { mapGetters } from "vuex";

export default {
  props: ["states", "ads"],
  data() {
    return {
      searchData: {
        state: null,
        searchKeyword: "",
      },
      filteredAds: null,
      allStates: [],
    };
  },
  methods: {
    search() {
      var item;
      // if (this.searchData.searchKeyword == "") {
      //   item = this.$props.ads.filter((item) =>
      //     item.user.state.name.includes(this.searchData.state)
      //   );
      // } else if (this.searchData.state == null) {
      //   item = this.$props.ads;
      // } else {
      item = this.$props.ads.filter(
        (item) =>
          item.title.toLowerCase().includes(this.searchData.searchKeyword) ||
          item.description
            .toLowerCase()
            .includes(this.searchData.searchKeyword) ||
          item.user.name.includes(this.searchData.searchKeyword) ||
          item.user.state.name.includes(this.searchData.state)
      );
      // }

      this.filteredAds = item;
      console.log(this.searchData.state);
      this.$emit("getSearchedAds", this.filteredAds);
    },
  },
  computed: {
    ...mapGetters({
      isAuth: "Auth/isAuth",
    }),
  },
  mounted() {
    const insert = (arr, index, newItem) => [
      // part of the array before the specified index
      ...arr.slice(0, index),
      // inserted item
      newItem,
      // part of the array after the specified index
      ...arr.slice(index),
    ];

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
