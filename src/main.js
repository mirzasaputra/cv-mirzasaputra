import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTyper from "vue-typer";
import VueEllipse from "vue-ellipse-progress";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "jquery/dist/jquery.min"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@/assets/css/main.css";

Vue.use(VueTyper);
Vue.use(VueEllipse)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
