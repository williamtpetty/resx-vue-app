<template>
  <div class="listings">
    <h1>{{ message }}</h1>
    <datalist>
      <option v-for="listing in listings" v-bind:key="listing.id">
        {{ listing.address }}
      </option>
    </datalist>

    <div>
      <label>Search by Keyword: </label>
      <br />
      <input
        type="text"
        v-model="searchTerm"
        list="address"
        placeholder="Keyword"
      />
    </div>
    <br />

    <button v-on:click="sortByAttribute('title')">
      Sort by Title
      <span v-if="this.sortAttribute == 'title' && this.sortDirection == -1"
        >v</span
      >
      <span v-if="this.sortAttribute == 'title' && this.sortDirection == 1"
        >^</span
      >
    </button>
    <button v-on:click="sortByAttribute('created_at')">
      Sort by Age
      <span
        v-if="this.sortAttribute == 'created_at' && this.sortDirection == -1"
        >v</span
      >
      <span v-if="this.sortAttribute == 'created_at' && this.sortDirection == 1"
        >^</span
      >
    </button>

    <div
      v-for="listing in filterBy(
        orderBy(listings, sortAttribute, sortDirection),
        searchTerm
      )"
      v-bind:key="listing.id"
    >
      <h2>{{ listing.title }}</h2>
      <p>
        <router-link v-bind:to="`/listings/${listing.id}`"
          ><img :src="`${listing.images[0].url}`" alt=""
        /></router-link>
      </p>
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],

  data: function () {
    return {
      message: "Listings",
      listings: [],
      sortAttribute: "created_at",
      sortDirection: 1,
      searchTerm: "",
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

    sortByAttribute: function (attribute) {
      if (this.sortAttribute == attribute) {
        this.sortDirection = this.sortDirection * -1;
      } else {
        this.sortAttribute = attribute;
        this.sortDirection = this.sortDirection * -1;
      }
    },
  },
};
</script>
