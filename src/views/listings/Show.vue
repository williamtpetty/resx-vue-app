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
    <div id="map">this is where the</div>
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
    <router-link v-bind:to="`/listings/${listing.id}/edit`" tag="button"
      >Edit Listing</router-link
    >
  </div>
</template>

<style>
img {
  max-width: 350px;
}
</style>

<script>
/* global mapboxgl */
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Listing Show Page",
      listing: {},
      images: [],
      user: {},
    };
  },

  created: function () {
    this.listingsShow();
  },

  mounted: function () {
    // var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2lsbGlhbXRwZXR0eSIsImEiOiJja3B6d2t4YTIwN2JoMnR0bHliNnlhN3JxIn0.6ldMEPx_v-r54M-OZ_QCeQ";
    new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [-90.555051, 35.267242],
      zoom: 9,
    });
    // var map =
  },

  methods: {
    listingsShow: function () {
      axios
        .get(`/listings/${this.$route.params.id}`)
        .then((response) => {
          this.listing = response.data;
          this.images = response.data.images;
          this.user = response.data.user;
          console.log(this.images);
        })
        .catch((error) => {
          console.log(error.response.status);
          this.$router.push("/");
        });
    },
  },
};
</script>
