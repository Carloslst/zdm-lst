import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Layout from "@/layout/index.vue";

declare module "vue-router" {
  interface _RouteRecordBase {
    hidden?: boolean | string | number;
  }
}

const constantFiles = import.meta.glob("./constantModules/*.ts", {
  eager: true,
});
let constantModules: Array<RouteRecordRaw> = [];
for (const path in constantFiles) {
  // const module = await constantFiles[path]();
  constantModules = constantModules.concat(
    (constantFiles[path] as any).default,
  );
}

const asyncFiles = import.meta.glob("./permissionModules/*.ts", {
  eager: true,
});
let permissionModules: Array<RouteRecordRaw> = [];
for (const item in asyncFiles) {
  // const module = await asyncFiles[item]();
  permissionModules = permissionModules.concat(
    (asyncFiles[item] as any).default,
  );
}

export const constantRoutes: Array<RouteRecordRaw> = [
  /* 省略其他路由配置 */

  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        // component: () => import("@/views/dashboard/index.vue"),
        component: () => import("@/views/tools/test.vue"),
        meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },
  ...constantModules,
];

export const asyncRoutes: Array<RouteRecordRaw> = [];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
if (permissionModules.length > 0) {
  asyncRoutes.push(...permissionModules);
} else {
  console.log("No module found in './permissionModules/*.ts'");
}

const routes: Array<RouteRecordRaw> = [...constantRoutes];
if (permissionModules.length > 0) {
  routes.push(...permissionModules);
} else {
  console.log("No module found in './permissionModules/*.ts'");
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
