import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/user/Home.vue';
import SerieView from '../views/user/SerieView.vue'
import EditorChoiceView from '../views/user/EditorChoiceView.vue';
import TrendingView from '@/views/user/TrendingView.vue';
import RegisterView from '@/views/user/RegisterView.vue';
import LoginView from '@/views/user/LoginView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import OnlyHeaderLayout from '@/layouts/OnlyHeaderLayout.vue';
import NoHeaderLayout from '@/layouts/NoHeaderLayout.vue';
import FollowingView from '@/views/user/FollowingView.vue';
import PostView  from '@/views/user/PostView.vue';
import BookmarkView from '@/views/user/BookmarkView.vue';
import ArticleView from '@/views/user/ArticleView.vue';
import store from '@/store/index.js';
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
          component : FollowingView,
          // beforeEnter : requireAuth,
        },
        {
          path: '/bookmarks',
          name: 'BookmarkView',
          component:  BookmarkView
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
        },
        
        
      ]
    },
    {
      path: '/',
      component: OnlyHeaderLayout,
      children: [
        {
          path: '/post',
          name : 'PostView',
          component: PostView
        },
        {
          path: '/users/articles/:url',
          name : 'ArticleView',
          component: ArticleView
        }
      ]
    }

    
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//       if (!store.getters.getLoginApiStatus) {
//           next({
//               path: '/login',
//               query: { redirect: '/' } 
//           });
//       } else {
//           next();
//       }
//   } else {
//       next();
//   }
// });
export default router
