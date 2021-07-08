<template>
  <div class="listings-show">
    <h1>{{ message }}</h1>
    <div>
      <h2>{{ listing.title }}</h2>
      <div v-for="image in images" v-bind:key="image.id">
        <img :src="image.url" alt="" />
      </div>
      <p>{{ listing.description }}</p>
      <p><strong>Address: </strong> {{ listing.address }}</p>
      <p><strong>Availability: </strong>{{ listing.availability }}</p>
      <p><strong>Price: </strong>{{ listing.price }}</p>
    </div>

    <!-- div id="map" renders container: map from code below-->
    <h4>Pin below marks location</h4>
    <div id="map"></div>

    <!-- begin the map menu -->
    <div id="menu">
      <input
        id="satellite-v9"
        type="radio"
        name="rtoggle"
        value="satellite"
        checked="checked"
      />
      <!-- See a list of Mapbox-hosted public styles at -->
      <!-- https://docs.mapbox.com/api/maps/styles/#mapbox-styles -->
      <label for="satellite-v9">satellite</label>
      <input id="streets-v11" type="radio" name="rtoggle" value="streets" />
      <label for="streets-v11">streets</label>
    </div>
    <!-- end the map menu -->

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
    >
  </div>
</template>

<style>
#map {
  max-width: 500px;
  height: 500px;
  margin: auto;
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
