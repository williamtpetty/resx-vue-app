<template>
  <div class="users-show">
    <h1>{{ message }}</h1>
    <div>
      <img :src="`${user.image_url}`" alt="" />
      <h2>{{ user.first_name }} {{ user.last_name }}</h2>
      <p>{{ user.about_me }}</p>
      <p>{{ user.phone_number }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.city }}, {{ user.state }}</p>
      <router-link :to="`/users/${user.id}/edit`" tag="button"
        >Edit User Info</router-link
      >
      <br />
      <router-link
        v-if="`${user.host}` === 'true'"
        to="/listings/new"
        tag="button"
        >New Listing</router-link
      >
      <br />
      <div v-if="`${user.host}` === 'true'">
        <button v-on:click="toggle = !toggle">
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
            <router-link v-bind:to="`/listings/${listing.id}/edit`" tag="button"
              >Edit Listing</router-link
            >
          </div>
        </div>
      </div>
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
      message: "User Show Page",
      user: {},
      listings: [],
      toggle: false,
    };
  },

  created: function () {
    this.showUser();
  },

  methods: {
    showUser: function () {
      axios.get(`/users/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.user = response.data;
        this.listings = response.data.listings;
      });
    },
  },
};
</script>
