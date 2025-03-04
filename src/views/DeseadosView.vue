<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usegatosStore } from '@/stores/gatos';
import DeseadosGatoCard from '@/components/DeseadosGatoCard.vue';

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
      <DeseadosGatoCard v-for="gato in gatosDeseados" :key="gato.id_Gato" :gato="gato" @eliminarGato="eliminarGato" />
    </div>
  </div>
</template>

<style scoped>
.deseados {
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
}

.deseados__titulo {
  font-size: 2rem;
  margin-bottom: 20px;
}

.deseados__lista {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;
}

.gato-card {
  width: 90%;
  max-width: 400px;
  height: 338px;
}

@media (min-width: 600px) {
  .deseados__lista {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .deseados {
    max-width: 1200px;
    margin-top: 95px;
  }

  .deseados__lista {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
