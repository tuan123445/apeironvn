/* eslint-disable prettier/prettier */
import {
  createApp
} from "vue";

import App from "./App.vue";
import router from "./router";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/loader.scss";
import "./style/style.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");