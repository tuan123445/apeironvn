/* eslint-disable prettier/prettier */
import {
  createRouter,
  createWebHistory,
  // createMemoryHistory
} from "vue-router";

const router = createRouter({
  mode: "history",
  history: createWebHistory(
    import.meta.env.BASE_URL),
  // history: createMemoryHistory(),
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
    },
    {
      path: "/token",
      name: "token",
      component: () => import("../views/TokenView.vue")
    },
    {
      path: "/events",
      name: "events",
      component: () => import("../views/EventsView.vue")
    }
  ],

});

export default router;