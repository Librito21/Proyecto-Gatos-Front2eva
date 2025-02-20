import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GatoView from '@/views/GatoView.vue'
import Login_usersView from '@/views/Login_usersView.vue'
import Logup_usersView from '@/views/Logup_usersView.vue'
import DetallesGatoView from '@/views/DetallesGatoView.vue'

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
      path: '/detalles-gato/:id',
      name: 'DetallesGato',
      component: DetallesGatoView,
      props: true
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
    {
      path: '/log-up',
      name: 'Logup',
      component: Logup_usersView,
    },
  ],
})

export default router