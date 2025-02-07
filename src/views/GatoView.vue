<script setup lang="ts">
import { usegatosStore } from '@/stores/gatos'

const store = usegatosStore()

store.findAll()    

function insertGato() {
    store.createGato({
      Id_Gato: 1,
      Nombre_Gato: 'JUANJO',
      Raza: 'NEGRO',
      Edad: 3,
      Sexo: 'MACHO',
      Id_Protectora: 0,
      Esterilizado: '',
      Descripcion_Gato: '',
      Imagen_Gato: ''
    })
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="gato in store.gatos" :key="gato.Id_Gato">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="gato.Imagen_Gato" height="200px" cover></v-img>
          <v-card-title>{{ gato.Nombre_Gato }}</v-card-title>
          <v-card-subtitle>{{ gato.Raza }}</v-card-subtitle>
          <v-card-text>
            <div><strong>Edad:</strong> {{ gato.Edad }} años</div>
            <div><strong>Sexo:</strong> {{ gato.Sexo }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <v-btn color="primary" @click="insertGato">
      Insertar Gato
    </v-btn>
  </v-container>
</template>