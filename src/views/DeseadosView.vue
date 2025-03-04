<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usegatosStore } from '@/stores/gatos';
import GatoCard from '@/components/GatoCard.vue';

// Obtener la store
const gatosStore = usegatosStore();
const gatosDeseados = computed(() => gatosStore.gatosDeseados);

onMounted(async () => {
  await gatosStore.obtenerGatosDeseados();
  console.log('Gatos deseados al montar la vista:', gatosDeseados.value);
});
</script>

<template>
  <div class="deseados">
    <h1 class="deseados__titulo">Mis Gatos Deseados</h1>
    <p v-if="gatosDeseados.length === 0" class="deseados__mensaje">No tienes gatos en tu lista de deseados.</p>
    <div v-else class="deseados__lista">
      <GatoCard v-for="gato in gatosDeseados" :key="gato.id_Gato" :gato="gato" style="width: 400px; height: 338px;"/>
    </div>
  </div>
</template>

<style scoped>
.deseados {
  max-width: 800px;
  margin: 20px auto;
  margin-top: 95px;
  padding: 20px;
  text-align: center;
}

.deseados__titulo {
  font-size: 2rem;
  margin-bottom: 20px;
}

.deseados__lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.deseados__mensaje {
  font-size: 1.2rem;
  color: #555;
}
</style>
