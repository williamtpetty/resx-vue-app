<template>
  <div class="listings">
    <h1>{{ message }}</h1>
    <div v-for="listing in listings" v-bind:key="listing.id">
      <h2>
        <router-link v-bind:to="`/listings/${listing.id}`">{{
          listing.title
        }}</router-link>
      </h2>
      <p>{{ listing.description }}</p>
      <p><strong>Address: </strong> {{ listing.address }}</p>
      <p><strong>Availability: </strong>{{ listing.availability }}</p>
      <p><strong>Price: </strong>{{ listing.price }}</p>
      <router-link v-bind:to="`/listings/${listing.id}`" tag="button"
        >More Info</router-link
      >
    </div>
  </div>
</template>

<style></style>

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
        this.listings = response.data;
      });
    },
  },
};
</script>
