<template>
  <div class="user-edit">
    <form v-on:submit.prevent="submitEdit()">
      <h1>User Edit</h1>

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
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    {{ editUserParams }}
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
  methods: {
    submitEdit: function () {
      axios
        .patch(`/users/${this.$route.params.id}`, this.editUserParams)
        .then((response) => {
          console.log(response.data);
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
