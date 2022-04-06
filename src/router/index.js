//Import Vue
import Vue from "vue";
import VueRouter from "vue-router";

//Import views
import Home from "../views/Home";
import Search from "../views/Search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: '',
  routes,
});

export default router;