/* eslint-disable prettier/prettier */
import {
  createRouter,
  createWebHistory,
  // createMemoryHistory
} from "vue-router";
//
const router = createRouter({
  mode: "history",
  history: createWebHistory(
    import.meta.env.BASE_URL),
  // history: createMemoryHistory(),
  routes: [{
      path: "/",
      name: "",
      meta: {
        dropdown: false,
        dropdownItem: false
      },
      redirect: {
        name: "home"
      }
    }, {
      path: "/home",
      name: "home",
      meta: {
        dropdown: false,
        dropdownItem: false
      },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/apostle",
      name: "apostle",
      meta: {
        dropdown: false,
        dropdownItem: false
      },
      component: () => import("../views/ApostleView.vue"),
    },
    {
      path: "/planet",
      name: "planet",
      meta: {
        dropdown: false,
        dropdownItem: false
      },
      component: () => import("../views/PlanetView.vue")
    },
    {
      path: "/star",
      name: "star",
      meta: {
        dropdown: false,
        dropdownItem: false
      },
      component: () => import("../views/StarView.vue")
    },
    {
      path: "/token",
      name: "token",
      meta: {
        dropdown: false,
        dropdownItem: false
      },
      component: () => import("../views/TokenView.vue")
    },
    {
      path: "/events",
      name: "events",
      meta: {
        dropdown: true,
        dropdownItem: true
      },
      component: () => import("../views/EventsView.vue")
    },
    {
      path: "/more",
      name: "more",
      meta: {
        dropdown: true,
        dropdownItem: false
      },
    },
    {
      path: "/gameplay",
      name: "gameplay",
      meta: {
        dropdown: true,
        dropdownItem: true
      },
      component: () => import("../views/GameplayView.vue")
    },
    {
      path: "/breed",
      name: "breed",
      meta: {
        dropdown: true,
        dropdownItem: true
      },
      component: () => import("../views/BreedView.vue")
    },
    {
      path: "/marketplace",
      name: "marketplace",
      meta: {
        dropdown: true,
        dropdownItem: true
      },
      beforeEnter() {
        // Put the full page URL including the protocol http(s) below
        window.location.replace("https://marketplace.apeironnft.com/")
      }
    },
    {
      path: "/constellation",
      name: "constellation",
      meta: {
        dropdown: true,
        dropdownItem: true
      },
      component: () => import("../views/ConstellationView.vue")
    },
    {
      path: "/alliances",
      name: "alliances",
      meta: {
        dropdown: true,
        dropdownItem: true
      },
      component: () => import("../views/AlliancesView.vue")
    },
    {
      path: "/expedition",
      name: "Expedition",
      meta: {
        dropdown: true,
        dropdownItem: true
      },
      component: () => import("../views/ExpeditionView.vue")
    },
  ],

});

export default router;