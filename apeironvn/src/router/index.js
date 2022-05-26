/* eslint-disable prettier/prettier */
import {
  createRouter,
  createWebHistory
} from "vue-router";

const router = createRouter({
  mode: "history",
  history: createWebHistory(
    import.meta.env.BASE_URL),
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ApostleView.vue"),
    },
  ],
});

export default router;