import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView, },
    { path: "/about", name: "about", component: () => import("../views/AboutView.vue"), },
    { path: "/branches", name: "branches", component: () => import("@/pages/BranchesPage.vue"), },
    { path: "/computers", name: "computers", component: () => import("@/pages/ComputersPage.vue"), },
    { path: "/air-conditioners", name: "air-conditioners", component: () => import("@/pages/AirConditionersPage.vue"), },
  ],
});

export default router;
