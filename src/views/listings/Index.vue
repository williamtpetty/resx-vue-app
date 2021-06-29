<template>
  <div class="listings">
    <h1>{{ message }}</h1>
    <div v-for="listing in listings" v-bind:key="listing.id">
      <p>
        <router-link v-bind:to="`/listings/${listing.id}`"
          ><img :src="`${listing.images[0].url}`" alt=""
        /></router-link>
      </p>
      <h2>{{ listing.title }}</h2>
      <p><strong>Address: </strong> {{ listing.address }}</p>
      <p><strong>Availability: </strong>{{ listing.availability }}</p>
      <router-link v-bind:to="`/listings/${listing.id}`" tag="button"
        >More Info</router-link
      >
    </div>
  </div>
</template>

<style>
img {
  max-width: 200px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Listings",
      listings: [],
    };
  },

  created: function () {
    this.listingsIndex();
  },

  methods: {
    listingsIndex: function () {
      axios.get("/listings").then((response) => {
        console.log(response.data);
        this.listings = response.data;
      });
    },
  },
};
</script>
