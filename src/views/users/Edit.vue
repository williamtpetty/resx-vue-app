<template>
  <div class="users-edit">
    <!-- Begin Header -->
    <div class="py-5 bg-primary">
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
    <form v-on:submit.prevent="editUser()">
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
          v-model="editUserParams.first_name"
        />
      </div>
      <div class="form-group">
        <label>Last Name: </label>
        <input
          type="text"
          class="form-control"
          v-model="editUserParams.last_name"
        />
      </div>
      <div class="form-group">
        <label>Email: </label>
        <input
          type="email"
          class="form-control"
          v-model="editUserParams.email"
        />
      </div>
      <div class="form-group">
        <label>Password: </label>
        <input
          type="password"
          class="form-control"
          v-model="editUserParams.password"
        />
      </div>
      <div class="form-group">
        <label>Password confirmation: </label>
        <input
          type="password"
          class="form-control"
          v-model="editUserParams.password_confirmation"
        />
      </div>
      <div class="form-group">
        <label>Phone Number: </label>
        <input
          type="text"
          class="form-control"
          v-model="editUserParams.phone_number"
        />
      </div>
      <div class="form-group">
        <label>Address: </label>
        <input
          type="text"
          class="form-control"
          v-model="editUserParams.address"
        />
      </div>
      <div class="form-group">
        <label>City: </label>
        <input type="text" class="form-control" v-model="editUserParams.city" />
      </div>
      <div class="form-group">
        <label>State: </label>
        <input
          type="text"
          class="form-control"
          v-model="editUserParams.state"
        />
      </div>
      <div class="form-group">
        <label>Tell us about you: </label>
        <textarea
          type="password"
          class="form-control"
          v-model="editUserParams.about_me"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Picture: </label>
        <input
          type="text"
          class="form-control"
          v-model="editUserParams.image_url"
        />
      </div>
      <div class="form-group">
        <label for="true">Are you planning to host?</label>
        <br />
        <label>Yes</label>
        <input
          type="radio"
          class="form-control"
          v-model="editUserParams.host"
          value="true"
        />
        <br />
        <label for="false">No</label>
        <input
          type="radio"
          class="form-control"
          v-model="editUserParams.host"
          value="false"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <div>
      <button v-on:click="destroyUser()">Delete User</button>
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
