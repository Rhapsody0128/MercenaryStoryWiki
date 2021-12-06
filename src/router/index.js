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
    component: () => import(/* webpackChunkName: "Hero" */ "../views/Hero.vue"),
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () =>
      import(/* webpackChunkName: "Favorite" */ "../views/Favorite.vue"),
  },
  {
    path: "/army",
    name: "Army",
    component: () => import(/* webpackChunkName: "Army" */ "../views/Army.vue"),
  },
  {
    path: "/soldier",
    name: "Soldier",
    component: () =>
      import(/* webpackChunkName: "Soldier" */ "../views/Soldier.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("#"),
  routes,
});

export default router;
