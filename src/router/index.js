import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/news/:id",
    name: "News",
    component: () => import("@/views/NewsView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
