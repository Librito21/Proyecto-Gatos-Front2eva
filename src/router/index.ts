import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detalles_GatosView from '../views/Detalles_GatosView.vue'
import GatoView from '@/views/GatoView.vue'
import Login_usersView from '@/views/Login_usersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/protectoras',
      name: 'protectoras',
      component: () => import('../views/ProtectorasView.vue'),
    },
    {
      path: '/detalles-gatos',
      name: 'gatos',
      component: Detalles_GatosView,
    },
    {
      path: '/gato',
      name: 'gato',
      component: GatoView,
    },
    {
      path: '/log-in',
      name: 'Login',
      component: Login_usersView,
    },
  ],
})

export default router