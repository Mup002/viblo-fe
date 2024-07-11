import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/user/Home.vue';
import SerieView from '../views/user/SerieView.vue'
import EditorChoiceView from '../views/user/EditorChoiceView.vue';
import TrendingView from '@/views/user/TrendingView.vue';
import RegisterView from '@/views/user/RegisterView.vue';
import LoginView from '@/views/user/LoginView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import NoHeaderLayout from '@/layouts/NoHeaderLayout.vue';
import FollowingView from '@/views/user/FollowingView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active", 
  linkExactActiveClass: "active", 
  routes: [
    
    {
      path:'/',
      component: DefaultLayout,
      children: [
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
        },
        {
          path : '/followings',
          name :'FollowingView',
          component : FollowingView
        }
      ]
    },
    {
      path: '/',
      component : NoHeaderLayout,
      children: [
        {
          path: '/register',
          name : 'RegisterView',
          component : RegisterView
        },
        {
          path: '/login',
          name : 'LoginView',
          component: LoginView
        }
      ]
    }
    
  ]
})

export default router
