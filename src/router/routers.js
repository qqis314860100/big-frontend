import Home from "../views/Home.vue";
import Router from "vue-router";

const Login = () => import(/* webpackChunkName:'login' */ "../views/Login.vue");
const Forget = () =>
  import(/* webpackChunkName:'login' */ "../views/Forget.vue");
const Reg = () => import(/* webpackChunkName:'login' */ "../views/Reg.vue");

export default {
  routes: [
    {
      path: "/",
      component: Home,
      children: [{ path: "", name: "home", component: Home }],
    },
  ],
};
