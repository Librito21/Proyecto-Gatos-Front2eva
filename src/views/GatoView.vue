<script setup lang="ts">
import { usegatosStore } from '@/stores/gatos'

const store = usegatosStore()

store.fetchGato()
/*store.findAll()*/

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
      <v-col v-for="gato in store.gatos" :key="gato.id_Gato">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="gato.imagen_Gato" height="200px" cover></v-img>
          <v-card-title>
          <div> {{ gato.nombre_Gato }}</div>
          </v-card-title>
          <v-card-subtitle>{{ gato.raza }}</v-card-subtitle>
          <v-card-text>
            <div><strong>Edad:</strong> {{ gato.edad }} años</div>
            <div><strong>Sexo:</strong> {{ gato.sexo }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-btn color="primary" @click="insertGato">
      Insertar Gato
    </v-btn>
  </v-container>
</template>