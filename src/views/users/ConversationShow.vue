<template>
  <div class="conversation-show">
    <!-- Create Message and Errors begin -->
    <!-- <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="newMessage()">
      <div class="form-group">
        <label class="mb-1">New Message</label>
        <div class="position-relative">
          <textarea
            rows="5"
            cols="10"
            v-model="newMessageBody"
            class="form-control"
          ></textarea>
        </div>
      </div>
      <button
        class="btn btn-primary btn-block text-uppercase mb-3"
        type="submit"
      >
        Submit
      </button>
    </form> -->
    <!-- Create message and errors end -->

    <!-- messages list -->
    <!-- <div v-for="message in conversation.messages" v-bind:key="message.id">
      <div
        v-if="currentUserId == conversation.receiver_id"
        class="text-truncate"
      >
        {{ message.user.first_name }}
        {{ message.user.last_name }}
      </div>
      <div v-else class="text-truncate">
        {{ message.user.first_name }}
        {{ message.user.last_name }}
      </div>
      {{ message.body }}
    </div> -->
    <!-- end messages list -->
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
    <div class="py-4">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <main
            class="
              col col-xl-9
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
                      <!-- Begin first card -->
                      <div
                        class="
                          p-3
                          d-flex
                          align-items-center
                          border-bottom
                          osahan-post-header
                          overflow-hidden
                        "
                      >
                        <div class="dropdown-list-image mr-3">
                          <img
                            class="rounded-circle"
                            src="/img/p9.png"
                            alt=""
                          />
                        </div>
                        <div class="font-weight-bold mr-1 overflow-hidden">
                          <div class="text-truncate">Ashley Briggs</div>
                          <div
                            class="
                              small
                              text-truncate
                              overflow-hidden
                              text-black-50
                            "
                          >
                            <i class="feather-check text-primary"></i>
                            Pellentesque semper ex diam, at tristique ipsum
                            varius sed. Pellentesque non metus ullamcorper
                          </div>
                        </div>
                        <span class="ml-auto mb-auto">
                          <div class="text-right text-muted pt-1 small">
                            00:21PM
                          </div>
                        </span>
                      </div>
                      <!-- End first card -->
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
                        Discuss your favorite leases
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
                      bg-light
                    "
                  >
                    <!-- Begin first message to loop on -->
                    <!-- Commenting out time for now -->
                    <!-- <div class="text-center my-3">
                      <span
                        class="px-3 py-2 small bg-white shadow-sm rounded"
                        >{{ message.created_at }}</span
                      >
                    </div> -->
                    <!-- End commenting out time for now -->

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
          <aside class="col col-xl-3 order-xl-2 col-lg-12 order-lg-2 col-12">
            <div
              class="box mb-3 shadow-sm border rounded bg-white list-sidebar"
            >
              <div class="box-title p-3">
                <h6 class="m-0">Manage my network</h6>
              </div>
              <ul class="list-group list-group-flush">
                <a href="#">
                  <li
                    class="
                      list-group-item
                      pl-3
                      pr-3
                      d-flex
                      align-items-center
                      text-dark
                    "
                  >
                    <i class="feather-users mr-2 text-dark"></i> Connections
                    <span class="ml-auto font-weight-bold">68</span>
                  </li>
                </a>
                <a href="#">
                  <li
                    class="
                      list-group-item
                      pl-3
                      pr-3
                      d-flex
                      align-items-center
                      text-dark
                    "
                  >
                    <i class="feather-book mr-2 text-dark"></i> Contacts
                    <span class="ml-auto font-weight-bold">869</span>
                  </li>
                </a>
                <a href="#">
                  <li
                    class="
                      list-group-item
                      pl-3
                      pr-3
                      d-flex
                      align-items-center
                      text-dark
                    "
                  >
                    <i class="feather-user-check mr-2 text-dark"></i> People I
                    Follow <span class="ml-auto font-weight-bold">156</span>
                  </li>
                </a>
                <a href="#">
                  <li
                    class="
                      list-group-item
                      pl-3
                      pr-3
                      d-flex
                      align-items-center
                      text-dark
                    "
                  >
                    <i class="feather-message-circle mr-2 text-dark"></i> Groups
                    <span class="ml-auto font-weight-bold">15</span>
                  </li>
                </a>
                <a href="#">
                  <li
                    class="
                      list-group-item
                      pl-3
                      pr-3
                      d-flex
                      align-items-center
                      text-dark
                    "
                  >
                    <i class="feather-clipboard mr-2 text-dark"></i> Page
                    <span class="ml-auto font-weight-bold">3</span>
                  </li>
                </a>
                <a href="#">
                  <li
                    class="
                      list-group-item
                      pl-3
                      pr-3
                      d-flex
                      align-items-center
                      text-dark
                    "
                  >
                    <i class="feather-tag mr-2 text-dark"></i> Hashtag
                    <span class="ml-auto font-weight-bold">8</span>
                  </li>
                </a>
              </ul>
            </div>
            <div
              class="
                box
                shadow-sm
                mb-3
                border
                rounded
                bg-white
                ads-box
                text-center
              "
            >
              <div class="image-overlap-2 pt-4">
                <img
                  src="img/l4.png"
                  class="img-fluid rounded-circle shadow-sm"
                  alt="Responsive image"
                />
                <img
                  src="img/user.png"
                  class="img-fluid rounded-circle shadow-sm"
                  alt="Responsive image"
                />
              </div>
              <div class="p-3 border-bottom">
                <h6 class="text-dark">
                  Gurdeep, grow your career by following
                  <span class="font-weight-bold"> Wrapbootstrap</span>
                </h6>
                <p class="mb-0 text-muted">Stay up-to industry trends!</p>
              </div>
              <div class="p-3">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm pl-4 pr-4"
                >
                  FOLLOW
                </button>
              </div>
            </div>
          </aside>
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
      conversation: {},
      newMessageBody: "",
      currentUserId: localStorage.getItem("user_id"),
    };
  },

  created: function () {
    // Grab conversation
    axios
      .get(`/conversations/${this.$route.params.id}`)
      .then((response) => {
        this.conversation = response.data;
        this.conversation.messages.sort((a, b) => {
          if (a.created_at > b.created_at) {
            return -1;
          } else {
            return 1;
          }
        });
        console.log(this.conversation);
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
      });
    // End grab conversation

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
        // console.log("Data from MessagesChannel:", data);
        this.conversation.messages.unshift(data); // update the messages in real time
      },
    });
    // End messages push
  },

  methods: {
    newMessage: function () {
      var params = {
        user_id: this.currentUserID,
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
        });
    },
  },
};
</script>
