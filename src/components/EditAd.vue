<template>
  <span v-if="user">
    <b-button variant="dark" v-b-modal="'my-ad-modal'" class="mr-1">
      Edit
    </b-button>

    <b-modal
      id="my-ad-modal"
      ref="modal"
      ok-only
      title="Submit Your Report"
      ok-variant="outline-dark"
      ok-title="Cancel"
    >
      <div>
        <div>
          <div>
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
            <label for="price">Price</label>

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

            <div class="form-group">
              <label>Upload Images</label>
              <div>
                <vue-upload-multiple-image
                  @upload-success="uploadImageSuccess"
                  @before-remove="beforeRemove"
                  @edit-image="editImage"
                  :data-images="images"
                  show-primary
                  idUpload="myIdUpload"
                  accept="image/*"
                  editUpload="myIdEdit"
                  drag-text="Drag and drop"
                  browse-text="upload images"
                  primary-text="success"
                  drop-text="Drag and drop"
                  mark-is-primary-text="mark is primary text"
                >
                </vue-upload-multiple-image>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="updateAd(ad)" type="submit" class="btn btn-success">
              Update
            </button>
          </div>
        </div>
      </div>
    </b-modal>
  </span>
</template>
<script>
import { mapGetters } from "vuex";
// eslint-disable-next-line no-unused-vars
import UpdateAd from "../graphql/mutations/updateAd.gql";
import VueUploadMultipleImage from "vue-upload-multiple-image";
///Validation
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  props: ["ad"],
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(50),
      },
      description: {
        minLength: minLength(10),
        maxLength: maxLength(1000),
        required,
      },
      price: { minLength: minLength(1), maxLength: maxLength(10), required },
    },
  },
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      images: [],
      fileList: null,
      stopTemp: 0,
      loading: 0,
      create_updateSwitcher: false,
      switchBrands: false,
      switchModels: false,
      editmode: false,
      products: {},
      harajs: [],
      adsData: [],
      citiesArray: [],
      year: null,
      modelsArray: [],
      yearsArray: [],
      brandsObjects: null,
      modelsObjects: null,
      yearsObjects: null,
      categories: [],
      brands: [],
      deleteIds: [],
      models: [],
      photos: [],
      // eslint-disable-next-line no-undef
      form: {
        id: "",
        name: "",
        title: this.$props.ad.title,
        description: this.$props.ad.description,
        photo: "",
        negotiable: this.$props.ad.negotiable,
        price: this.$props.ad.price,
        photoUrl: "",
      },

      tag: "",
      autocompleteItems: [],
      filters: [],
      isBody: false,
      body: "",
      nameState: null,
      submittedNames: [],
      loadingReport: 0,
    };
  },

  methods: {
    validateState(value) {
      const { $dirty, $error } = this.$v.form[value];
      return $dirty ? !$error : null;
    },
    ///Uploading and Edit photos
    uploadImageSuccess(formData, index, fileList) {
      this.fileList = fileList;
    },
    // eslint-disable-next-line no-unused-vars
    beforeRemove(index, done, fileList) {
      var r = confirm("remove image");
      if (r == true) {
        done();
      }
    },
    editImage(formData, index, fileList) {
      this.fileList = fileList;
    },

    updateAd(ad) {
      console.log(ad);
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        console.log("there is an error");
      }
      if (this.fileList !== null) {
        for (let index = 0; index < this.fileList.length; index++) {
          let photo = new Object();
          photo.file_name = this.fileList[index].name;
          photo.path = this.fileList[index].path;
          photo.type = "PHOTO";
          photo.disk_name = "";
          photo.thumbnail = false;
          this.photos[index] = photo;
        }
        console.log(this.photos);
      }
      if (this.photos.length == 0) {
        let photos = this.$props.ad.attachments.data;

        photos.forEach(function(photo) {
          delete photo.attachable_id;
          delete photo.id;
          delete photo.type;
        });
        let arrayPhotos = [];
        JSON.parse(JSON.stringify(photos)).map((photo) => {
          let tempPhoto = new Object();
          tempPhoto.file_name = photo.file_name;
          tempPhoto.path = photo.path;
          tempPhoto.type = "PHOTO";
          tempPhoto.disk_name = "";
          tempPhoto.thumbnail = false;
          arrayPhotos.push(tempPhoto);
        });
        this.$apollo
          .mutate({
            // Query
            mutation: UpdateAd,
            // Parameters
            variables: {
              adId: this.$props.ad.id,
              title: this.form.title,
              description: this.form.description,
              price: parseFloat(this.form.price),
              photos: arrayPhotos,
              deletePhotos: this.deletePhotos,
            },
          })
          // eslint-disable-next-line no-unused-vars
          .then((data) => {
            this.$bvModal
              .msgBoxOk("Done Successfully", {
                title: "Well Done!",
                size: "sm",
                buttonSize: "sm",
                okVariant: "success",
                headerClass: "p-2 border-bottom-0",
                footerClass: "p-2 border-top-0",
                centered: true,
              })
              .then((value) => {
                this.boxTwo = value;
                location.reload();
              })
              .catch(() => {});
          })
          .catch((errors) => {
            console.log(errors);
          });
      } else {
        this.$props.ad.attachments.data.map((att) => {
          this.deleteIds.push(att.id);
        });
        console.log(this.deleteIds);
        this.$apollo
          .mutate({
            // Query
            mutation: UpdateAd,
            // Parameters
            variables: {
              adId: this.$props.ad.id,
              title: this.form.title,
              description: this.form.description,
              price: parseFloat(this.form.price),
              photos: this.photos,
              deletePhotos: this.deleteIds,
            },
          })
          // eslint-disable-next-line no-unused-vars
          .then((data) => {
            this.$bvModal
              .msgBoxOk("Done Successfully", {
                title: "Well Done!",
                size: "sm",
                buttonSize: "sm",
                okVariant: "success",
                headerClass: "p-2 border-bottom-0",
                footerClass: "p-2 border-top-0",
                centered: true,
              })
              .then((value) => {
                this.boxTwo = value;
                location.reload();
              })
              .catch(() => {});
          })
          .catch((errors) => {
            console.log(errors);
          });
      }
    },
  },
  computed: {
    validation() {
      return this.body.length > 10 && this.body.length < 300;
    },
    ...mapGetters({
      user: "Auth/user",
    }),
  },
};
</script>
<style scoped>
.custom-size-button1 {
  width: 200px !important;
}
</style>
