import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.authenticated) next({ name: 'Menu' })
      else next()
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "exercises" */ '../views/Exercises.vue')
  },
  {
    path: '/workouts',
    name: 'Workouts',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "workouts" */ '../views/Workouts.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.authenticated && localStorage.getItem("Credentials") != null){
    store.credentials = JSON.parse(localStorage.getItem("Credentials"))
    store.authenticated = true
  }
  if (to.matched.some(record => record.meta.requiresAuth))
    if (!store.authenticated) next({ name: 'Home' })
    else next()
  else next()
})

export default router
