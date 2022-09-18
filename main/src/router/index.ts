import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import App1View from '../views/App1View.vue'
import App2View from '../views/App2View.vue'

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
      path: '/app1',
      name: 'app1',
      component: App1View
    },
    {
      path: '/app2',
      name: 'app2',
      component: App2View
    }
  ]
})

export default router
