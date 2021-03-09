import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Modal",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Modal.vue"),
  },
  {
    path: "/lista",
    name: "Lista",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },

  {
    path: "/drawer",
    name: "Drawer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Drawer.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
