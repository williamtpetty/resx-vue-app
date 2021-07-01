<template>
  <div class="signup">
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
              // this.$router.push("/listings");
            })
            .catch((error) => {
              console.log(error.response);
              this.errors = ["Invalid email or password."];
              this.newUserParams.email = "";
              this.this.newUserParams.password = "";
            });
          this.$router.push({
            name: "users-edit",
            params: { id: `${response.data.id}` },
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
