import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/user/Home.vue';
import SerieView from '../views/user/SerieView.vue'
import EditorChoiceView from '../views/user/EditorChoiceView.vue';
import TrendingView from '@/views/user/TrendingView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active", 
  linkExactActiveClass: "active", 
  routes: [
    
    {
      path: '/',
      redirect: '/newest'  
    },
    {
      path: '/newest',
      name: 'Home',
      component: Home,
    },
    {
      path: '/serie',
      name : 'SerieView',
      component: SerieView
    },
    {
      path : '/editor-choice',
      name : 'EditorChoiceView',
      component : EditorChoiceView
    },
    {
      path : '/trending',
      name : 'TrendingView',
      component : TrendingView
    }
  ]
})

export default router
