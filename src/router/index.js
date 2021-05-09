import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Planets from '@/views/Planets.vue'
import Starships from '@/views/Starships.vue'
import viewDetails from '@/views/viewDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets

  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships

  },
  {
    path: '/viewDetails',
    name: 'viewDetails',
    component: viewDetails,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
