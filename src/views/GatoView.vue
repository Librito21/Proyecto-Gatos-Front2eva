<script setup lang="ts">
import { usegatosStore } from '@/stores/gatos'
import GatoCard from '@/components/GatoCard.vue'

const store = usegatosStore()

store.fetchGato()
</script>

<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col v-for="gato in store.gatos" :key="gato.id_Gato" cols="12" sm="6" md="4" lg="3">
        <GatoCard :gato="gato" />
      </v-col>
    </v-row>
  </v-container>
</template>
