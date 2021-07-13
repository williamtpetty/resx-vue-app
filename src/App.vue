<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`"
        >Profile</router-link
      >
      <span v-if="isLoggedIn()"> | </span>
      <router-link v-if="!isLoggedIn()" to="/">Login</router-link>
      <span v-if="!isLoggedIn()"> | </span>
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
      <span v-if="isLoggedIn()"> | </span>
      <router-link to="/listings">Listings</router-link>
      <span> | </span>
    </div> -->

    <!-- Navigation -->
    <nav class="navbar navbar-expand navbar-light bg-white osahan-nav-top p-0">
      <div class="container">
        <!-- THIS IS THAT UGLY ASS CROWN LEFT SIDE -->
        <a class="navbar-brand mr-2" href="/"
          ><img src="/img/logo.svg" alt="" />
        </a>
        <!-- CHANGE THAT UGLY ASS CROWN -->

        <ul class="navbar-nav ml-auto d-flex align-items-center">
          <!-- BEGIN DELETE LINE 26 -->
          <!-- Nav Item - Search Dropdown (Visible Only XS) -->
          <!-- <li class="nav-item dropdown no-arrow d-sm-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="feather-search mr-2"></i>
            </a> -->
          <!-- Dropdown - Messages -->
          <!-- <div
              class="
                dropdown-menu dropdown-menu-right
                p-3
                shadow-sm
                animated--grow-in
              "
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control border-0 shadow-none"
                    placeholder="Search people, jobs and more..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn" type="button">
                      <i class="feather-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li> -->
          <!-- End Nav Item -->
          <!-- END DELETE LINE 26 -->

          <!-- 'Messages' icon start -->
          <li
            v-if="isLoggedIn()"
            class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown"
          >
            <router-link class="nav-link dropdown-toggle" to="/">
              <i class="feather-message-square mr-2"></i>
              Messages
              <!-- Counter - Alerts -->
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
              ><i class="feather-book mr-1"></i
              ><span class="d-none d-lg-inline">Logout</span></router-link
            >
          </li>
          <!-- Basic navigation end -->

          <!-- BEGIN DELETE LINE 94 -->
          <!-- 'Pages' dropdown start -->
          <!-- <li class="nav-item dropdown mr-2">
            <a
              class="nav-link dropdown-toggle pr-0"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="feather-file-text mr-2"></i
              ><span class="d-none d-lg-inline">Pages</span>
            </a> -->
          <!-- Dropdown - User Information -->
          <!-- <div class="dropdown-menu dropdown-menu-right shadow-sm">
              <a class="dropdown-item" href="blog.html"
                ><i class="feather-book mr-1"></i> Blog</a
              >
              <a class="dropdown-item" href="blog-single.html"
                ><i class="feather-book-open mr-1"></i> Blog Single</a
              >
              <a class="dropdown-item" href="contact.html"
                ><i class="feather-mail mr-1"></i> Contact</a
              >
              <a class="dropdown-item" href="pricing.html"
                ><i class="feather-credit-card mr-1"></i> Pricing</a
              >
              <a class="dropdown-item" href="maintence.html"
                ><i class="feather-clock mr-1"></i> Maintence</a
              >
              <a class="dropdown-item" href="coming-soon.html"
                ><i class="feather-cloud mr-1"></i> Coming Soon</a
              >
              <a class="dropdown-item" href="components.html"
                ><i class="feather-list mr-1"></i> Components</a
              >
              <a class="dropdown-item" href="sign-in.html"
                ><i class="feather-log-in mr-1"></i> Sign In</a
              >
              <a class="dropdown-item" href="sign-up.html"
                ><i class="feather-lock mr-1"></i> Sign Up</a
              >
            </div>
          </li> -->
          <!-- Pages dropdown end -->
          <!-- END DELETE LINE 94 -->

          <!-- BEGIN DELETE LINE 231 -->
          <!-- Begin Alerts ('bell icon' second from last) -->
          <!-- <li class="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="feather-bell"></i> -->
          <!-- Counter - Alerts -->
          <!-- <span class="badge badge-info badge-counter">6</span>
            </a> -->
          <!-- Dropddown Alerts -->
          <!-- <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow-sm"
            >
              <h6 class="dropdown-header">Alerts Center</h6>
              <a
                class="dropdown-item d-flex align-items-center"
                href="notifications.html"
              >
                <div class="mr-3">
                  <div class="icon-circle bg-primary">
                    <i class="feather-download-cloud text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 12, 2019</div>
                  <span class="font-weight-bold"
                    >A new monthly report is ready to download!</span
                  >
                </div>
              </a>
              <a
                class="dropdown-item d-flex align-items-center"
                href="notifications.html"
              >
                <div class="mr-3">
                  <div class="icon-circle bg-success">
                    <i class="feather-edit text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a
                class="dropdown-item d-flex align-items-center"
                href="notifications.html"
              >
                <div class="mr-3">
                  <div class="icon-circle bg-warning">
                    <i class="feather-folder text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a
                class="dropdown-item text-center small text-gray-500"
                href="notifications.html"
                >Show All Alerts</a
              >
            </div> -->
          <!-- End dropdown alerts -->
          <!-- </li> -->
          <!-- End Alerts (bell icon second from last) -->
          <!-- END DELETE LINE 231 -->

          <!-- BEGIN DELETE LINE 307 -->
          <!-- Nav Item - User Information (end of navbar) -->
          <!-- <li class="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
            <a
              class="nav-link dropdown-toggle pr-0"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img class="img-profile rounded-circle" src="/img/p13.png" />
            </a> -->
          <!-- User Info Drop Down (end of navbar) -->
          <!-- <div class="dropdown-menu dropdown-menu-right shadow-sm">
              <div class="p-3 d-flex align-items-center">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="/img/user.png" alt="" />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate">Gurdeep Osahan</div>
                  <div class="small text-gray-500">UI/UX Designer</div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="profile.html"
                ><i class="feather-edit mr-1"></i> My Account</a
              >
              <a class="dropdown-item" href="edit-profile.html"
                ><i class="feather-user mr-1"></i> Edit Profile</a
              >
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="sign-in.html"
                ><i class="feather-log-out mr-1"></i> Logout</a
              >
            </div> -->
          <!-- End Dropdown for User ifo -->
          <!-- </li> -->
          <!-- End Nav Item, user information (last icon on Navbar) -->
          <!-- END DELETE LINE 307 -->
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
export default {
  data: function () {
    return {};
  },

  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
