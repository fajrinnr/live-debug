import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import ChatHome from '../views/TanyaDokter/components/ChatHome.vue'
import ChatDetail from '../views/TanyaDokter/components/ChatDetail.vue'
import TanyaDokter from '../views/TanyaDokter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tanya-dokter',
    name: 'tanya dokter',
    component: TanyaDokter,
    children: [
      {
        path: '/',
        name: 'chat home',
        component: ChatHome
      },
      {
        path: '/:id',
        name: 'chat',
        component: ChatDetail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
