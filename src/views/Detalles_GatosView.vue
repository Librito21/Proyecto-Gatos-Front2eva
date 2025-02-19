<template>
  <div class="detalles-gato-view">
    <DetallesGatoCard v-if="gato" :gato="gato" />
    <p v-else>Cargando detalles del gato...</p>
    <button @click="volverAHome">Volver a Home</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usegatosStore } from '@/stores/gatos';
import DetallesGatoCard from '@/components/DetallesGatoCard.vue';

const route = useRoute();
const router = useRouter();
const store = usegatosStore();
const gato = ref(null);

onMounted(async () => {
  const id = parseInt(route.params.id as string);
  await store.fetchGato();
  gato.value = store.gatos.find(g => g.id_Gato === id) || null;
});

const volverAHome = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped>
.detalles-gato-view {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
button {
  background-color: #ff5500;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}
button:hover {
  background-color: #fb7c3c;
}
</style>
