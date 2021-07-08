<template>
  <div class="signup">
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
    <form v-on:submit.prevent="submit()">
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
    </form>
    {{ this.newUserParams }}
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
