<template>
  <div class="listings">
    <!-- <datalist>
      <option v-for="listing in listings" v-bind:key="listing.id">
        {{ listing.address }}
      </option>
    </datalist> -->

    <!-- <div>
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
      <div>
        <router-link v-bind:to="`/listings/${listing.id}`"
          ><img :src="`${listing.images[0].url}`" alt="" />
        </router-link>
      </div>

      <p><strong>Address: </strong> {{ listing.address }}</p>
      <p><strong>Availability: </strong>{{ listing.availability }}</p>
      <router-link v-bind:to="`/users/${current}`" tag="button"
        >Host Profile this shit right here dont work</router-link
      >
      <router-link v-bind:to="`/listings/${listing.id}`" tag="button"
        >More Info</router-link
      >
    </div> -->

    <!-- Begin Header -->
    <div class="py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">ResX</span> Listings Index
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->

    <div class="bg-light d-flex justify-content-center pt-3">
      <h5 class="my-auto mr-2">Search for listing:</h5>
      <input
        type="text"
        v-model="searchTerm"
        list="address"
        placeholder="Keyword"
      />
    </div>
    <!-- Begin Cards -->

    <div class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="row">
              <div
                class="col-lg-4 col-md-4 pb-4"
                v-for="listing in filterBy(listings, searchTerm)"
                v-bind:key="listing.id"
              >
                <div
                  class="
                    box
                    shadow-sm
                    rounded
                    bg-white
                    mb-3
                    blog-card
                    border-0
                    h-100
                  "
                >
                  <!-- listing images logic -->
                  <router-link v-bind:to="`/listings/${listing.id}`"
                    ><img
                      class="card-img-top"
                      :src="`${listing.images[0].url}`"
                      alt="Card image cap"
                    />
                  </router-link>

                  <!-- figure the logic if time allows, if there is not an image added and they manually quit out make a placeholder -->
                  <!-- <div>
                    <div v-if="`${listing.images.length}` == 1">
                      <router-link v-bind:to="`/listings/${listing.id}`"
                        ><img
                          class="card-img-top"
                          :src="`${listing.images[0].url}`"
                          alt="Card image cap"
                        />
                      </router-link>
                    </div>
                    <div v-else>
                      <router-link v-bind:to="`/listings/${listing.id}`"
                        ><img
                          class="card-img-top"
                          src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                          alt="Card image cap"
                        />
                      </router-link>
                    </div>
                  </div> -->
                  <!-- figure the logic if time allows, if there is not an image added and they manually quit out make a placeholder -->

                  <!-- listing images -->
                  <div class="card-body">
                    <span class="badge badge-success"></span>
                    <h6 class="text-dark">{{ listing.title }}</h6>
                    <p class="mb-0">
                      {{ listing.description | truncate(100) }}
                    </p>

                    <p v-if="isLoggedIn()" class="pt-4">
                      {{ listing.address }}
                    </p>
                  </div>
                  <div v-if="isLoggedIn()" class="card-footer mt-auto border-0">
                    <router-link v-bind:to="`/users/${listing.user.id}`">
                      <p class="mb-0">
                        <img
                          class="rounded-circle"
                          :src="`${listing.user.image_url}`"
                          alt="Card image cap"
                        />
                        <strong
                          >{{ listing.user.first_name }}
                          {{ listing.user.last_name }}</strong
                        >
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Cards -->
  </div>
</template>

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
      axios
        .get("/listings")
        .then((response) => {
          this.listings = response.data;
          console.log(this.listings);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
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

    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
