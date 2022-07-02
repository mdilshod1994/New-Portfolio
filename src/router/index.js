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
    component: () => import('../views/MNTN.vue')
  },
  {
    path: '/sliders',
    name: 'sliders',
    meta: { layout: 'others' },
    component: () => import('../components/expirements/Slider.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
