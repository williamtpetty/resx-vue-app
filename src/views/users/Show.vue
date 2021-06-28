<template>
  <div class="user-show">
    <h1>{{ message }}</h1>
    <div>
      <img :src="`${user.image_url}`" alt="" />
      <h2>{{ user.first_name }} {{ user.last_name }}</h2>
      <p>{{ user.about_me }}</p>
      <p>{{ user.phone_number }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.city }}, {{ user.state }}</p>
    </div>
  </div>
</template>

<style>
img {
  max-width: 350px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "User Show Page",
      user: {},
    };
  },

  created: function () {
    this.userShow();
  },

  methods: {
    userShow: function () {
      axios.get(`/users/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>
