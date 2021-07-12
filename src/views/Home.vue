<template>
  <div class="home">
    <!-- <form v-on:submit.prevent="submit()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <input type="submit" value="Login" />
      <router-link to="/signup" tag="button">Signup</router-link>
    </form> -->
    <!-- Begin Header -->
    <div class="py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">ResX</span> Login
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header -->
    <!-- begin login -->
    <div class="bg-light">
      <div class="container">
        <div class="row justify-content-center align-items-center d-flex">
          <div class="col-md-4 mx-auto">
            <div class="osahan-login py-4">
              <div class="text-center mb-4">
                <a href="/"><img src="/img/logo.svg" alt="" /></a>
                <h5 class="font-weight-bold mt-3">Welcome Back</h5>
                <p class="text-muted">Get Outside</p>
              </div>
              <form v-on:submit.prevent="submit()">
                <ul>
                  <li v-for="error in errors" v-bind:key="error">
                    {{ error }}
                  </li>
                </ul>

                <!-- begin email/password -->
                <div class="form-group">
                  <label class="mb-1">Email</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-user position-absolute"></i>
                    <input type="email" v-model="email" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Password</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input
                      type="password"
                      v-model="password"
                      class="form-control"
                    />
                  </div>
                </div>
                <!-- end email/password -->

                <!-- password remember -->
                <!-- <div class="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label class="custom-control-label" for="customCheck1"
                    >Remember password</label
                  >
                </div> -->
                <!-- end password remember -->

                <button
                  class="btn btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
                <div class="d-flex justify-content-center">
                  <span class="m-auto pt-3">
                    New to ResX?
                    <router-link class="font-weight-bold" to="/signup"
                      >Join now</router-link
                    ></span
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end login -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },

  created: function () {},

  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/listings");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
