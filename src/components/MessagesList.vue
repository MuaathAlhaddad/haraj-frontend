<template>
  <div>
    <template v-if="loading">
      <div>
        <loading-icon />
      </div>
    </template>
    <template v-else>
      <div ref="scrollToMe">
        <div class="px-4 py-5 chat-box bg-white">
          <div v-for="(message, index) in messages.messages.data" :key="index">
            <div class="media w-50 mb-3" v-if="message.sender.id != user.id">
              <b-img
                blank
                blank-color="#ccc"
                width="64"
                alt="placeholder"
              ></b-img>
              <div class="media-body ml-3">
                <div
                  style="width:300px;    word-wrap: break-word;"
                  class="bg-light rounded py-2 px-3 mb-2"
                >
                  <p class="text-small mb-0 text-muted">
                    {{ message.body }}
                  </p>
                </div>
                <p class="small text-muted">{{ message.created_at }}</p>
              </div>
            </div>

            <div
              class="media w-50 ml-auto mb-3"
              v-if="message.sender.id == user.id"
            >
              <div class="media-body">
                <div
                  style="width:300px;    word-wrap: break-word;"
                  class="rounded py-2 px-3 mb-2 secondaryBackgroundColor"
                >
                  <p class="text-small mb-0 text-white  ">
                    {{ message.body }}
                  </p>
                </div>
                <p class="small text-muted">{{ message.created_at }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Typing area -->
        <div class="bg-light">
          <div class="input-group">
            <input
              type="text"
              v-model="message"
              v-on:keyup.enter="sendMessage"
              placeholder="Type a message"
              aria-describedby="button-addon2"
              class="form-control rounded-0 border-0 py-4 bg-light"
            />
            <div class="input-group-append primaryBackgroundColor">
              <button
                id="button-addon2"
                @click="sendMessage"
                class="btn btn-linkprimary BackgroundColor"
              >
                <i class="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import Messages from "../graphql/queries/Messages.gql";
import LoadingIcon from "./LoadingIcon.vue";
import SendMessage from "../graphql/mutations/sendMessage.gql";
import { mapGetters } from "vuex";

export default {
  components: { LoadingIcon },
  props: ["me", "you"],
  data() {
    return {
      message: "",
      loading: 0,
    };
  },
  methods: {
    sendMessage() {
      if (this.message != "") {
        this.$apollo
          .mutate({
            mutation: SendMessage,
            variables: {
              body: this.message,
              senderId: this.$props.me,
              recipientId: this.$props.you,
            },
          })
          .then((data) => {
            this.$apollo.queries.messages.refetch();
            this.message = "";
            console.log(data);
          })
          .catch((error) => {
            this.error = true;
            console.error(error);
          });
      }
    },
  },
  apollo: {
    messages: {
      query: Messages,
      loadingKey: "loading",
      variables() {
        return {
          me: this.$props.me,
          you: this.$props.you,
        };
      },
      update(data) {
        const el = this.$refs.scrollToMe;

        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }

        return data;
      },
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
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  width: 5px;
  background: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  width: 1em;
  background-color: #ddd;
  outline: 1px solid slategrey;
  border-radius: 1rem;
}

.text-small {
  font-size: 0.9rem;
}

.messages-box,
.chat-box {
  height: 510px;
  overflow-y: scroll;
}

.rounded-lg {
  border-radius: 0.5rem;
}

input::placeholder {
  font-size: 0.9rem;
  color: #999;
}
</style>
