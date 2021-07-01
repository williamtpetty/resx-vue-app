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
    <div>
      <strong>Listing User:</strong>
      <p>
        <router-link v-bind:to="`/users/${user.id}`">
          {{ user.first_name }}
          {{ user.last_name }}</router-link
        >
      </p>
      <p>{{ user.phone_number }}</p>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<style>
img {
  max-width: 350px;
}
</style>

<script>
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

  methods: {
    listingsShow: function () {
      axios.get(`/listings/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.listing = response.data;
        this.images = response.data.images;
        this.user = response.data.user;
      });
    },
  },
};
</script>
