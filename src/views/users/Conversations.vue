<template>
  <div class="conversations">
    <!-- Begin Header -->
    <div class="py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">ResX</span> Messages
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
    <div class="py-4 bg-light bg-gradient">
      <div class="d-flex justify-content-center container">
        <div class="row">
          <!-- Main Content -->
          <main
            class="
              col
              order-xl-2
              col-lg-12
              order-lg-1
              col-md-12 col-sm-12 col-12
            "
          >
            <div class="box shadow-sm rounded bg-white mb-3 osahan-chat">
              <h5 class="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">Messaging</h5>
              <div class="row m-0">
                <div class="border-right col-lg-5 col-xl-4 px-0">
                  <div class="osahan-chat-left">
                    <div
                      class="
                        position-relative
                        icon-form-control
                        p-3
                        border-bottom
                      "
                    >
                      <!-- <i class="feather-search position-absolute"></i>
                      <input
                        placeholder="Search messages"
                        type="text"
                        class="form-control"
                      /> -->
                    </div>
                    <div class="osahan-chat-list">
                      <!-- Begin lefthand messages section -->
                      <div
                        v-for="conversation in conversations"
                        v-bind:key="conversation.id"
                        class="
                          p-3
                          d-flex
                          align-items-center
                          border-bottom
                          osahan-post-header
                          overflow-hidden
                        "
                      >
                        <router-link :to="`/conversations/${conversation.id}`">
                          <!-- <div class="dropdown-list-image mr-3">
                            <img
                              class="rounded-circle"
                              src="/img/p9.png"
                              alt=""
                            />
                          </div> -->
                          <div class="font-weight-bold mr-1 overflow-hidden">
                            <div class="text-truncate">
                              {{ conversation.recent_user_name }}
                            </div>
                            <div
                              class="
                                small
                                text-truncate
                                overflow-hidden
                                text-black-50
                              "
                            >
                              <i class="text-primary"></i>
                              {{ conversation.last_message.body }}
                            </div>
                          </div>
                        </router-link>
                      </div>
                      <!-- End lefthand messages section-->
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-xl-8 px-0">
                  <div
                    class="
                      p-3
                      d-flex
                      align-items-center
                      border-bottom
                      osahan-post-header
                    "
                  >
                    <div class="font-weight-bold mr-1 overflow-hidden">
                      <div class="text-truncate">Conversation</div>
                      <div
                        class="
                          small
                          text-truncate
                          overflow-hidden
                          text-black-50
                        "
                      >
                        Discuss your favorite spots
                      </div>
                    </div>
                    <span class="ml-auto">
                      <button class="dropdown-item" type="button">
                        <i class="feather-trash"></i> Delete
                      </button>
                    </span>
                  </div>
                  <!-- Begin messages card -->
                  <div
                    class="
                      osahan-chat-box
                      p-3
                      border-top border-bottom
                      bg-white
                    "
                  >
                    <!-- Begin first message to loop on -->

                    <div
                      v-for="message in conversation.messages"
                      v-bind:key="message.id"
                      class="d-flex align-items-center osahan-post-header"
                    >
                      <div class="dropdown-list-image mr-3 mb-3">
                        <img
                          class="rounded-circle"
                          :src="`${message.user.image_url}`"
                          alt=""
                        />
                      </div>
                      <div class="mr-1">
                        <div
                          class="h6 mb-4"
                          v-if="currentUserId == conversation.receiver_id"
                        >
                          {{ message.user.first_name }}
                          {{ message.user.last_name }}
                        </div>
                        <div v-else class="text-truncate">
                          {{ message.user.first_name }}
                          {{ message.user.last_name }}
                        </div>
                        <p>
                          {{ message.body }}
                        </p>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="text-right text-muted pt-1 small">
                          {{ message.created_at }}
                        </div>
                      </span>
                    </div>

                    <!-- end first message to loop -->
                  </div>
                  <!-- End Messages card -->
                  <!-- Begin New Message section -->
                  <form v-on:submit.prevent="createConversation()">
                    <div class="w-100 border-top border-bottom">
                      <textarea
                        placeholder="Write a message…"
                        class="form-control border-0 p-3 shadow-none"
                        rows="2"
                        v-model="newMessageBody"
                      ></textarea>
                    </div>
                    <div class="p-3 d-flex align-items-center">
                      <div class="overflow-hidden"></div>
                      <span class="ml-auto">
                        <button
                          type="submit"
                          class="btn btn-primary btn-sm rounded"
                        >
                          <i class="feather-send"></i> Send
                        </button>
                      </span>
                    </div>
                  </form>
                  <!-- End new message section -->
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import ActionCable from "actioncable";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],

  data: function () {
    return {
      errors: [],
      conversations: [],
      conversation: [],
      newMessageBody: "",
      currentUserId: localStorage.getItem("user_id"),
    };
  },

  created: function () {
    axios.get(`/conversations`).then((response) => {
      this.conversations = response.data;
      console.log(this.conversations);
    });

    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    cable.subscriptions.create("MessagesChannel", {
      connected: () => {
        // Called when the subscription is ready for use on the server
        console.log("Connected to MessagesChannel");
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: (data) => {
        // Called when there's incoming data on the websocket for this channel
        console.log("Data from MessagesChannel:", data);
        this.conversation.messages.push(data); // update the messages in real time
        this.conversations.messages.push(data); // update the messages in real time
      },
    });
  },

  methods: {
    createConversation: function () {
      var conversationParams = {
        sender_id: this.currentUserId,
        receiver_id: this.currentUserId,
      };
      axios
        .post(`/conversations`, conversationParams)
        .then((response) => {
          console.log(response.data);
          this.newConversationId = response.data.id;
          var params = {
            user_id: this.currentUserId,
            body: this.newMessageBody,
            conversation_id: this.newConversationId,
          };
          axios
            .post("/messages", params)
            .then((response) => {
              console.log(response.data);
              this.newMessageBody = "";
            })
            .catch((error) => {
              this.errors = error.response.data.errors;
              console.log(this.errors);
            });
          this.$router.push(`/conversations/${this.newConversationId}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>
