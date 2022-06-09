import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/mntn',
    name: 'mntn',
    meta: { layout: 'others' },
    component: () => import(/* webpackChunkName: "about" */ '../views/MNTN.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
