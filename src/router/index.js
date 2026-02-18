import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../components/Login.vue'
import MessengerView from '../components/Messenger.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/messenger', component: MessengerView },
  { path: '/login', component: LoginView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
