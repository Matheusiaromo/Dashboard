import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import routes from "@/router/routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "default"
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        layout: "default"
      }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      meta: {
        layout: "default"
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        layout: "dashboard",
        login: true
      }
    }
  ]
});

router.beforeEach(routes);

export default router;
