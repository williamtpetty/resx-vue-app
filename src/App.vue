<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand navbar-light bg-white osahan-nav-top p-0">
      <div class="container">
        <!-- THIS IS THAT UGLY ASS CROWN -->
        <a class="navbar-brand mr-2" href="/"
          ><img src="/img/logo-duck.jpeg" alt="" />
        </a>
        <!-- CHANGE THAT UGLY ASS CROWN -->

        <ul class="navbar-nav ml-auto d-flex align-items-center">
          <!-- 'Messages' icon start -->

          <li
            v-if="isLoggedIn()"
            class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown"
          >
            <router-link
              v-if="`${this.conversations.length}`"
              class="nav-link dropdown-toggle"
              to="/conversations"
            >
              <i class="feather-message-square mr-2"></i>
              Messages
            </router-link>
          </li>

          <!-- 'Messages' icon end -->

          <!-- Basic navigation start -->
          <li class="nav-item">
            <router-link class="nav-link" v-if="!isLoggedIn()" to="/"
              ><i class="feather-users mr-2"></i
              ><span class="d-none d-lg-inline">Login</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="isLoggedIn()"
              :to="`/users/${getUserId()}`"
              ><i class="feather-users mr-2"></i
              ><span class="d-none d-lg-inline">Profile</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/listings`"
              ><i class="feather-book mr-1"></i
              ><span class="d-none d-lg-inline">Listings</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="isLoggedIn()" to="/logout"
              ><i class="feather-users mr-1"></i
              ><span class="d-none d-lg-inline">Logout</span></router-link
            >
          </li>
          <!-- Basic navigation end -->
        </ul>
      </div>
    </nav>
    <!-- End Navbar code -->
    <router-view :key="$route.fullPath" />
    <!-- ^ this code in router-view rerenders the same path -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      conversations: [],
      currentUserId: "",
    };
  },

  created: function () {
    this.getUserId();
    this.showUser();
  },

  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },

    showUser: function () {
      var currentUserId = localStorage.getItem("user_id");
      axios.get(`/users/${currentUserId}`).then((response) => {
        this.conversations = response.data;
      });
    },
  },
};
</script>
