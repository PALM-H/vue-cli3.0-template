import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import api from "./utils/api";
import utils from "./utils/utils";
import "./utils/filters";
Vue.config.productionTip = false;
Vue.use(api);
Vue.use(utils);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
