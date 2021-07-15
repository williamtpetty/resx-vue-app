<template>
  <div class="users-show">
    <!-- Begin Header -->
    <!-- <div class="py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">ResX</span> Your Profile
            </h1>
          </div>
        </div>
      </div>
    </div> -->
    <!-- End Header -->

    <div class="py-4 bg-light bg-gradient">
      <div class="container">
        <div class="row">
          <!-- Begin Left Hand column -->
          <aside class="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
            <!-- Begin Basic Info card w/ picture -->
            <div
              class="
                box
                mb-3
                shadow-sm
                border
                rounded
                bg-white
                profile-box
                text-center
              "
            >
              <div class="py-4 px-3 border-bottom">
                <img
                  :src="`${user.image_url}`"
                  class="img-fluid mt-2 rounded-circle"
                  alt="Responsive image"
                />
                <h5 class="font-weight-bold text-dark mb-1 mt-4">
                  {{ user.first_name }} {{ user.last_name }}
                </h5>
                <router-link
                  v-if="`${user.id}` === `${currentUserId}`"
                  :to="`/users/${user.id}/edit`"
                  class="btn btn-outline-primary pl-4 pr-4 mb-1"
                  >Edit Your Info</router-link
                ><router-link
                  v-if="
                    `${user.host}` === 'true' &&
                    `${user.id}` === `${currentUserId}`
                  "
                  class="btn btn-outline-primary pl-4 pr-4"
                  to="/listings/new"
                  >New Listing</router-link
                >
              </div>
              <!-- if/else  -->
              <div v-if="`${user.host}` === 'true'" class="d-flex">
                <div class="col-6 border-right p-3">
                  <h6 class="font-weight-bold text-dark mb-1">Host</h6>
                  <p class="mb-0 text-black-50 small">Confirmed</p>
                </div>
                <div class="col-6 p-3">
                  <h6 class="font-weight-bold text-dark mb-1">
                    {{ listings.length }}
                  </h6>
                  <p class="mb-0 text-black-50 small">Listings</p>
                </div>
              </div>
              <div v-else>
                <div class="row border-right p-3 d-flex justify-content-center">
                  <p class="mb-0 text-black-50 small">User is not a host</p>
                </div>
              </div>
              <!-- if/else -->
              <div class="overflow-hidden border-top">
                <a
                  class="font-weight-bold p-3 d-block"
                  :href="`mailto:${user.email}?subject=Information Requested About Your Properties`"
                >
                  Email {{ user.first_name }}
                </a>
              </div>

              <!-- YOU'LL NEED THIS set to a button that initiates a new convo? findme -->
              <!-- <div class="overflow-hidden border-top">
                <button
                  class="font-weight-bold p-3 d-block"
                  v-on:click="createConversation()"
                >
                  Send {{ user.first_name }} a message
                </button>
              </div> -->
              <!-- YOU'LL NEED THIS -->
            </div>
            <!-- End basic info card w/ picture -->

            <!-- Begin More Info Card -->
            <div class="box shadow-sm border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">More Info</h6>
              </div>
              <div class="box-body">
                <div
                  class="
                    d-flex
                    align-items-center
                    osahan-post-header
                    p-3
                    border-bottom
                    people-list
                  "
                >
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zkljrZpwGv9Z5dpl-uO4jzYUlhPkPHQayA&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">Location</div>
                    <div class="small text-muted">
                      {{ user.city }}, {{ user.state }}
                    </div>
                  </div>
                </div>

                <!-- Extra Slots for Info -->
                <!-- <div
                  class="
                    d-flex
                    align-items-center
                    osahan-post-header
                    p-3
                    border-bottom
                    people-list
                  "
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/l8.png" alt="" />
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">
                      Digital Painting
                      <span class="badge badge-danger ml-1">6</span>
                    </div>
                    <div class="small text-muted">
                      <span class="text-primary">Ask</span> has given an
                      endorsement for this skill
                    </div>
                  </div>
                </div> -->
                <!-- <div
                  class="
                    d-flex
                    align-items-center
                    osahan-post-header
                    p-3
                    people-list
                  "
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="img/l5.png" alt="" />
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">
                      Adobe Photoshop
                      <span class="badge badge-info ml-1">3</span>
                    </div>
                    <div class="small text-muted">
                      <span class="text-primary">Julia Cox</span> has given an
                      endorsement for this skill
                    </div>
                  </div>
                </div> -->
                <!-- End extra Info slots -->
              </div>
            </div>

            <!-- Begin Conversations Card -->
            <div
              v-if="`${user.id}` === `${currentUserId}`"
              class="box shadow-sm border rounded bg-white mb-3"
            >
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Conversations</h6>
              </div>
              <div class="box-body">
                <div
                  v-for="conversation in conversations"
                  v-bind:key="conversation.id"
                  class="
                    d-flex
                    align-items-center
                    osahan-post-header
                    p-3
                    border-bottom
                    people-list
                  "
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="/img/p2.png" alt="" />
                  </div>
                  <router-link :to="`/conversations/${conversation.id}`">
                    <div class="font-weight-bold">
                      <div>
                        {{ conversation.recent_user_name }}
                      </div>
                      <div class="small text-muted">
                        {{ conversation.last_message.body | truncate(25) }}
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- End Conversations card -->

            <!-- Begin Friends/Followers card -->
            <!-- <div class="box shadow-sm border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Eventually Friends/Followers Card</h6>
              </div>
              <div class="box-body p-3">
                <div
                  class="
                    d-flex
                    align-items-center
                    osahan-post-header
                    mb-3
                    people-list
                  "
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="/img/p4.png" alt="" />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold mr-2">
                    <div class="text-truncate">Sophia Lee</div>
                    <div class="small text-gray-500">@Harvard</div>
                  </div>
                  <span class="ml-auto"
                    ><button type="button" class="btn btn-light btn-sm">
                      Connent
                    </button>
                  </span>
                </div>
                <div
                  class="
                    d-flex
                    align-items-center
                    osahan-post-header
                    mb-3
                    people-list
                  "
                >
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="/img/p9.png" alt="" />
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold mr-2">
                    <div class="text-truncate">John Doe</div>
                    <div class="small text-gray-500">Traveler</div>
                  </div>
                  <span class="ml-auto"
                    ><button type="button" class="btn btn-light btn-sm">
                      Connent
                    </button>
                  </span>
                </div>
              </div>
            </div> -->
            <!-- End friends/followers card -->
          </aside>
          <!-- End Left hand Column -->

          <!-- Begin center column -->
          <main
            class="
              col col-xl-6
              order-xl-2
              col-lg-12
              order-lg-2
              col-md-12 col-sm-12 col-12
            "
          >
            <!-- Begin About me -->
            <div class="box shadow-sm border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">About Me</h6>
              </div>
              <div class="box-body p-3">
                <p>
                  {{ user.about_me }}
                </p>
              </div>
            </div>
            <!-- End About me -->

            <!-- Begin Listings -->
            <div
              v-if="`${user.host}` === 'true'"
              class="box shadow-sm border rounded bg-white mb-3"
            >
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Listings</h6>
              </div>
              <!-- Begin listing loop -->
              <div
                class="box-body p-3 border-bottom"
                v-for="listing in listings"
                v-bind:key="listing.id"
              >
                <div class="d-flex align-items-top job-item-header pb-2">
                  <div class="mr-2">
                    <router-link v-bind:to="`/listings/${listing.id}`"
                      ><h6 class="font-weight-bold text-dark mb-0">
                        {{ listing.title }}
                      </h6></router-link
                    >

                    <div class="small text-gray-500">
                      {{ listing.availability }}
                    </div>
                  </div>
                  <img
                    class="img-fluid ml-auto mb-auto"
                    :src="`${listing.images[0].url}`"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  {{ listing.description | truncate(200) }}
                </p>
              </div>
              <!-- End listing loop -->
            </div>
            <!-- End Listings -->

            <!-- Begin Send Message -->

            <form
              v-if="`${this.user.id}` !== `${this.currentUserId}`"
              v-on:submit.prevent="createConversation()"
            >
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
                  <button type="submit" class="btn btn-primary btn-sm rounded">
                    <i class="feather-send"></i> Send
                  </button>
                </span>
              </div>
            </form>

            <!-- End Send Message me -->
          </main>
          <!-- End Center Column -->

          <!-- Begin Right column -->
          <aside class="col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12">
            <!-- Begin Links Card -->
            <div
              class="
                box
                shadow-sm
                mb-3
                rounded
                bg-white
                ads-box
                text-center
                overflow-hidden
              "
            >
              <img
                src="https://images.unsplash.com/photo-1541560052-3744e48ab80b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDM3MTA5NXx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=291.2&q=60"
                class="img-fluid"
                alt="Responsive image"
              />
              <div class="p-3 border-bottom">
                <h6 class="font-weight-bold text-gold">Links</h6>
              </div>
              <div class="p-3" v-for="url in urls" v-bind:key="url.id">
                <a class="text-truncate" :href="`${url.personal_url}`">{{
                  url.personal_url | truncate(25)
                }}</a>
              </div>
            </div>
            <!-- End links card -->

            <!-- Begin Advertisements -->
            <a href="job-profile.html">
              <div class="shadow-sm border rounded bg-white job-item mb-3">
                <div class="d-flex align-items-center p-3 job-item-header">
                  <div class="overflow-hidden mr-2">
                    <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                      Product Director
                    </h6>
                    <div class="text-truncate text-primary">Spotify Inc.</div>
                    <div class="small text-gray-500">
                      <i class="feather-map-pin"></i> India, Punjab
                    </div>
                  </div>
                  <img class="img-fluid ml-auto" src="/img/l3.png" alt="" />
                </div>
                <div
                  class="
                    d-flex
                    align-items-center
                    p-3
                    border-top border-bottom
                    job-item-body
                  "
                >
                  <div class="overlap-rounded-circle">
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p9.png"
                      alt=""
                      data-original-title="Sophia Lee"
                    />
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p10.png"
                      alt=""
                      data-original-title="John Doe"
                    />
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p11.png"
                      alt=""
                      data-original-title="Julia Cox"
                    />
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p10.png"
                      alt=""
                      data-original-title="John Doe"
                    />
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p11.png"
                      alt=""
                      data-original-title="Julia Cox"
                    />
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p12.png"
                      alt=""
                      data-original-title="Robert Cook"
                    />
                  </div>
                  <span class="font-weight-bold text-muted"
                    >18 connections</span
                  >
                </div>
                <div class="p-3 job-item-footer">
                  <small class="text-gray-500"
                    ><i class="feather-clock"></i> Posted 3 Days ago</small
                  >
                </div>
              </div>
            </a>
            <a href="job-profile.html">
              <div class="shadow-sm border rounded bg-white job-item mb-3">
                <div class="d-flex align-items-center p-3 job-item-header">
                  <div class="overflow-hidden mr-2">
                    <h6 class="font-weight-bold text-dark mb-0 text-truncate">
                      .NET Developer
                    </h6>
                    <div class="text-truncate text-primary">Invision</div>
                    <div class="small text-gray-500">
                      <i class="feather-map-pin"></i> London, UK
                    </div>
                  </div>
                  <img class="img-fluid ml-auto" src="/img/l4.png" alt="" />
                </div>
                <div
                  class="
                    d-flex
                    align-items-center
                    p-3
                    border-top border-bottom
                    job-item-body
                  "
                >
                  <div class="overlap-rounded-circle">
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p13.png"
                      alt=""
                      data-original-title="Sophia Lee"
                    />
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p1.png"
                      alt=""
                      data-original-title="John Doe"
                    />
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p2.png"
                      alt=""
                      data-original-title="Julia Cox"
                    />
                    <img
                      class="rounded-circle shadow-sm"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      src="/img/p3.png"
                      alt=""
                      data-original-title="Robert Cook"
                    />
                  </div>
                  <span class="font-weight-bold text-muted"
                    >18 connections</span
                  >
                </div>
                <div class="p-3 job-item-footer">
                  <small class="text-gray-500"
                    ><i class="feather-clock"></i> Posted 3 Days ago</small
                  >
                </div>
              </div>
            </a>
          </aside>
          <!-- End Advertisements -->
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      listings: [],
      conversations: [],
      newMessageBody: "",
      urls: [],
      toggle: false,
      currentUserId: localStorage.getItem("user_id"),
      newConversationId: "",
    };
  },

  created: function () {
    this.showUser();
    this.conversationsIndex();
  },

  methods: {
    showUser: function () {
      axios.get(`/users/${this.$route.params.id}`).then((response) => {
        this.user = response.data;
        this.listings = response.data.listings;
        this.urls = response.data.personal_urls;
        // this.conversations = response.data.conversations;
        console.log(response.data);
      });
    },

    conversationsIndex: function () {
      axios
        .get("/conversations")
        .then((response) => {
          // console.log(response.data);
          this.conversations = response.data;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    // These two methods below are the front end logic for updating the create method on the back end
    // createConversation: function () {
    //   var conversationParams = {
    //     receiver_id: this.user.id,
    //   };
    //   axios
    //     .post(`/conversations`, conversationParams)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.newConversationId = response.data.id;
    //       this.$router.push(`/conversations/${this.newConversationId}`);
    //       setTimeout(function () {
    //         this.createMessage();
    //       }, 1000);
    //     })
    //     .catch((error) => {
    //       this.errors = error.response.data.errors;
    //       console.log(this.errors);
    //     });
    // },

    // createMessage: function () {
    //   var params = {
    //     body: this.newMessageBody,
    //   };
    //   axios
    //     .post("/messages", params)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.newMessageBody = "";
    //     })
    //     .catch((error) => {
    //       this.errors = error.response.data.errors;
    //       console.log(this.errors);
    //     });
    // },
    // End front end logic, comment out the nested axios method below to test again.

    createConversation: function () {
      var conversationParams = {
        receiver_id: this.user.id,
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
