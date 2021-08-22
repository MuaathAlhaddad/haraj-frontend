<template>
  <b-col cols="9" lg="9" md="12" sm="12" xs="12">
    <b-container class="bv-example-row mt-3">
      <b-card bg-variant="light" header="Ad Details">
        <b-card-text>
          <div>
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Category:"
                label-for="input-1"
              >
                <b-form-select
                  id="input-1"
                  v-model="form.category"
                  :options="categories"
                  required
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Ad Title:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.title"
                  placeholder="Enter Title"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Description:"
                label-for="input-3"
              >
                <b-form-textarea
                  id="input-3"
                  v-model="form.description"
                  placeholder="Description"
                ></b-form-textarea>
              </b-form-group>
              <label for="price" required>Price</label>

              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <i class="fa fa-usd" aria-hidden="true"></i>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  placeholder="$100"
                  id="input-4"
                  v-model="form.price"
                ></b-form-input>
                <b-input-group-prepend is-text>
                  Negotiable
                  <b-form-checkbox class="ml-1" v-model="form.negotiable">
                  </b-form-checkbox>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-group
                id="input-group-5"
                label="City:"
                label-for="input-5"
              >
                <b-form-select
                  id="input-1"
                  v-model="form.city"
                  :options="cities"
                  required
                ></b-form-select>
              </b-form-group>

              <span v-for="(tag, index) in tags" :key="index" class="mr-1">
                <b-badge variant="info">
                  {{ tag }} <span @click="removeTag(index)">x</span>
                </b-badge>
              </span>
              <b-form-group
                id="input-group-6"
                label="Tags:"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="form.tag"
                  type="text"
                  placeholder="Enter a Tag"
                  @keydown.enter="addTag"
                  @keydown.188="addTag"
                  @keydown.delete="removeLastTag"
                ></b-form-input>
              </b-form-group>
              <div class="submit-btn">
                <b-button type="submit">Next</b-button>
              </div>
            </b-form>
          </div>
        </b-card-text>
      </b-card>
    </b-container>
    {{ cities }}
  </b-col>
</template>

<script>
export default {
  props: ["states"],
  data() {
    return {
      tags: [],

      form: {
        title: "",
        description: "",
        price: null,
        negotiable: false,
        category: null,
        city: null,
        tag: "",
      },
      categories: [
        { text: "Select One", value: null },
        "aaaaaaa",
        "bbbbbbb",
        "cccccccc",
        "dddddd",
      ],
      cities: [],
    };
  },
  methods: {
    detail() {
      this.switchButton = 0;
    },
    review() {
      this.switchButton = 1;
    },
    comments() {
      this.switchButton = 2;
    },
    finish() {
      this.switchButton = 4;
    },
    onSubmit(event) {
      event.preventDefault();
      this.$emit("passAdDetails", this.form);
    },

    ///Tags methods
    addTag(event) {
      event.preventDefault();
      var val = event.target.value.trim();
      if (val.length > 0) {
        this.tags.push(val);
        event.target.value = "";
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.tags.length - 1);
      }
    },
    //end of tags methods
  },

  mounted() {
    var finalArray = this.$props.states.map(function(obj) {
      return obj.name;
    });
    this.cities = finalArray;
  },
};
</script>

<style scoped>
.submit-btn {
  text-align: center;
  max-width: 100%;
}
.submit-btn button {
  background-color: #4f9da6;
  width: 250px;
}
</style>
