import { RouteRecordRaw } from "vue-router";
const LoginRouter: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
];
export default LoginRouter;
