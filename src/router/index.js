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
    path:"/user/:id",
    name:"User",
    component: User,
    props: true,
    children: [
      {
        path: 'detail',
        component: UserDetail,
        props: true,

      },
      {
        path: 'edit',
        component: UserEdit,
        props: true,
        name: 'userEdit'
      },
      {
        path: 'start',
        component: UserStart,
        props: true
      }
      
    ]
  },
  {
    path: '*',
    redirect: '/'
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
