import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SelectExercise from '../views/SelectExercise.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/selectexercise',
    name: 'SelectExercise',
    component: SelectExercise
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
