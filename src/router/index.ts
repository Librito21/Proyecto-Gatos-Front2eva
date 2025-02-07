import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detalles_GatosView from '../views/Detalles_GatosView.vue'
import GatoView from '@/views/GatoView.vue'

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
      name: 'gatosss',
      component: Detalles_GatosView,
    },
    {
      path: '/gato',
      name: 'gato',
      component: GatoView,
    },
  ],
})

export default router
