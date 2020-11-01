import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import(/* webpackChunkName:'login' */ "../views/Login.vue");
const Forget = () =>
  import(/* webpackChunkName:'login' */ "../views/Forget.vue");
const Reg = () => import(/* webpackChunkName:'login' */ "../views/Reg.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/reg",
    name: "reg",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Reg,
  },
  {
    path: "/forget",
    name: "forget",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Forget,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
