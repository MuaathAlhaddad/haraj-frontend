<template>
  <b-row>
    <b-col>
      <button>
        <ShareNetwork
          network="facebook"
          url="https://lindaojo.com/blog/awesome-article"
          :title="ad.ad.title"
          :description="ad.ad.description"
          hashtags=" "
        >
          <a
            class="btn btn-primary"
            style="background-color: #3b5998;"
            href="#!"
            role="button"
            ><i class="fab fa-facebook me-2"></i> Facebook</a
          >
        </ShareNetwork>
      </button>

      <button>
        <ShareNetwork
          network="twitter"
          url="https://lindaojo.com/blog/awesome-article"
          :title="ad.ad.title"
          :description="ad.ad.description"
          hashtags=" "
        >
          <a
            class="btn btn-primary"
            style="background-color: #55acee;"
            href="#!"
            role="button"
            ><i class="fab fa-twitter me-2"></i> Twitter</a
          >
        </ShareNetwork>
      </button>
      <button>
        <ShareNetwork
          network="whatsapp"
          url="https://lindaojo.com/blog/awesome-article"
          :title="ad.ad.title"
          :description="ad.ad.description"
          hashtags=" "
        >
          <a
            class="btn btn-primary"
            style="background-color: #25d366;"
            href="#!"
            role="button"
            ><i class="fab fa-whatsapp me-2"></i> WhatsApp</a
          >
        </ShareNetwork>
      </button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ["ad"],
};
</script>
<style scoped></style>
