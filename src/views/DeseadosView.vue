<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { usegatosStore } from '@/stores/gatos';
import GatoCard from '@/components/GatoCard.vue';

const gatosStore = usegatosStore();
const { gatosDeseados, errorMessage } = storeToRefs(gatosStore);

onMounted(() => {
  gatosStore.obtenerGatosDeseados();
});
</script>

<template>
  <div class="deseados">
    <h1 class="deseados__titulo">Mis Gatos Deseados</h1>
    <p v-if="errorMessage" class="deseados__error">{{ errorMessage }}</p>
    <div v-if="gatosDeseados.length > 0" class="deseados__lista">
      <GatoCard v-for="gato in gatosDeseados" :key="gato.id" :gato="gato" />
    </div>
    <p v-else-if="!errorMessage" class="deseados__mensaje">No tienes gatos en tu lista de deseados.</p>
  </div>
</template>

<style scoped>
.deseados {
  max-width: 800px;
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.deseados__error {
  color: red;
  font-size: 1.2rem;
}

.deseados__mensaje {
  font-size: 1.2rem;
  color: #555;
}
</style>
