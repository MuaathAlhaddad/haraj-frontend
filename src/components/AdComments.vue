<template>
  <div>
    <b-container class="bv-example-row mb-4">
      <b-col class="mt-4" v-if="user">
        <b-media>
          <template #aside>
            <b-img
              blank
              blank-color="#ccc"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <b-form-textarea
            id="textarea-default"
            v-model="comment"
            placeholder="Type your comments"
          ></b-form-textarea>
        </b-media>
      </b-col>
      <b-col v-if="user">
        <div class="d-flex justify-content-end row-hl">
          <b-button size="sm" class="BrownBackground " @click="addComment"
            >Submit Comment</b-button
          >
        </div>
      </b-col>

      <div class="row">
        <b-col class="text-center" col lg="12" md="12" sm="12" xs="auto"
          ><h4 class="generalColorBrown">Comments</h4></b-col
        >
      </div>
      <div v-for="(comment, index) in adData.ad.comments.data" :key="index">
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                blank
                blank-color="#ccc"
                width="64"
                alt="placeholder"
              ></b-img>
            </template>
            <icons-report />
            <router-link
              :to="{
                name: 'user-profile',
                params: { id: `{{ comment.user.id }}` },
              }"
            >
              <span
                class="mt-0 h5 secondaryColor hoverButton"
                :style="
                  comment.user.id == adData.ad.user.id
                    ? 'background-color:#fc7843; border-radius: 15px 50px; '
                    : ''
                "
              >
                {{ comment.user.name }}
                <b-badge
                  pill
                  class="secondaryBackgroundColor"
                  v-if="comment.user.id == adData.ad.user.id"
                  :style="
                    comment.user.id == adData.ad.user.id
                      ? 'border-radius: 15px 50px; '
                      : ''
                  "
                  >OWNER</b-badge
                >
              </span>
            </router-link>

            <p>
              <i class="fas fa-clock generalColorBrown" aria-hidden="true" />
              <span style="font-size:12px;"> {{ comment.created_at }}</span>
            </p>
            <p>
              {{ comment.body }}
            </p>
          </b-media>
        </b-card>
        <br />
      </div>
    </b-container>
  </div>
</template>

<script>
import Comment from "../graphql/mutations/comment.gql";
import { mapGetters } from "vuex";
export default {
  props: ["adData", "routeParam"],
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    addComment() {
      if (this.comment == "") {
        return;
      }
      this.$apollo
        .mutate({
          mutation: Comment,
          variables: {
            body: this.comment,
            userId: this.user.id,
            adId: this.$props.routeParam,
          },
        })
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          this.$emit("userComment", data);
          console.log(data);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
  },
};
</script>
<style scoped>
#comment {
  background-color: #f5f5f5;
  border: 1px solid #e4e7f5;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 100px;
  width: 100%;
}

.comment-div {
  width: 100%;
}
.icon {
  position: absolute;
  left: 90%;
}
</style>
