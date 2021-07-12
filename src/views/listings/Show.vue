<template>
  <div class="listings-show">
    <!-- 
    <div>
      <strong>Listing User:</strong>
      <p>
        <router-link v-bind:to="`/users/${user.id}`">
          {{ user.first_name }}
          {{ user.last_name }}</router-link
        >
      </p>
      <a
        :href="`mailto:${user.email}?subject=Interested in: ${listing.address}`"
        >Email Host to Reserve Date!</a
      >
    </div>
    <router-link
      v-if="`${this.currentUserId}` == `${user.id}`"
      v-bind:to="`/listings/${listing.id}/edit`"
      tag="button"
      >Edit Listing</router-link
    > -->
    <!-- <div>
      <h2>{{ listing.title }}</h2>
      <div v-for="image in images" v-bind:key="image.id">
        <img :src="image.url" alt="" />
      </div>
      <p>{{ listing.description }}</p>
      <p><strong>Address: </strong> {{ listing.address }}</p>
      <p><strong>Availability: </strong>{{ listing.availability }}</p>
      <p><strong>Price: </strong>{{ listing.price }}</p>
    </div> -->

    <!-- Begin Header -->
    <div class="py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">ResX</span> Listing Details
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
    <div class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8">
            <!-- Begin thumbnail card -->
            <main
              class="
                blog-card
                padding-card
                box
                shadow-sm
                rounded
                bg-white
                mb-3
                border-0
              "
            >
              <div
                class="
                  box
                  shadow-sm
                  border
                  rounded
                  bg-white
                  mb-3
                  osahan-share-post
                "
              >
                <h5 class="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">Images</h5>

                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="p-3">
                      <div class="row">
                        <div
                          class="col-md-4 mb-3"
                          v-for="image in images"
                          v-bind:key="image.id"
                        >
                          <img
                            class="card-img-top"
                            :src="`${image.url}`"
                            alt="Card image cap"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <!-- End thumbnail card -->
            <!-- Begin Lease info card -->
            <div
              class="
                blog-card
                padding-card
                box
                shadow-sm
                rounded
                bg-white
                mb-3
                border-0
              "
            >
              <div class="card-body">
                <span class="badge badge-success">Lease Available</span>
                <h2>{{ listing.title }}</h2>
                <h6 class="mb-3">
                  <i class="feather-calendar"></i> {{ listing.created_at }}
                </h6>
                <h6 class="font-weight-light">{{ listing.description }}</h6>
              </div>
              <div class="card-footer border-0">
                <div class="footer">
                  <span>Listing User:</span>
                  <router-link v-bind:to="`/users/${user.id}`">
                    {{ user.first_name }}
                    {{ user.last_name }}</router-link
                  >
                  <p>
                    <router-link
                      v-if="`${this.currentUserId}` == `${user.id}`"
                      v-bind:to="`/listings/${listing.id}/edit`"
                      >Edit Listing</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
            <!-- End lease info card -->

            <div>
              <div
                class="
                  padding-card
                  box
                  shadow-sm
                  rounded
                  bg-white
                  mb-3
                  border-0
                "
              >
                <div class="card-body">
                  <h5 class="card-title mb-4 d-flex justify-content-center">
                    Pin below marks location
                  </h5>
                  <!-- div id="map" renders container: map from code below-->
                  <div id="map"></div>

                  <!-- Begin the map menu -->
                  <!-- See a list of Mapbox-hosted public styles at -->
                  <!-- https://docs.mapbox.com/api/maps/styles/#mapbox-styles -->
                  <div>
                    <div id="menu" class="d-flex justify-content-center mt-3">
                      <label for="satellite-v9" class="pr-1">Satellite</label>
                      <input
                        id="satellite-v9"
                        type="radio"
                        name="rtoggle"
                        value="satellite"
                        checked="checked"
                      />
                      <label for="streets-v11" class="pl-3 pr-1">Streets</label>
                      <input
                        id="streets-v11"
                        type="radio"
                        name="rtoggle"
                        value="streets"
                      />
                    </div>
                  </div>

                  <!-- end the map menu -->
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4">
            <!-- Begin Availbility card -->
            <div
              class="sidebar-card box shadow-sm rounded bg-white mb-3 border-0"
            >
              <div class="card-body">
                <h4 class="card-title mb-3">Available Dates Remaining</h4>
                <h6>{{ listing.availability }}</h6>
              </div>
            </div>
            <!-- End Availability card -->

            <!-- Begin address Card -->
            <div
              class="sidebar-card box shadow-sm rounded bg-white mb-3 border-0"
            >
              <div class="card-body">
                <h4 class="card-title mb-4">Address</h4>
                <h6>{{ listing.address }}</h6>
                <p>Map below</p>
              </div>
            </div>
            <!-- End address card -->

            <!-- Begin email card -->
            <div
              class="sidebar-card box shadow-sm rounded bg-white mb-3 border-0"
            >
              <div class="card-body">
                <h5 class="card-title mb-4">Email the Host</h5>
                <form
                  action="https://formspree.io/f/xpzkjzkg"
                  method="POST"
                  name="sentMessage"
                >
                  <div class="control-group form-group">
                    <div class="controls">
                      <label>Name <span class="text-danger">*</span></label>
                      <input
                        placeholder="Name"
                        type="text"
                        class="form-control"
                        required=""
                      />
                    </div>

                    <div class="controls">
                      <label
                        >Your Email <span class="text-danger">*</span></label
                      >
                      <input
                        name="_replyto"
                        placeholder="Email"
                        type="email"
                        class="form-control"
                        required=""
                      />
                    </div>
                  </div>

                  <div class="control-group form-group">
                    <div class="controls">
                      <label>Message <span class="text-danger">*</span></label>
                      <textarea
                        :placeholder="`I am interested in your listing at ${listing.address}`"
                        name="message"
                        rows="10"
                        cols="100"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Request Reservation!
                  </button>
                </form>
              </div>
            </div>

            <!-- End email card -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#map {
  width: 100%;
  height: 600px;
}
</style>

<script>
/* global mapboxgl */
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Listing Show Page",
      listing: [],
      images: [],
      user: {},
      currentUserId: localStorage.getItem("user_id"),
    };
  },

  created: function () {
    this.listingsShow();
  },

  methods: {
    listingsShow: function () {
      axios
        .get(`/listings/${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data);
          this.listing = response.data;
          this.images = response.data.images;
          this.user = response.data.user;

          // begin map code
          mapboxgl.accessToken =
            "pk.eyJ1Ijoid2lsbGlhbXRwZXR0eSIsImEiOiJja3B6d2t4YTIwN2JoMnR0bHliNnlhN3JxIn0.6ldMEPx_v-r54M-OZ_QCeQ";
          var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/satellite-v9",
            center: [this.listing.longitude, this.listing.latitude],
            zoom: 11,
          });
          //end map code

          // begin popup/marker
          var popup = new mapboxgl.Popup({ offset: 25 }).setText(
            `${this.listing.address}`
          );
          var marker1 = new mapboxgl.Marker({ draggable: false })
            .setLngLat([this.listing.longitude, this.listing.latitude])
            .setPopup(popup)
            .addTo(map);
          console.log(marker1);
          // end map and popup/marker

          // Start JS code to render style menu
          var layerList = document.getElementById("menu");
          var inputs = layerList.getElementsByTagName("input");

          function switchLayer(layer) {
            var layerId = layer.target.id;
            map.setStyle("mapbox://styles/mapbox/" + layerId);
          }

          for (var i = 0; i < inputs.length; i++) {
            inputs[i].onclick = switchLayer;
          }
          // End JS code rendering style menu
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
