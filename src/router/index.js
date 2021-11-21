import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/hero",
    name: "Hero",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hero.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("#"),
  routes,
});

export default router;
