<template>
  <div>
    <template v-if="loadingAd">
      <div>
        <loading-icon />
      </div>
    </template>

    <template v-else>
      <div>
        <b-container class="bv-example-row mt-3 background-main-div">
          <b-row>
            <b-col>
              <b-col class="mb-3 mt-4" col lg="4"
                ><h4 class="titleAd">{{ ad.ad.title }}</h4></b-col
              >
              <b-col class="m-1 bg-white" lg="6" style="border:1px solid">
                <router-link to="ads">
                  <span> {{ ad.ad.taxomomyContents.data[0].title }}</span>
                </router-link>
                >
                <router-link to="ads">
                  <span> {{ ad.ad.taxomomyContents.data[1].title }}</span>
                </router-link>
                >
                <router-link to="ads">
                  <span> {{ ad.ad.taxomomyContents.data[2].title }}</span>
                </router-link>
                >
                <router-link to="ads">
                  <span> {{ ad.ad.taxomomyContents.data[3].title }}</span>
                </router-link>
              </b-col>

              <b-row class="mb-3">
                <b-col>
                  <b-col class="m-1">Details like likes date of post</b-col>
                </b-col>
                <b-col class="m-1" col lg="4"
                  >Price:
                  <span class="text-info">{{ ad.ad.price }}</span>
                </b-col>
              </b-row>
              <b-col style="border:1px solid">
                <div>
                  <b-carousel
                    id="carousel-1"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;"
                  >
                    <!-- Text slides with image -->
                    <b-carousel-slide
                      img-src="https://picsum.photos/1024/480/?image=52"
                    ></b-carousel-slide>

                    <!-- Slides with custom text -->
                    <b-carousel-slide
                      img-src="https://picsum.photos/1024/480/?image=54"
                    >
                    </b-carousel-slide>

                    <!-- Slides with image only -->
                    <b-carousel-slide
                      img-src="https://picsum.photos/1024/480/?image=58"
                    ></b-carousel-slide>

                    <!-- Slides with img slot -->
                    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                    <b-carousel-slide>
                      <template #img>
                        <img
                          class="d-block img-fluid w-100"
                          width="1024"
                          height="480"
                          src="https://picsum.photos/1024/480/?image=55"
                          alt="image slot"
                        />
                      </template>
                    </b-carousel-slide>

                    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                  </b-carousel>
                </div>
              </b-col>
            </b-col>
            <b-col col lg="4" cstyle="border:1px solid">
              <b-card style="max-width: 20rem;" class="mbt-2 m-3">
                <ul class="list-unstyled">
                  <b-media tag="li">
                    <template #aside>
                      <b-img
                        blank
                        blank-color="#abc"
                        width="64"
                        alt="placeholder"
                      ></b-img>
                    </template>
                    <p class="mt-0 mb-1">
                      Posted by <br />

                      <router-link
                        :to="{
                          name: 'seller-profile',
                          params: { userId: `{{ data.ad.user.id }}` },
                        }"
                      >
                        {{ ad.ad.user.name }}
                      </router-link>
                    </p>
                    <b-row class="mb-3">
                      <b-col style="max-width: 20rem; " md="4" class="p-3"
                        >Location:
                      </b-col>
                      <b-col style="max-width: 20rem; " md="4" class="p-3"
                        >{{ ad.ad.user.state.name }}
                      </b-col>
                    </b-row>
                    <b-row class="mb-3">
                      <b-col style="max-width: 20rem; " md="4" class="p-3"
                        >Joined:
                      </b-col>
                      <b-col style="max-width: 20rem; " md="4" class="p-3"
                        >{{ ad.ad.user.created_at }}
                      </b-col>
                    </b-row>
                  </b-media>
                </ul>
                <hr />
                <b-button block variant="info">XXXXXX0325</b-button>
                <b-button block variant="outline-secondary"
                  >Send a message</b-button
                >
              </b-card>
              <b-card
                style="max-width: 20rem;"
                class="mbt-2 m-3"
                header="Location's Map"
              >
              </b-card>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="bv-example-row mt-3">
          <div class="text-center">
            <b-button
              class="px-5 py-2 mr-1 custom-size-button1"
              rounded
              variant="light"
            >
              Report <i class="fa fa-flag" aria-hidden="true"></i>
            </b-button>
            <b-button
              class="px-5 py-2 mr-1 custom-size-button1"
              rounded
              variant="light"
            >
              WhatsApp <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </b-button>
            <b-button
              class="px-5 py-2 mr-1 custom-size-button1"
              rounded
              variant="light"
              >Share <i class="fa fa-share-alt" aria-hidden="true"></i>
            </b-button>
            <b-button
              class="px-5 py-2 mr-1 custom-size-button1"
              rounded
              variant="light"
              >Favorite
              <b-icon
                icon="heart-fill"
                v-bind:variant="isFavorited ? 'danger' : ''"
                v-on:click="favoriteAd"
                scale="0.7"
              ></b-icon>
            </b-button>
            <b-button
              class="px-5 py-2 mr-1 custom-size-button1"
              rounded
              variant="light"
              >Message <i class="fa fa-comment" aria-hidden="true"></i>
            </b-button>
          </div>
          <hr />
        </b-container>
        <b-container class="bv-example-row mt-3">
          <div class="row">
            <b-col col lg="4" md="12" sm="12" xs="12">
              <b-button-group>
                <b-button
                  class="custom-size-button2"
                  v-bind:class="
                    switchButton == 0 ? 'conditionalBtn' : 'normalBtn'
                  "
                  v-on:click="switchButton = 0"
                  >Details</b-button
                >
                <b-button
                  class="custom-size-button2"
                  v-bind:class="
                    switchButton == 1 ? 'conditionalBtn' : 'normalBtn'
                  "
                  v-on:click="switchButton = 1"
                  >Reviews</b-button
                >
                <b-button
                  class="custom-size-button2"
                  v-bind:class="
                    switchButton == 2 ? 'conditionalBtn' : 'normalBtn'
                  "
                  v-on:click="switchButton = 2"
                  >Comments</b-button
                >
              </b-button-group></b-col
            >
          </div>
        </b-container>
        <Details v-if="switchButton == 0" :adData="ad.ad" />
        <Review v-if="switchButton == 1" :adData="ad.ad" />
        <Comment v-if="switchButton == 2" :adData="ad.ad" />
      </div>
    </template>
  </div>
</template>

<script>
import Details from "../../components/AdDetails.vue";
import Review from "../../components/AdReview.vue";
import Comment from "../../components/AdComments.vue";
import adItem from "../../graphql/queries/ad.gql";
import LoadingIcon from "../../components/LoadingIcon.vue";
import FavoriteAd from "../../graphql/mutations/favouriteAd.gql";
const adData = adItem;
export default {
  components: { Review, Details, Comment, LoadingIcon },
  data() {
    return {
      ad: [],
      switchButton: "0",
      loadingAd: 0,
      isFavorited: null,
    };
  },

  methods: {
    favoriteAd() {
      this.isFavorited = !this.isFavorited;
      let favAd = this.isFavorited;
      this.$apollo
        .mutate({
          // Query
          mutation: FavoriteAd,
          // Parameters
          variables: {
            id: 1,
            favorited: favAd,
          },
        })
        .then(() => {})
        .catch((error) => {
          this.error = true;
          console.error(error);
        });
    },
  },
  mounted() {},
  apollo: {
    ad: {
      query: adData,
      loadingKey: "loadingAd",
      update(data) {
        this.isFavorited = data.ad.favorited;
        return data;
      },
    },
  },
};
</script>
<style scoped>
.background-main-div {
  background-color: #f5f5f5;
  border: 3px solid #4f9da6;
  border-radius: 10px;
}

.titleAd {
  color: #336699;
}
.custom-size-button1 {
  width: 200px !important;
}
.custom-size-button2 {
  width: 100px !important;
}

#detail {
  background-color: #f5f5f5;
  border: 1px solid #e4e7f5;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 100px;
}

.normalBtn {
  background-color: #747474;
}

.conditionalBtn {
  background-color: #4f9da6;
}
</style>
