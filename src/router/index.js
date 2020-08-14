import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: () => import(/* webpackChunkName: "exercises" */ '../views/Exercises.vue')
  },
  {
    path: '/workouts',
    name: 'Workouts',
    component: () => import(/* webpackChunkName: "workouts" */ '../views/Workouts.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (!store.authenticated && localStorage.getItem("store") != null){
//     let stored = JSON.parse(localStorage.getItem("store"))
//     store.credentials = stored.credentials
//     store.token = stored.token
//     store.authenticated = true
//   }
//   if (to.matched.some(record => record.meta.requiresAuth))
//     if (!store.authenticated) next({ name: 'Login' })
//     else next()
//   else next()
// })

export default router
