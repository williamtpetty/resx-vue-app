<template>
  <div class="listings-new">
    <!-- Begin Header -->
    <div class="py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">ResX</span> New Listing
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
    <form v-on:submit.prevent="newListing()">
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="form-group">
        <label>Title: </label>
        <input
          type="text"
          class="form-control"
          v-model="newListingParams.title"
        />
      </div>
      <div class="form-group">
        <label>Description </label>
        <textarea
          type="text"
          class="form-control"
          v-model="newListingParams.description"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Address: </label>
        <input
          type="text"
          class="form-control"
          v-model="newListingParams.address"
        />
      </div>
      <div class="form-group">
        <label>Availability: </label>
        <textarea
          type="text"
          class="form-control"
          v-model="newListingParams.availability"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Price: </label>
        <input
          type="text"
          class="form-control"
          v-model="newListingParams.price"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    {{ newListingParams }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newListingParams: {},
      errors: [],
    };
  },

  created: function () {},

  methods: {
    newListing: function () {
      axios
        .post(`/listings`, this.newListingParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/listings/${response.data.id}/edit`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
