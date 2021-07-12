<template>
  <div class="messages-index">
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

    <!-- Create Message Form -->
    <!-- <form v-on:submit.prevent="submit()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Message</label>
        <textarea v-model="newMessageBody" cols="50" rows="5"></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form> -->
    <!-- End Create Message Form -->

    <!-- List Messages -->
    <!-- <div v-for="message in messages" v-bind:key="message.id">
      <p>Created At {{ message.created_at }}</p>
      <p>{{ message.body }}</p>
    </div> -->
    <!-- end list messages -->

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
                    <!-- Begin Messages search -->
                    <!-- <div
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
                    </div> -->
                    <!-- End messages search -->

                    <!-- Begin Conversation loop -->
                    <div class="osahan-chat-list">
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
                        <div class="dropdown-list-image mr-3">
                          <img
                            class="rounded-circle"
                            src="/img/p9.png"
                            alt=""
                          />
                        </div>
                        <div class="font-weight-bold mr-1 overflow-hidden">
                          <div>
                            <div
                              v-if="currentUserId == conversation.receiver.id"
                              class="text-truncate"
                            >
                              {{ conversation.sender.first_name }}
                              {{ conversation.sender.last_name }}
                            </div>
                            <div v-else class="text-truncate">
                              {{ conversation.receiver.first_name }}
                              {{ conversation.receiver.last_name }}
                            </div>
                          </div>
                          <div
                            class="
                              small
                              text-truncate
                              overflow-hidden
                              text-black-50
                            "
                          >
                            <i class="feather-check text-primary"></i>
                            {{ conversation.last_message | truncate(15) }}
                          </div>
                        </div>
                        <span class="ml-auto mb-auto">
                          <div class="text-right text-muted pt-1 small">
                            <!-- {{conversation}} -->
                          </div>
                        </span>
                      </div>
                      <!-- End conversation loop -->
                    </div>
                  </div>
                </div>

                <!-- Begin Messages center column -->
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
                      <div class="text-truncate">Carl Jenkins</div>
                      <div
                        class="
                          small
                          text-truncate
                          overflow-hidden
                          text-black-50
                        "
                      >
                        Askbootstap.com - Become a Product Manager with super
                        power
                      </div>
                    </div>
                    <span class="ml-auto">
                      <button
                        type="button"
                        class="btn btn-light btn-sm rounded"
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                  <div
                    class="
                      osahan-chat-box
                      p-3
                      border-top border-bottom
                      bg-light
                    "
                  >
                    <div class="text-center my-3">
                      <span class="px-3 py-2 small bg-white shadow-sm rounded"
                        >DEC 21, 2020</span
                      >
                    </div>
                    <!-- Begin first message -->
                    <div class="d-flex align-items-center osahan-post-header">
                      <div class="dropdown-list-image mr-3 mb-auto">
                        <img class="rounded-circle" src="img/p1.png" alt="" />
                      </div>
                      <div class="mr-1">
                        <div class="text-truncate h6 mb-3">Carl Jenkins</div>
                        <p>Hi Marie</p>
                        <p>
                          welcome to Live Chat! My name is Jason. How can I help
                          you today?
                          <a href="#">iamosahan@gmail.com</a>
                        </p>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="text-right text-muted pt-1 small">
                          00:21PM
                        </div>
                      </span>
                    </div>
                    <!-- end first message  -->

                    <!-- begin extra messages -->
                    <!-- <div class="text-center my-3">
                      <span class="px-3 py-2 small bg-white shadow-sm rounded"
                        >DEC 22, 2020</span
                      >
                    </div> -->
                    <!-- <div class="d-flex align-items-center osahan-post-header">
                      <div class="dropdown-list-image mr-3 mb-auto">
                        <img class="rounded-circle" src="img/p8.png" alt="" />
                      </div>
                      <div class="mr-1">
                        <div class="text-truncate h6 mb-3">Jack P. Angulo</div>
                        <p>
                          Hi, I wanted to check my order status. My order number
                          is 0009483021 😀
                        </p>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="text-right text-muted pt-1 small">
                          00:21PM
                        </div>
                      </span>
                    </div> -->
                    <!-- <div class="text-center my-3">
                      <span class="px-3 py-2 small bg-white shadow-sm rounded"
                        >DEC 23, 2020</span
                      >
                    </div> -->
                    <!-- <div class="d-flex align-items-center osahan-post-header">
                      <div class="dropdown-list-image mr-3 mb-auto">
                        <img class="rounded-circle" src="img/p1.png" alt="" />
                      </div>
                      <div class="mr-1">
                        <div class="text-truncate h6 mb-3">Carl Jenkins</div>
                        <p>Is there anything else that I can do for you?</p>
                        <p>
                          wI understand your concern… I wouldn’t want my child’s
                          gift to arrive late either. It looks like your order
                          is set to arrive in 2 business days, so it should
                          arrive by Friday, just in time!
                        </p>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="text-right text-muted pt-1 small">
                          00:21PM
                        </div>
                      </span>
                    </div>
                    <div class="text-center my-3">
                      <span class="px-3 py-2 small bg-white shadow-sm rounded"
                        >DEC 24, 2020</span
                      >
                    </div>
                    <div class="d-flex align-items-center osahan-post-header">
                      <div class="dropdown-list-image mr-3 mb-auto">
                        <img class="rounded-circle" src="img/p8.png" alt="" />
                      </div>
                      <div class="mr-1">
                        <div class="text-truncate h6 mb-3">Jack P. Angulo</div>
                        <p>
                          Great, thank you! Yes, I also wanted to make sure I
                          entered the right shipping address. My address is
                          12390 Mulberry Ln, Coral Springs, FL 33067. Is that
                          where it’s being shipped to?
                        </p>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="text-right text-muted pt-1 small">
                          00:21PM
                        </div>
                      </span>
                    </div> -->
                    <!-- end extra messages -->
                  </div>
                  <div class="w-100 border-top border-bottom">
                    <textarea
                      placeholder="Write a message…"
                      class="form-control border-0 p-3 shadow-none"
                      rows="2"
                    ></textarea>
                  </div>
                  <div class="p-3 d-flex align-items-center">
                    <div class="overflow-hidden">
                      <button
                        type="button"
                        class="btn btn-light btn-sm rounded"
                      >
                        <i class="feather-image"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-light btn-sm rounded"
                      >
                        <i class="feather-paperclip"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-light btn-sm rounded"
                      >
                        <i class="feather-camera"></i>
                      </button>
                    </div>
                    <span class="ml-auto">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm rounded"
                      >
                        <i class="feather-send"></i> Send
                      </button>
                    </span>
                  </div>
                </div>
                <!-- End messages center column -->
              </div>
            </div>
          </main>

          <!-- Begin Right column -->
          <!-- <aside class="col col-xl-3 order-xl-2 col-lg-12 order-lg-2 col-12">
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
          </aside> -->
          <!-- End right column -->
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import ActionCable from "actioncable";

export default {
  data: function () {
    return {
      errors: [],
      messages: [],
      conversations: [],
      singleConversation: {},
      newMessageBody: "",
      currentUserId: localStorage.getItem("user_id"),
    };
  },

  created: function () {
    // Grab messages
    axios.get("/messages").then((response) => {
      this.messages = response.data;
      console.log(this.messages);
    });
    // End grab messages

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
        this.messages.unshift(data); // update the messages in real time
      },
    });

    // Grab conversations
    axios
      .get("/conversations")
      .then((response) => {
        // console.log(response.data);
        this.conversations = response.data;
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
      });
    // End grab conversations
  },

  methods: {
    submit: function () {
      var params = {
        body: this.newMessageBody,
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

    conversationShow: function () {
      axios
        .get(`/conversations/${this.$route.params.id}`)
        .then((response) => {
          console.log("Conversations Show", response.data);
          this.singleConversation = response.data;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
