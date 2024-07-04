import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/user/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/newest',
      name: 'Home',
      component: Home,
    },
  ]
})

export default router
