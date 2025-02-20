<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <DetallesGatoCard v-if="gato" :gato="gato" />
        <v-alert v-else-if="cargando" type="info">Cargando...</v-alert>
        <v-alert v-else type="error">No se encontró el gato.</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import DetallesGatoCard from "../components/DetallesGatoCard.vue";
import { usegatosStore } from "../stores/gatos";

const route = useRoute();
const gatosStore = usegatosStore();
const gato = ref();
const cargando = ref(true);

const obtenerGato = async () => {
  const id = Number(route.params.id);
  if (gatosStore.gatos.length === 0) {
    await gatosStore.fetchGato(); // Cargar gatos si no están en la store
  }
  gato.value = gatosStore.gatos.find((g) => g.id_Gato === id);
  cargando.value = false;
};

onMounted(() => {
  obtenerGato();
});

// Si cambia el parámetro de la ruta (por ejemplo, en una navegación interna), actualizar el gato
watch(() => route.params.id, obtenerGato);
</script>
