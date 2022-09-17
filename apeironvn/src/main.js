/* eslint-disable vue/multi-word-component-names */
/* eslint-disable prettier/prettier */
import {
  createApp
} from "vue";

import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import ElementPlus from "element-plus";


// Default theme
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@mdi/font/css/materialdesignicons.css";
import "./style/loader.scss";
import "./style/style.scss";
import "./style/header.scss";
import "./style/star.scss"
import '../node_modules/@splidejs/splide/dist/css/splide.min.css';
import "element-plus/dist/index.css";

import {
  TroisJSVuePlugin
} from 'troisjs';


const app = createApp(App);
app.use(router);
app.use(VueApexCharts);
app.use(TroisJSVuePlugin);
app.use(ElementPlus);

app.mount("#app");