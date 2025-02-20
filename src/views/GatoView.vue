<script setup lang="ts">
import { usegatosStore } from '@/stores/gatos'
import GatoCard from '@/components/GatoCard.vue'

const store = usegatosStore()

store.fetchGato()

</script>

<template>
  <v-container fluid class="d-flex" style="margin-top: 110px;">
    <v-row>
      <v-col v-for="gato in store.gatos" :key="gato.id_Gato" cols="1" sm="5" md="4" lg="4">
        <GatoCard :gato="gato" />
      </v-col>
    </v-row>
    </v-container>
</template>