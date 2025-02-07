<script setup lang="ts">
import { useGatoStore } from '@/stores/gato'

const store = useGatoStore()

store.findAll()    

function insertGato() {
    store.createGato({
        id: 1,
        Nombre: 'JUANJO',
        Raza: 'NEGRO',
        Edad: 3,
        Sexo: 'MACHO'
    })
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="gato in store.gatos" :key="gato.id">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="gato.Imagen" height="200px" cover></v-img>
          <v-card-title>{{ gato.Nombre }}</v-card-title>
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