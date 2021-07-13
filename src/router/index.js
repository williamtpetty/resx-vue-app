import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Logout from "../views/Logout.vue";
import UserShow from "../views/users/Show.vue";
import UserEdit from "../views/users/Edit.vue";
import ConversationShow from "../views/users/ConversationShow.vue";
import Listings from "../views/listings/Index.vue";
import ListingsNew from "../views/listings/New.vue";
import ListingsShow from "../views/listings/Show.vue";
import ListingsEdit from "../views/listings/Edit.vue";

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
    path: "/users/:id/edit",
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
    path: "/conversations/:id",
    name: "conversation-show",
    component: ConversationShow,
  },
  {
    path: "/listings",
    name: "listings",
    component: Listings,
  },
  {
    path: "/listings/new",
    name: "listings-new",
    component: ListingsNew,
  },
  {
    path: "/listings/:id/edit",
    name: "listings-edit",
    component: ListingsEdit,
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
