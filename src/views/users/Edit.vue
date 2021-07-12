<template>
  <div class="users-edit">
    <!-- Begin Header -->
    <div class="py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">ResX</span> Edit Your Info
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
    <!-- Begin form -->
    <div class="bg-light">
      <div class="container">
        <!-- <div
          class="row justify-content-center align-items-center d-flex vh-100"
        > -->
        <div class="col-md-4 mx-auto">
          <div class="osahan-login py-4">
            <div class="text-center mb-4">
              <a href="/"><img src="/img/logo.svg" alt="" /></a>
              <h5 class="font-weight-bold mt-3">Join ResX</h5>
              <p class="text-muted">Find a Lease Near You</p>
            </div>
            <form v-on:submit.prevent="editUser()">
              <ul>
                <li
                  class="text-danger"
                  v-for="error in errors"
                  v-bind:key="error"
                >
                  {{ error }}
                </li>
              </ul>
              <div class="form-row">
                <div class="col">
                  <div class="form-group">
                    <label class="mb-1">First name</label>
                    <div class="position-relative">
                      <input
                        type="text"
                        v-model="editUserParams.first_name"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label class="mb-1">Last name</label>
                    <div class="position-relative">
                      <input
                        type="text"
                        v-model="editUserParams.last_name"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Email</label>
                <div class="position-relative">
                  <input
                    type="email"
                    v-model="editUserParams.email"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Password (6 or more characters)</label>
                <div class="position-relative">
                  <input
                    type="password"
                    v-model="editUserParams.password"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Password Confirmation</label>
                <div class="position-relative">
                  <input
                    type="password"
                    v-model="editUserParams.password_confirmation"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Phone Number</label>
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="editUserParams.phone_number"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Address</label>
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="editUserParams.address"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">City</label>
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="editUserParams.city"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">State</label>
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="editUserParams.state"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Image</label>
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="editUserParams.image_url"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="mb-1">Tell Us About You</label>
                <div class="position-relative">
                  <textarea
                    rows="7"
                    cols="10"
                    type="text"
                    v-model="editUserParams.about_me"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="d-flex justify-content-center" for="true"
                  >Are you planning to host?</label
                >
                <div class="d-flex justify-content-center">
                  <label class="pr-1">Yes</label>
                  <input
                    type="radio"
                    v-model="editUserParams.host"
                    value="true"
                  />
                </div>

                <div class="d-flex justify-content-center">
                  <label class="pr-1" for="false">No</label>
                  <input
                    type="radio"
                    v-model="editUserParams.host"
                    value="false"
                  />
                </div>
              </div>
              <input
                class="btn btn-primary btn-block text-uppercase"
                type="submit"
                value="Submit"
              />
            </form>
            <!-- End Submit Form -->

            <!-- Personal URLs -->
            <div>THIS IS WHERE PERSONAL URLS HAVE TO GO</div>
            <!-- End peronsal URLs -->
            <!-- Disclaimers -->
            <div class="form-group">
              <label class="mb-1"
                >You agree to the ResX <a href="#">User Agreement</a>,
                <a href="#">Privacy Policy</a>, and
                <a href="#">Cookie Policy</a>.</label
              >
            </div>
            <!-- End Disclaimers -->
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      editUserParams: {},
      errors: [],
      newUrl: {},
    };
  },

  created: function () {
    this.showUser();
  },

  methods: {
    showUser: function () {
      axios.get(`/users/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editUserParams = response.data;
      });
    },

    editUser: function () {
      axios
        .patch(`/users/${this.$route.params.id}`, this.editUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push({
            name: "users-show",
            params: { id: `${response.data.id}` },
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },

    destroyUser: function () {
      if (confirm("Are you sure you want to leave us?"))
        axios
          .delete(`/users/${this.$route.params.id}`)
          .then((response) => {
            console.log(response);
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("jwt");
            localStorage.removeItem("user_id");
            this.$router.push("/signup");
          })
          .catch((error) => {
            console.log(error.response);
          });
    },
  },
};
</script>
