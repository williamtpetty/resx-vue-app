<template>
  <div class="listings-new">
    <!-- <form v-on:submit.prevent="newListing()">
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
    </form> -->
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

    <!-- Begin Form -->
    <div class="bg-light">
      <div class="container bg-light">
        <!-- <div
          class="row justify-content-center align-items-center d-flex vh-100"
        > -->
        <div class="col-md-4 mx-auto">
          <div class="osahan-login py-4">
            <div class="text-center mb-4">
              <a href="/"><img src="/img/logo.svg" alt="" /></a>
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
