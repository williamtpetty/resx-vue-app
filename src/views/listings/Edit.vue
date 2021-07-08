<template>
  <div class="listings-new">
    <!-- Begin Header -->
    <div class="py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">ResX</span> Edit Listing
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
    <form v-on:submit.prevent="editListing()">
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
      <button v-on:click="destroyListing()">Delete Listing</button>
    </div>
    <div>
      <label>Image: </label>
      <input type="text" v-model="newImage.url" />
      <br />
      <button v-on:click="addImage(newImage)">Add Image</button>
      <div v-for="image in images" v-bind:key="image.id">
        <p>
          {{ image.id }}
          <img :src="`${image.url}`" alt="" />
          <br />
          <button v-on:click="destroyImage(image)">Delete Image</button>
          <!-- passing image object as parameter to function -->
        </p>
      </div>
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
      newImage: {},
      listingId: "",
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
          // console.log(response.data);
          this.editListingParams = response.data;
          this.images = response.data.images;
          this.listingId = response.data.id;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    editListing: function () {
      // if the listing doesn't have an image, stop this axios patch
      // determines if images array has a length, if not, errors
      if (this.images.length) {
        axios
          .patch(`/listings/${this.$route.params.id}`, this.editListingParams)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/listings");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      } else {
        this.errors = [
          "You must have at least one image to save this listing.",
        ];
      }
    },

    addImage: function (addOneImage) {
      axios
        .post(`/images`, { listing_id: this.listingId, url: this.newImage.url })
        .then((response) => {
          this.images.push(addOneImage);
          console.log(response.data);
          this.newImage = {};
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    destroyImage: function (deleteThisImage) {
      // parameter is image object
      console.log(deleteThisImage.id);
      if (confirm("Are you sure you want to delete this image?")) {
        axios
          .delete(`/images/${deleteThisImage.id}`) // should render the images id
          .then((response) => {
            var imageIndex = this.images.indexOf(deleteThisImage);
            //assigns image index to var
            this.images.splice(imageIndex, 1);
            // splices image at index, removes 1 element from array
            console.log(response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    destroyListing: function () {
      if (confirm("Are you sure you want to delete this listing?")) {
        axios
          .delete(`/listings/${this.$route.params.id}`)
          .then((response) => {
            console.log(response);
            this.$router.push("/listings");
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
  },
};
</script>
