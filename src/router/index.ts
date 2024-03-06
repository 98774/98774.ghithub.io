import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/tips-and-tricks',
      name: 'tips-and-tricks',
      component: () => import('../views/ProgrammingTricksView.vue')
    },

    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projects/dactyl-manuform',
      name: 'dactyl-manuform',
      component: () => import('../views/ProjectDactylManuformView.vue')
    },
    {
      path: '/projects/mcserver',
      name: 'mcserver',
      component: HomeView
    },
    {
      path: '/projects/wireless-grid',
      name: 'wireless-grid',
      component: HomeView
    },
    {
      path: '/projects/srt-program',
      name: 'srt-program',
      component: HomeView
    },

    //Redirect to home when not found
    {
      path: '/:pathMatch(.*)*',
      component: HomeView
    }
  ]
})

export default router
