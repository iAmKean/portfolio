import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'aos/dist/aos.css';
import { auth } from "./lib/firebase";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);

// if not require login
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");

// if requires login
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
