/* eslint-disable vue/multi-word-component-names */
/* eslint-disable prettier/prettier */
import {
  createApp
} from "vue";

import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";

// Default theme
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/loader.scss";
import "./style/style.scss";
import "./style/header.scss";
import '../node_modules/@splidejs/splide/dist/css/splide.min.css';


const app = createApp(App);

app.use(router);
app.use(VueApexCharts);

app.mount("#app");