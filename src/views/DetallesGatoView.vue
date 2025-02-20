<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <DetallesGatoCard :gato="gato" v-if="gato" />
        <v-alert v-else type="error">No se encontró el gato.</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import DetallesGatoCard from "@/components/DetallesGatoCard.vue";
import { usegatosStore } from "@/stores/gatos";

const route = useRoute();
const gatosStore = usegatosStore();
const gato = ref();

onMounted(() => {
  const id = Number(route.params.id);
  gato.value = gatosStore.gatos.find((g) => g.id_Gato === id);
});
</script>
