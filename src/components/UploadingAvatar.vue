<template>
  <div class="hello">
    <div class="m-1">
      <image-uploader
        :preview="false"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="verbose"
        @input="setImage"
      >
        <label for="fileInput" slot="upload-label">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                class="path1"
                d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
              ></path>
            </svg>
          </figure>

          <b-badge class="light">
            {{ hasImage ? "Replace" : "Click to upload your photo" }}</b-badge
          >
        </label>
      </image-uploader>
      <b-button
        class="primaryBackgroundColor"
        v-if="hasImage"
        @click="submitImage"
        >Confirm</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Vue Image Upload and Resize Demo",
      hasImage: false,
      image: null,
    };
  },
  methods: {
    setImage: function(output) {
      this.hasImage = true;
      this.image = output;
      console.log("Info", output.info);
      console.log("Exif", output.exif);
    },
    submitImage() {
      if (this.image != null) {
        let photo = [];

        let photoOb = {
          file_name: this.image.info.name,
          type: "PHOTO",
          thumbnail: true,
          path: this.image.dataUrl,
        };
        photo.push(photoOb);
        console.log(photo);
        this.$emit("uploadProfile", photo);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#fileInput {
  display: none;
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
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
