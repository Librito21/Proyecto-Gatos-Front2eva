<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <DetallesGatoCard v-if="gato" :gato="gato" :protectora="protectora" />
        <v-alert v-else-if="cargando" type="info">Cargando...</v-alert>
        <v-alert v-else type="error">No se encontró el gato.</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import DetallesGatoCard from "@/components/DetallesGatoCard.vue";
import { usegatosStore } from "@/stores/gatos";
import { useprotectorasStore } from "@/stores/protectoras";

const route = useRoute();
const gatosStore = usegatosStore();
const protectorasStore = useprotectorasStore();

const gato = ref();
const protectora = ref();
const cargando = ref(true);

const obtenerGato = async () => {
  const id = Number(route.params.id);

  if (gatosStore.gatos.length === 0) {
    await gatosStore.fetchGato();
  }

  gato.value = gatosStore.gatos.find((g) => g.id_Gato === id);

  if (gato.value) {
    if (protectorasStore.protectoras.length === 0) {
      await protectorasStore.fetchProtectora();
    }
    protectora.value = protectorasStore.protectoras.find(
      (p) => p.id_Protectora === gato.value.id_Protectora
    );
  }

  cargando.value = false;
};

onMounted(() => {
  obtenerGato();
});

watch(() => route.params.id, obtenerGato);
</script>
