<template>
  <div class="signup">
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>

      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="form-group">
        <label>First Name: </label>
        <input
          type="text"
          class="form-control"
          v-model="newUserParams.first_name"
        />
      </div>
      <div class="form-group">
        <label>Last Name: </label>
        <input
          type="text"
          class="form-control"
          v-model="newUserParams.last_name"
        />
      </div>
      <div class="form-group">
        <label>Email: </label>
        <input
          type="email"
          class="form-control"
          v-model="newUserParams.email"
        />
      </div>
      <div class="form-group">
        <label>Password: </label>
        <input
          type="password"
          class="form-control"
          v-model="newUserParams.password"
        />
      </div>
      <div class="form-group">
        <label>Password confirmation: </label>
        <input
          type="password"
          class="form-control"
          v-model="newUserParams.password_confirmation"
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
              <span class="font-weight-bold">ResX</span> Signup
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
    <!-- Begin signup -->
    <div class="bg-white">
      <div class="container">
        <div
          class="row justify-content-center align-items-center d-flex vh-100"
        >
          <div class="col-md-4 mx-auto">
            <div class="osahan-login py-4">
              <div class="text-center mb-4">
                <a href="index.html"><img src="img/logo.svg" alt="" /></a>
                <h5 class="font-weight-bold mt-3">Join ResX</h5>
                <p class="text-muted">Get Outside</p>
              </div>
              <form v-on:submit.prevent="submit()">
                <div class="form-row">
                  <div class="col">
                    <div class="form-group">
                      <label class="mb-1">First Name</label>
                      <div class="position-relative icon-form-control">
                        <i class="feather-user position-absolute"></i>
                        <input
                          type="text"
                          v-model="newUserParams.first_name"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label class="mb-1">Last Name</label>
                      <div class="position-relative icon-form-control">
                        <i class="feather-user position-absolute"></i>
                        <input
                          type="text"
                          v-model="newUserParams.last_name"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Email</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-at-sign position-absolute"></i>
                    <input
                      type="email"
                      v-model="newUserParams.email"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Password (6 or more characters)</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input
                      type="password"
                      v-model="newUserParams.password"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Password Confirmation</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input
                      type="password"
                      v-model="newUserParams.password_confirmation"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1"
                    >You agree to the Olink <a href="#">User Agreement</a>,
                    <a href="#">Privacy Policy</a>, and
                    <a href="#">Cookie Policy</a>.</label
                  >
                </div>
                <button
                  class="btn btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign Up
                </button>

                <div class="py-3 d-flex align-item-center">
                  <span class="m-auto">
                    Already on ResX?
                    <a class="font-weight-bold" href="/">Sign in</a></span
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end signup -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          var params = {
            email: this.newUserParams.email,
            password: this.newUserParams.password,
          };
          axios
            .post("/sessions", params)
            .then((response) => {
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + response.data.jwt;
              localStorage.setItem("jwt", response.data.jwt);
              //stores user_id from sessions response.data
              localStorage.setItem("user_id", response.data.user_id);
              //uses localStorage.getItem to retrieve the id
              this.$router.push(
                `/users/${localStorage.getItem("user_id")}/edit`
              );
            })
            .catch((error) => {
              console.log(error.response);
              this.errors = ["Invalid email or password."];
              this.newUserParams.email = "";
              this.this.newUserParams.password = "";
            });
          // this.$router.push("/listings");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
