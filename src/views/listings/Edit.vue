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
      <br />
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <div>
      <h4>Note: Images are Required</h4>
      <label>Image URL: </label>
      <input type="text" v-model="newImage.url" />
      <br />

      <button v-on:click="addImage()">Add Image</button>
      <p v-for="image in images" v-bind:key="image.id">
        <img :src="`${image.url}`" alt="" />
        <br />
        <button v-on:click="deleteImage(image.id)">Delete Image</button>
      </p>
    </div>

    <br />
    <div>
      <button v-on:click="destroyListing()">Delete Listing</button>
    </div>
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
      newImage: { url: "https://via.placeholder.com/300" },
      listingId: "",
      indexVal: "",
    };
  },

  created: function () {
    this.showListing();
  },

  methods: {
    showListing: function () {
      axios
        .get(`/listings/${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data);
          this.editListingParams = response.data;
          this.images = response.data.images;
          this.listingId = response.data.id;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    editListing: function () {
      axios
        .patch(`/listings/${this.$route.params.id}`, this.editListingParams)
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
          this.newImage = {};
          this.$router.push(`/listings/${response.data.listing_id}/edit`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    deleteImage: function (imageId) {
      if (confirm("Are you sure you want to delete this image?"))
        axios
          .delete(`/images/${imageId}`)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
    },

    destroyListing: function () {
      if (confirm("Are you sure you want to delete this listing?"))
        axios
          .delete(`/listings/${this.$route.params.id}`)
          .then((response) => {
            console.log(response);
            this.$router.push("/listings");
          })
          .catch((error) => {
            console.log(error.response);
          });
    },
  },
};
</script>
