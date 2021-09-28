<template>
  <b-col cols="9" lg="9" md="12" sm="12" xs="12">
    <b-container class="bv-example-row mt-3">
      <b-card bg-variant="light" header="Ad Details">
        <b-card-text>
          <div>
            <b-form @submit.stop.prevent="onSubmit">
              <template v-if="loadingCatergories">
                <div>
                  <loading-icon />
                </div>
              </template>
              <template v-else>
                <b-form-group
                  id="input-group-1"
                  label="Category:"
                  label-for="input-1"
                >
                  <b-form-select
                    id="example-input-1"
                    name="example-input-1"
                    v-model="$v.form.category.$model"
                    :options="categories"
                    :state="validateState('category')"
                    aria-describedby="input-1-live-feedback"
                  ></b-form-select>
                </b-form-group>
                <b-form-group label="Brands:" v-if="switchBrands">
                  <b-form-select
                    id="input-1"
                    v-model="form.brand"
                    :options="brands"
                  >
                  </b-form-select>
                </b-form-group>
                <b-form-group label="Models:" v-if="switchModels">
                  <b-form-select
                    id="input-1"
                    v-model="form.model"
                    :options="modelsArray"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Years:"
                  v-if="switchModels && form.category == 'cars'"
                >
                  <b-form-select
                    id="input-1"
                    v-model="form.year"
                    :options="yearsArray"
                  ></b-form-select>
                </b-form-group>
              </template>
              <b-form-group
                id="input-group-2"
                label="Ad Title:"
                label-for="input-2"
              >
                <b-form-input
                  id="title"
                  name="title"
                  type="text"
                  v-model="$v.form.title.$model"
                  :state="validateState('title')"
                  aria-describedby="input-2-live-feedback"
                ></b-form-input
                ><b-form-invalid-feedback id="input-2-live-feedback">
                  This is a required field!
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Description:"
                label-for="input-3"
              >
                <b-form-textarea
                  name="description"
                  v-model="$v.form.description.$model"
                  :state="validateState('description')"
                  aria-describedby="input-3-live-feedback"
                ></b-form-textarea>
                <b-form-invalid-feedback id="input-3-live-feedback">
                  This is a required field!
                </b-form-invalid-feedback>
              </b-form-group>
              <label for="price" required>Price</label>

              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <small class="secondaryColor">
                    <i class="fas fa-dollar-sign"></i>
                  </small>
                </b-input-group-prepend>
                <b-form-input
                  id="price"
                  name="price"
                  type="number"
                  v-model="$v.form.price.$model"
                  :state="validateState('price')"
                  aria-describedby="input-4-live-feedback"
                >
                </b-form-input>

                <b-input-group-prepend is-text>
                  Negotiable
                  <b-form-checkbox class="ml-1" v-model="form.negotiable">
                  </b-form-checkbox>
                </b-input-group-prepend>
                <b-form-invalid-feedback id="input-4-live-feedback">
                  This is a required field!
                </b-form-invalid-feedback>
              </b-input-group>
              <b-form-group
                id="input-group-5"
                label="City:"
                label-for="input-5"
              >
                <b-form-select
                  id="example-input-5"
                  name="example-input-5"
                  v-model="$v.form.city.$model"
                  :options="cities"
                  :state="validateState('city')"
                  aria-describedby="input-5-live-feedback"
                >
                </b-form-select>
              </b-form-group>

              <span v-for="(tag, index) in tags" :key="index" class="mr-1">
                <b-badge variant="info">
                  {{ tag }} <span @click="removeTag(index)">x</span>
                </b-badge>
              </span>
              <b-form-group
                id="input-group-7"
                label="Tags:"
                label-for="input-7"
              >
                <b-form-input
                  id="input-7"
                  v-model="form.tag"
                  type="text"
                  placeholder="Enter a Tag"
                  @keydown.enter="addTag"
                  @keydown.188="addTag"
                  @keydown.delete="removeLastTag"
                ></b-form-input>
              </b-form-group>
              <div class="submit-btn">
                <b-button class="primaryBackgroundColor" type="submit"
                  >Next</b-button
                >
              </div>
            </b-form>
          </div>
        </b-card-text>
      </b-card>
    </b-container>
  </b-col>
</template>

<script>
import Brands from "../../graphql/queries/taxonomies/brands.gql";
import Models from "../../graphql/queries/taxonomies/models.gql";
import Years from "../../graphql/queries/taxonomies/years.gql";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import LoadingIcon from "../LoadingIcon.vue";

const allBrands = Brands;
const allModels = Models;
export default {
  mixins: [validationMixin],
  props: ["states", "harajs"],
  validations: {
    form: {
      category: {
        required,
      },
      title: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(19),
      },
      description: {
        minLength: minLength(10),
        required,
      },
      price: {
        required,
      },

      city: {
        required,
      },
    },
  },
  components: { LoadingIcon },
  data() {
    return {
      tags: [],
      form: {
        title: null,
        description: null,
        price: null,
        negotiable: false,
        brand: null,
        category: null,
        model: null,
        year: null,
        city: null,
        tags: [],
        taxonomyContents: [],
      },
      switchBrands: false,
      switchModels: false,
      loadingCatergories: 0,
      cities: [],
      categories: [],
      brands: [],
      models: [],
      modelsArray: [],
      yearsArray: [],
      brandsObjects: null,
      modelsObjects: null,
      yearsObjects: null,
    };
  },
  apollo: {
    brands: {
      query: allBrands,
      loadingKey: "loadingCatergories",

      variables() {
        return {
          catergoryName: this.form.category,
          operator: "LIKE",
        };
      },
      skip() {
        if (this.form.category == null) {
          return true;
        }
      },
      update(data) {
        if (this.form.category != null) {
          this.brandsObjects = data;
          this.brand = this.form.brand;
          this.switchBrands = true;
          var finalBrands = data.level1.children.map(function(obj) {
            return obj.title;
          });

          return (data = finalBrands);
        }
      },
    },
    models: {
      query: allModels,
      loadingKey: "loadingCatergories",

      variables() {
        return {
          LevelName: this.form.brand,
        };
      },
      skip() {
        if (this.form.brand == null) {
          return true;
        }
      },
      update(data) {
        if (this.form.brand != null) {
          this.modelsObjects = data;
          this.switchModels = true;
          var finalModels = data.level2.children.map(function(obj) {
            return obj.title;
          });
          return (this.modelsArray = finalModels);
        }
      },
    },
    years: {
      query: Years,
      loadingKey: "loadingCatergories",
      skip() {
        if (this.form.brand == null) {
          return true;
        }
      },
      update(data) {
        if (this.form.brand != null) {
          this.yearsObjects = data;
          this.switchModels = true;
          var finalYears = data.taxonomyContents.data.map(function(obj) {
            return obj.title;
          });
          return (this.yearsArray = finalYears);
        }
      },
    },
  },
  methods: {
    validateState(value) {
      const { $dirty, $error } = this.$v.form[value];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      } else {
        if (this.form.category != null) {
          const category = this.$props.harajs.find(
            (element) => element.title == this.form.category
          );
          this.form.taxonomyContents.push(category.id);
        }
        if (this.form.brand != null) {
          const brand = this.brandsObjects.level1.children.find(
            (element) => element.title == this.form.brand
          );
          this.form.taxonomyContents.push(brand.id);
        }
        if (this.form.model != null) {
          const model = this.modelsObjects.level2.children.find(
            (element) => element.title == this.form.model
          );
          this.form.taxonomyContents.push(model.id);
        }
        if (this.form.year != null) {
          const year = this.yearsObjects.taxonomyContents.data.find(
            (element) => element.title == this.form.year
          );
          this.form.taxonomyContents.push(year.id);
        }

        this.$emit("passAdDetails", this.form);
      }
    },

    ///Tags methods
    addTag(event) {
      event.preventDefault();
      var val = event.target.value.trim();
      if (val.length > 0) {
        this.tags.push(val);
        this.form.tags.push(val);
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
    var finalStates = this.$props.states.map(function(obj) {
      return obj.name;
    });
    this.cities = finalStates;
    var finalHarajs = this.$props.harajs.map(function(obj) {
      return obj.title;
    });
    this.categories = finalHarajs;
  },
};
</script>

<style scoped>
.submit-btn {
  text-align: center;
  max-width: 100%;
}
.submit-btn button {
  width: 250px;
}
</style>
