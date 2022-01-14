<template>
  <div>
    <b-navbar class="generalBackgroundOrange" toggleable="lg" type="light">
      <b-navbar-brand class="d-lg-none"> </b-navbar-brand>
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
      <b-collapse id="collapse-area" is-nav>
        <b-navbar-nav class="pl-5">
          <b-nav-item>
            <router-link
              :to="{ path: `/` }"
              onClick="window.location.reload();"
            >
              <div class="bg-light">
                <img v-bind:src="logo" width="100px" />
              </div>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="!user">
          <b-nav-item>
            <router-link :to="{ path: `/login` }">
              <b-button class="primaryBackgroundColor">Login</b-button>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ path: `/signup` }">
              <b-button class="primaryBackgroundColor">Sign Up</b-button>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="d-md-block mx-auto" v-if="isAuth">
          <b-nav-text variant="light">
            <b-nav-item-dropdown no-caret>
              <template #button-content>
                <b-button variant="light" class="mr-3 hoverButton">
                  <span class="secondaryColor mr-1 h5">{{ user.name }} </span>
                  <b-icon
                    icon="person-circle"
                    class="primaryColor "
                    scale="1.0"
                    aria-hidden="true"
                  ></b-icon>
                </b-button>
              </template>
              <b-dropdown-item>
                <router-link
                  :to="{ path: `/user/${user.id}` }"
                  onClick="window.location.reload();"
                >
                  <div class="bg-light">
                    <span class="secondaryColor h6">My profile</span>
                  </div>
                </router-link>
              </b-dropdown-item>
              <b-dropdown-item @click="logoutUser()">
                <span class="secondaryColor h6">Logout</span>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-nav-text>

          <b-nav-text>
            <b-button variant="light hoverButton" class="mr-3">
              <router-link
                :to="{ path: `/user/${user.id}` }"
                onClick="window.location.reload();"
              >
                <span class="secondaryColor mr-1 h5">Ads </span>
              </router-link>
              <b-icon
                icon="archive-fill"
                class="primaryColor"
                scale="1.0"
                aria-hidden="true"
              ></b-icon>
            </b-button>
            <b-button
              variant="light hoverButton"
              class="mr-3"
              v-if="loading == false"
              @click="$bvToast.show('example-toast')"
            >
              <span class="secondaryColor mr-2 h5">Inbox</span>
              <b-badge
                animation="fade"
                class="messageNoti secondaryBackgroundColor"
                scale="0.1"
                variant="dark"
                v-if="countMessages + countComments + countReviews > 0"
              >
                {{ countMessages + countComments + countReviews }}
              </b-badge>
              <b-icon
                icon="inboxes-fill"
                class="primaryColor"
                scale="1.5"
                :animation="parseInt(countMessages) >= 1 ? 'fade' : ''"
                aria-hidden="true"
              ></b-icon>
            </b-button>
          </b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav v-if="isAuth">
          <router-link :to="{ path: `/create-ad` }">
            <b-button
              class="add-post mr-5 primaryBackgroundColor hoverButton"
              type="submit"
            >
              Add Post
            </b-button>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-toast
      id="example-toast"
      class="toastStyle"
      title="New Notifications"
      static
      no-auto-hide
      v-if="user"
    >
      <router-link :to="{ path: `/inbox` }">
        <span class="secondaryColor mr-1 "
          >You have {{ countMessages }} new messages
          <b-badge class="messageNoti" scale="0.1" variant="dark">> </b-badge>
        </span>
      </router-link>
      <br />
      <router-link :to="{ path: `/seller/${user.id}` }">
        <span class="secondaryColor mr-1 " @click="markReviewAsRead"
          >You have {{ countReviews }} new reviews
          <b-badge class="messageNoti" scale="0.1" variant="dark">> </b-badge>
        </span>
      </router-link>
      <br />

      <router-link :to="{ path: `/seller/${user.id}` }">
        <span class="secondaryColor mr-1 " @click="markCommentAsRead"
          >You have {{ countComments }} new comments
          <b-badge class="messageNoti" scale="0.1" variant="dark">> </b-badge>
        </span>
      </router-link>
    </b-toast>
  </div>
</template>
<script>
import Logo from "../assets/logo.png";
import { mapGetters, mapActions } from "vuex";
import MessageNotification from "../graphql/queries/notification/messageNotification.gql";
import CommentNotification from "../graphql/queries/notification/commentsNoti.gql";
import ReviewNotification from "../graphql/queries/notification/reviewsNoti.gql";
import MarkCommentAsRead from "../graphql/mutations/markCommentAsSeen.gql";
import MarkReviewAsRead from "../graphql/mutations/markReviewAsSeen.gql";
export default {
  data() {
    return {
      logo: Logo,
      loading: 0,
    };
  },
  apollo: {
    countMessages: {
      query: MessageNotification,
      loadingKey: "loading",
      variables() {
        return {
          userId: this.user.id,
        };
      },
      skip() {
        if (this.user != null) {
          return false;
        }
      },
      update(data) {
        console.log(data);
        return data.messages.data.length;
      },
    },
    countComments: {
      query: CommentNotification,
      loadingKey: "loading",
      variables() {
        return {
          userId: this.user.id,
        };
      },
      skip() {
        if (this.user != null) {
          return false;
        }
      },

      update(data) {
        let numberOfNullSeenAt = [];
        for (let i = 0; i < data.user.comments.data.length; i++) {
          if (data.user.comments.data[i].seen_at == null) {
            numberOfNullSeenAt.push(data.user.comments.data[i]);
          }
        }

        return numberOfNullSeenAt.length;
      },
    },
    countReviews: {
      query: ReviewNotification,
      loadingKey: "loading",
      variables() {
        return {
          userId: this.user.id,
        };
      },
      skip() {
        if (this.user != null) {
          return false;
        }
      },

      update(data) {
        let numberOfNullSeenAt = [];
        for (let i = 0; i < data.user.reviews.data.length; i++) {
          if (data.user.reviews.data[i].seen_at == null) {
            numberOfNullSeenAt.push(data.user.reviews.data[i]);
          }
        }
        return numberOfNullSeenAt.length;
      },
    },
  },
  methods: {
    ...mapActions({
      logout: "Auth/logout",
    }),
    logoutUser() {
      this.logout();
    },
    markCommentAsRead() {
      this.$apollo
        .mutate({
          mutation: MarkCommentAsRead,
          variables: {
            user_id: parseInt(this.user.id),
          },
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    markReviewAsRead() {
      this.$apollo
        .mutate({
          mutation: MarkReviewAsRead,
          variables: {
            user_id: parseInt(this.user.id),
          },
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    ...mapGetters({
      isAuth: "Auth/isAuth",
      user: "Auth/user",
    }),
  },
};
</script>
<style scoped>
.add-post {
  width: 130px !important;
}

.messageNoti {
  position: relatives;
  left: 20px;
  background-color: #ee9b7a;
}
.toastStyle {
  position: absolute;
  left: 60%;
  top: 100px;
}
</style>
