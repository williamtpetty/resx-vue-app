<template>
  <div class="listings-new">
    <form v-on:submit.prevent="editListing()">
      <h1>Edit Listing</h1>

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
          v-model="editListingParams.title"
        />
      </div>
      <div class="form-group">
        <label>Description </label>
        <textarea
          type="text"
          class="form-control"
          v-model="editListingParams.description"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Address: </label>
        <input
          type="text"
          class="form-control"
          v-model="editListingParams.address"
        />
      </div>
      <div class="form-group">
        <label>Availability: </label>
        <textarea
          type="text"
          class="form-control"
          v-model="editListingParams.availability"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Price: </label>
        <input
          type="text"
          class="form-control"
          v-model="editListingParams.price"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <div>
      <label>Image: </label>
      <input type="text" v-model="newImage.url" />
      <br />
      <button v-on:click="addImage()">Add Image</button>
    </div>
    {{ newImage }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      editListingParams: {},
      errors: [],
      images: [],
      newImage: {},
      listingId: "",
    };
  },

  created: function () {
    this.showListing();
  },

  methods: {
    showListing: function () {
      axios.get(`/listings/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editListingParams = response.data;
        this.listingId = response.data.id;
      });
    },

    editListing: function () {
      axios
        .patch(`/users/${this.$route.params.id}`, this.editListingParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/listings");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    addImage: function () {
      axios
        .post(`/images`, { listing_id: this.listingId, url: this.newImage.url })
        .then((response) => {
          console.log(response.data);
          this.images = response.data;
          this.newImage = {};
        });
    },
  },
};
</script>
