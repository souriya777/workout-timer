import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'workout',
    component: () => import('../views/Workout')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/Edit'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
