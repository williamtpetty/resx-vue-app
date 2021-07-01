import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Logout from "../views/Logout.vue";
import UserShow from "../views/users/Show.vue";
import UserEdit from "../views/users/Edit.vue";
import Listings from "../views/listings/Index.vue";
import ListingsShow from "../views/listings/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/users/:id/edit/",
    name: "users-edit",
    component: UserEdit,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/users/:id",
    name: "users-show",
    component: UserShow,
  },
  {
    path: "/listings",
    name: "listings",
    component: Listings,
  },
  {
    path: "/listings/:id",
    name: "listings-show",
    component: ListingsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
