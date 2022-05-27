/* eslint-disable prettier/prettier */
import {
  createRouter,
  createMemoryHistory
} from "vue-router";

const router = createRouter({
  mode: "history",
  history: createMemoryHistory(),
  routes: [{
      path: "/",
      name: "",
      redirect: {
        name: "home"
      }
    }, {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/apostle",
      name: "apostle",
      component: () => import("../views/ApostleView.vue"),
    },
    {
      path: "/planet",
      name: "planet",
      component: () => import("../views/PlanetView.vue")
    }
  ],
});

export default router;