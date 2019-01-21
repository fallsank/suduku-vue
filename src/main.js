/*--------------添加rem、reset等前置------------------- */
import "./assets/js/flexible.js";
import "./assets/css/reset.css";
/*---------------------------------------------------- */

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
