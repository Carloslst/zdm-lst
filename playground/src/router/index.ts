import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Test from '../views/tools/test.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'tes',
    component: Test
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router