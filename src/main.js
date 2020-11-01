import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
import "./assets/js/vee-validate";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "ali";

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
