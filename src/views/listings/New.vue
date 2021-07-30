<template>
  <div class="listings-new">
    <!-- Begin Header -->
    <div class="py-5" style="background-color: #b0c4ed">
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

    <!-- Begin Form -->
    <div class="bg-white">
      <div class="container">
        <!-- <div
          class="row justify-content-center align-items-center d-flex vh-100"
        > -->
        <div class="col-md-4 mx-auto">
          <div class="osahan-login py-4">
            <div class="text-center mb-4">
              <a href="/"><img src="/img/logo-duck.jpeg" alt="" /></a>
              <h5 class="font-weight-bold mt-3">New Listing</h5>
            </div>
            <form v-on:submit.prevent="newListing()">
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
                    v-model="newListingParams.title"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Address</label>
                <div class="position-relative">
                  <input
                    v-model="newListingParams.address"
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
                    v-model="newListingParams.description"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Price</label>
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="newListingParams.price"
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
                    v-model="newListingParams.availability"
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
                ></div>
              </div>
            </div>
            <div></div>
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
