<template>
  <div class="conversation-show">
    <!-- Begin Header -->
    <div class="py-5" style="background-color: #b0c4ed">
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
    <div class="py-4 bg-light bg-gradient vh-100">
      <div class="container">
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
                      <i class="feather-search position-absolute"></i>
                      <input
                        placeholder="Search messages"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div class="osahan-chat-list">
                      <!-- Begin lefthand conversations loop -->
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
                      <!-- End lefthand conversations section -->
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
                      <button
                        v-on:click="destroyConversation(conversation)"
                        class="dropdown-item"
                        type="button"
                      >
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
                          class="text-truncate"
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
                  <form v-on:submit.prevent="newMessage()">
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
      conversation: {},
      newMessageBody: "",
      currentUserId: localStorage.getItem("user_id"),
    };
  },

  created: function () {
    axios.get(`/conversations`).then((response) => {
      this.conversations = response.data;
      console.log(this.conversations);
    });

    axios
      .get(`/conversations/${this.$route.params.id}`)
      .then((response) => {
        this.conversation = response.data;
        console.log(this.conversation);
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
        console.log(this.errors);
      });

    // Messages Push
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
      },
    });
  },

  methods: {
    newMessage: function () {
      var params = {
        user_id: this.currentUserId,
        body: this.newMessageBody,
        conversation_id: this.conversation.id,
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
    },

    destroyConversation: function (deleteThisConvo) {
      console.log(deleteThisConvo.id);
      if (confirm("Are you sure you want to delete this conversation?")) {
        axios
          .delete(`/conversations/${deleteThisConvo.id}`)
          .then((response) => {
            var conversationIndex = this.conversations.indexOf(deleteThisConvo);
            this.conversations.splice(conversationIndex, 1);
            console.log(response.data);
            this.$router.push("/conversations");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            console.log(this.errors);
          });
      }
    },
  },
};
</script>
