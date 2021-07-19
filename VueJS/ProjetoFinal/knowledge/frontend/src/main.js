import "font-awesome/css/font-awesome.css";

import Vue from "vue";
import App from "@/App.vue";
import "@/config/bootstrap";
import "@/config/msgs";
import store from "@/config/store";
import router from "@/config/router";

Vue.config.productionTip = false;

require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjI2Njk0OTQ0LCJleHAiOjE2MjY5NTQxNDR9.73N4wCcqMEaxvdl-g_NAz7bWwC-XvrDl61nORnDEGOE";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
