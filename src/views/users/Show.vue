<template>
  <div class="users-show">
    <!-- <div>
      <img :src="`${user.image_url}`" alt="" />
      <h2>{{ user.first_name }} {{ user.last_name }}</h2>
      <p>{{ user.about_me }}</p>
      <a :href="`mailto:${user.email}`">Email this Host</a>
      <p>{{ user.city }}, {{ user.state }}</p>

      <router-link
        v-if="`${user.id}` === `${currentUserId}`"
        :to="`/users/${user.id}/edit`"
        tag="button"
        >Edit User Info</router-link
      >

      <br />
      <router-link
        v-if="`${user.host}` === 'true' && `${user.id}` === `${currentUserId}`"
        to="/listings/new"
        tag="button"
        >New Listing</router-link
      >
      <br />

      <div>
        <button v-if="`${user.host}` === 'true'" v-on:click="toggle = !toggle">
          Show All Listings Information
        </button>
        <div v-for="listing in listings" v-bind:key="listing.id">
          <h3>{{ listing.title }}</h3>
          <div v-show="toggle">
            <p>{{ listing.address }}</p>
            <p>{{ listing.availability }}</p>
            <p>{{ listing.description }}</p>
            <router-link v-bind:to="`/listings/${listing.id}`" tag="button"
              >Full Listing</router-link
            >
            <br />
            <div v-if="`${user.id}` === `${currentUserId}`">
              <router-link
                v-bind:to="`/listings/${listing.id}/edit`"
                tag="button"
                >Edit Listing</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div> -->

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

    <div class="py-4">
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
                  :href="`mailto:${user.email}`"
                >
                  Email {{ user.first_name }}
                </a>
              </div>
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
            <!-- End more info card -->
            <!-- Begin Friends/Followers card -->
            <div class="box shadow-sm border rounded bg-white mb-3">
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
            </div>
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
              <!-- listing -->
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

              <!-- <div class="box-body p-3 border-bottom">
                <div class="d-flex align-items-top job-item-header pb-2">
                  <div class="mr-2">
                    <h6 class="font-weight-bold text-dark mb-0">
                      Cloud Software Engineer
                    </h6>
                    <div class="text-truncate text-primary">Spotify Inc.</div>
                    <div class="small text-gray-500">
                      Oct 2020 - Present (4 year 7 month)
                    </div>
                  </div>
                  <img
                    class="img-fluid ml-auto mb-auto"
                    src="img/l6.png"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  Find the most qualified people in the most unexpected places.
                  Information for..
                </p>
              </div>
              <div class="box-body p-3">
                <div class="d-flex align-items-top job-item-header pb-2">
                  <div class="mr-2">
                    <h6 class="font-weight-bold text-dark mb-0">
                      UI/UX designer
                    </h6>
                    <div class="text-truncate text-primary">Behance</div>
                    <div class="small text-gray-500">
                      Oct 2020 - Present (4 year 7 month)
                    </div>
                  </div>
                  <img
                    class="img-fluid ml-auto mb-auto"
                    src="img/l2.png"
                    alt=""
                  />
                </div>
                <p class="mb-0">
                  Wualified people in the most unexpected places. Information
                  for applicants to consider when applying for local positions.
                  The largest community on the web to find and list jobs that
                  aren't restricted by commutes or a specific location.
                </p>
              </div> -->
            </div>
            <!-- End Listings -->
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
      message: "User Show Page",
      user: {},
      listings: [],
      urls: [],
      toggle: false,
      currentUserId: localStorage.getItem("user_id"),
    };
  },

  created: function () {
    this.showUser();
  },

  methods: {
    showUser: function () {
      axios.get(`/users/${this.$route.params.id}`).then((response) => {
        this.user = response.data;
        this.listings = response.data.listings;
        this.urls = response.data.personal_urls;
        console.log(response.data);
      });
    },
  },
};
</script>
