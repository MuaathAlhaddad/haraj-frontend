<template>
  <div>
    <template v-if="loading">
      <div>
        <loading-icon />
      </div>
    </template>

    <template v-else>
      <b-container>
        <b-card class="my-3 cardBackgrond">
          <div>
            <div class="container  py-5 my-5 px-4">
              <div class="row rounded-lg overflow-hidden shadow  ">
                <!-- Users box-->
                <div class="col-5 px-0">
                  <div class="bg-white ">
                    <div class="bg-gray px-4 py-2 bg-light">
                      <p class="h5 mb-0 py-1 secondaryColor">Recent</p>
                    </div>

                    <div class="messages-box ">
                      <div class="list-group rounded-0">
                        <div v-for="(message, index) in senders" :key="index">
                          <div v-if="user.id != message.sender.id">
                            <b-button
                              class="bg-light list-group-item list-group-item-action active text-white rounded-0"
                              @click="openChat(message.sender.id)"
                            >
                              <div class="media ">
                                <b-img
                                  blank
                                  blank-color="#ccc"
                                  width="64"
                                  alt="placeholder"
                                ></b-img>
                                <div class="media-body  ml-4">
                                  <div
                                    class="d-flex align-items-center justify-content-between mb-1"
                                  >
                                    <h6 class="mb-0 secondaryColor">
                                      {{ message.sender.name }}
                                    </h6>
                                    <b-badge
                                      class="primaryBackgroundColor"
                                      scale="0.1"
                                      variant="dark"
                                      v-if="message.seen_at == null"
                                    >
                                      New message
                                    </b-badge>
                                  </div>
                                </div>
                              </div>
                            </b-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Chat Box-->
                <div class="col-7 px-0">
                  <messages-list
                    :me="user.id"
                    :you="you"
                    v-if="switchChatting"
                  />
                </div>
              </div>
            </div>
          </div> </b-card
      ></b-container>
    </template>
  </div>
</template>

<script>
import LoadingIcon from "../components/LoadingIcon.vue";
import MessagesList from "../components/MessagesList.vue";
import Senders from "../graphql/queries/inboxSenders.gql";
import { mapGetters } from "vuex";
export default {
  components: { LoadingIcon, MessagesList },
  data() {
    return {
      loading: 0,
      senders: [],
      switchChatting: false,
      you: null,
    };
  },
  methods: {
    openChat(you) {
      this.you = you;
      this.switchChatting = true;
    },
  },
  apollo: {
    senders: {
      query: Senders,
      loadingKey: "loading",
      variables() {
        return {
          userId: this.user.id,
        };
      },

      update(data) {
        const uniqueElementsBy = (arr, fn) =>
          arr.reduce((acc, v) => {
            if (!acc.some((x) => fn(v, x))) acc.push(v);
            return acc;
          }, []);
        const senders = uniqueElementsBy(
          data.interacted_users.data,
          (a, b) => a.sender.id == b.sender.id 
        );
        return senders;
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
.list-group-item.active {
  border-color: #ffe7dd;
}
input::placeholder {
  font-size: 0.9rem;
  color: #999;
}
.cardBackgrond {
  background-color: rgba(255, 231, 214, 0.603);
}
</style>
