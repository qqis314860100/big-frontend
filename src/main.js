import Vue from "vue";
import App from "./App.vue";
import "./assets/js/vee-validate";

Vue.config.productionTip = false;
Vue.locale = "c123123";
console.log(Vue.locale);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
