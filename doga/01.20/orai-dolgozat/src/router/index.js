import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Flowers from '../views/Flowers.vue'
import FlowerDetails from '../views/FlowerDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/flowers', component: Flowers },
  { path: '/flowers/:id', component: FlowerDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
