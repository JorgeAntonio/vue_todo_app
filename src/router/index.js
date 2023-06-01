import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "../layouts/BaseLayout.vue";

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
