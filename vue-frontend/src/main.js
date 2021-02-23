import Vue from "vue";
import App from "./app.vue";
import router from "./router/index.js";
import Scroller from "scroller";
import Echarts from "echarts";
import store from "./vuex/store/index.js";
import axios from "axios";
import api from "./api/api.js";
import util from "./utils/vendors.js";

Vue.use(Scroller);

Vue.prototype.$Vue = Vue;

Vue.prototype.$echarts = Echarts;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$utils = util;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#chaos");
