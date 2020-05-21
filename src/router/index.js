import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/User.vue";
import UserDetail from "../views/user/UserDetail.vue";
import UserEdit from "../views/user/UserEdit.vue";
import UserStart from "../views/user/UserStart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/user",
    name:"User",
    component: User
  },
  {
    path: "/user/detail",
    name: "UserDetail",
    component: UserDetail
  },
  {
    path: "/user/edit",
    name: "UserEdit",
    component: UserEdit
  },
  {
    path: "/user/start",
    name: "UserStart",
    component: UserStart
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
