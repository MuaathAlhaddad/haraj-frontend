<template>
  <b-col cols="9" lg="9" md="12" sm="12" xs="12">
    <b-container class="bv-example-row mt-3">
      <b-card bg-variant="light" header="Ad Details">
        <b-card-text>
          <div>
            <!--       test     -->
            <div
              id="my-strictly-unique-vue-upload-multiple-image"
              style="display: flex; justify-content: center;"
            >
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
              ></vue-upload-multiple-image>
            </div>
            <!--       test     -->

            <!--            <alert-erorr :message="'You have to upload photos!'" v-if="alert" />-->
            <!--            <b-form-file-->
            <!--              v-model="photos"-->
            <!--              multiple-->
            <!--              accept="image/*"-->
            <!--              @change="updatePhotos"-->
            <!--              :state="Boolean(photos)"-->
            <!--              placeholder="Choose a file or drop it here..."-->
            <!--              drop-placeholder="Drop file here..."-->
            <!--            ></b-form-file>-->
          </div>
        </b-card-text>
        <div class="submit-btn">
          <b-button
            v-on:click="submitPhotos"
            class="primaryBackgroundColor"
            type="submit"
            >Next</b-button
          >
        </div>
      </b-card>
      {{ photos }}
    </b-container>
  </b-col>
</template>

<script>
// import AlertErorr from "../AlertErorr.vue";
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  components: { VueUploadMultipleImage },
  data() {
    return {
      images: [],
      photos: [],
      AttachmentTypes: {
        PHOTO: "photo",
        DOCUMENT: "document",
        AUDIO: "audio",
        VIDEO: "video",
        OTHERS: "others",
      },
      photo: {
        type: "PHOTO",
        path: "",
        disk_name: "",
        file_name: "",
        thumbnail: false,
      },
      alert: null,
    };
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);

      this.photo.path = fileList[index].path;
      this.photo.file_name = fileList[index].name;

      this.photos.push(this.photo);
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    submitPhotos() {
      console.log(this.photos);

      if (this.photos == null) {
        this.alert = true;
        console.log("Photos should not be not");
      } else {
        this.$emit("passPhotos", this.photos);
      }
    },
  },
};
</script>

<style scoped>
.drag-box {
  height: 400px !important;
}

.submit-btn {
  text-align: center;
  max-width: 100%;
}

.submit-btn button {
  background-color: #4f9da6;
  width: 250px;
}

#my-strictly-unique-vue-upload-multiple-image {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<!-- TODO: We need to work on how to store files to the local storage.-->
