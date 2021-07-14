<template>
  <div class="listings-edit">
    <!-- Begin Header -->
    <div class="py-5" style="background-color: #b0c4ed">
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

    <!-- Begin Form -->
    <div class="bg-white bg-gradient">
      <div class="container">
        <!-- <div
          class="row justify-content-center align-items-center d-flex vh-100"
        > -->
        <div class="col-md-4 mx-auto">
          <div class="osahan-login py-4">
            <div class="text-center mb-4">
              <a href="/"><img src="/img/logo.svg" alt="" /></a>
              <h5 class="font-weight-bold mt-3">Edit Listing</h5>
              <p class="text-muted">Please Remember to Add Images</p>
            </div>
            <form v-on:submit.prevent="editListing()">
              <ul>
                <li
                  class="text-danger"
                  v-for="error in errors"
                  v-bind:key="error"
                >
                  {{ error }}
                </li>
              </ul>
              <div class="form-group">
                <label class="mb-1">Title</label>
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="editListingParams.title"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Address</label>
                <div class="position-relative">
                  <input
                    v-model="editListingParams.address"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Description</label>
                <div class="position-relative">
                  <textarea
                    rows="7"
                    cols="10"
                    v-model="editListingParams.description"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Price</label>
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="editListingParams.price"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Availability</label>
                <div class="position-relative">
                  <textarea
                    rows="5"
                    cols="10"
                    v-model="editListingParams.availability"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  class="btn btn-primary btn-block text-uppercase mb-3"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div class="form-group">
                <label class="mb-1"
                  >You agree to the ResX <a href="#">User Agreement</a>,
                  <a href="#">Privacy Policy</a>, and
                  <a href="#">Cookie Policy</a>.</label
                >
              </div>
            </form>

            <div class="form-group">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="p-3">
                    <div class="form-group">
                      <label class="mb-1">New Image URL</label>
                      <div class="position-relative">
                        <input
                          type="text"
                          v-model="newImage.url"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <button
                      class="btn btn-block btn-primary text-uppercase mb-3"
                      v-on:click="addImage(newImage)"
                    >
                      Add Image
                    </button>
                    <div class="small text-gray-500">
                      Click on image to delete
                    </div>
                    <div class="row">
                      <div
                        class="col-md-4 mb-3"
                        v-for="image in images"
                        v-bind:key="image.id"
                      >
                        <img
                          v-on:click="destroyImage(image)"
                          class="card-img-top"
                          :src="`${image.url}`"
                          alt="Card image cap"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                class="btn btn-primary btn-block text-uppercase mb-3"
                v-on:click="destroyListing()"
              >
                Delete Listing
              </button>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <!-- End Form -->
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
