import Vue from 'vue'
import VueRouter from 'vue-router'
import GameTab from '../views/GameTab.vue'
import EssayTab from '../views/EssayTab.vue'
import Mechanics from '../views/Mechanics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    name: 'Game',
    component: GameTab
  },
  {
    path: '/mechanics',
    name: 'Mechanics',
    component: Mechanics
  },
  {
    path: '/essay',
    name: 'Essay',
    component: EssayTab
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Essay',
    component: EssayTab
  },
]

const router = new VueRouter({
  routes
})

export default router
