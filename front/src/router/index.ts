import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: () => import("@/pages/BranchesPage.vue"), },
    { path: "/branches", name: "branches", component: () => import("@/pages/BranchesPage.vue"), },
    { path: "/computers", name: "computers", component: () => import("@/pages/ComputersPage.vue"), },
    { path: "/air-conditioners", name: "air-conditioners", component: () => import("@/pages/AirConditionersPage.vue"), },
  ],
});

export default router;
