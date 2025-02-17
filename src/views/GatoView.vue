<script setup lang="ts">
import { usegatosStore } from '@/stores/gatos'
import GatoCard from '@/components/GatoCard.vue'

const store = usegatosStore()

store.fetchGato()

function insertGato() {
  store.createGato({
    id_Gato: 1,
    nombre_Gato: 'JUANJO',
    raza: 'NEGRO',
    edad: 3,
    sexo: 'Macho',
    id_Protectora: 0,
    esterilizado: '',
    descripcion_Gato: '',
    imagen_Gato: ''
  })
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="gato in store.gatos" :key="gato.id_Gato" cols="1" sm="6" md="4" lg="2">
        <GatoCard :gato="gato" />
      </v-col>
    </v-row>

    <v-btn color="primary" @click="insertGato">
      Insertar Gato
    </v-btn>
  </v-container>
</template>