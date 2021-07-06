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
      <a
        :href="`mailto:${user.email}?subject=Interested in: ${listing.address}`"
        >Email Host to Reserve Date!</a
      >
    </div>
    <router-link
      v-if="`${user.id}` == `${this.loggedInUser}`"
      v-bind:to="`/listings/${listing.id}/edit`"
      tag="button"
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
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Listing Show Page",
      listing: {},
      images: [],
      user: {},
      loggedInUser: localStorage.getItem("user_id"),
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
        })
        .catch((error) => {
          console.log(error.response.status);
          this.$router.push("/");
        });
    },
  },
};
</script>
