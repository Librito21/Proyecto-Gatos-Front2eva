import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GatoView from '@/views/GatoView.vue'
import DetallesGatoView from '@/views/DetallesGatoView.vue'
import FAQ from '@/views/FAQView.vue';
import PerfilView from '@/views/PerfilView.vue'
import DeseadosView from '@/views/DeseadosView.vue'
import Iniciar_sesionView from '@/views/Iniciar_sesionView.vue'
import RegistrarseView from '@/views/RegistrarseView.vue'

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
      path: "/faq",
      name: "FAQ",
      component: FAQ,
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: PerfilView,
    },
    {
      path: '/deseados',
      name: 'deseados',
      component: DeseadosView,
    },
    {
      path: '/iniciar-sesion',
      name: 'iniciar-sesion',
      component: Iniciar_sesionView,
    },
    {
      path: '/registrarse',
      name: 'registrarse',
      component: RegistrarseView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }; // Desplazamiento suave al inicio de la página
  }
})

export default router