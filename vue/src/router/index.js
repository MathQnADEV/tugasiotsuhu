import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import SuhuKelas from "../views/SuhuKelas.vue";
// import InputSuhu from '../views/InputSuhu.vue'
import SuhuKelasView from '../views/SuhuKelasView.vue'
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "/dashboard", name: "Dashboard", component: Dashboard },
      { path: "/suhukelas", name: "SuhuKelas", component: SuhuKelas },
      // { path: "/inputsuhu", name: "InputSuhu", component: InputSuhu },
      {
        path: "/suhukelas/create",
        name: "SuhuKelasCreate",
        component: SuhuKelasView,
      },
      {
        path: "/suhukelas/:id",
        name: "SuhuKelasView",
        component: SuhuKelasView,
      }, 
    ],
  },
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (
    store.state.user.token &&
    (to.meta.isGuest)
  ) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
