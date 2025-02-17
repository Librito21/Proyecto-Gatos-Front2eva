<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  gato: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="gato.imagen_Gato" height="200px" cover></v-img>
    <v-card-title>{{ gato.nombre_Gato }}</v-card-title>
    <v-card-subtitle>{{ gato.raza }}</v-card-subtitle>
    <v-card-text>
        <div><strong>Sexo:</strong> {{ gato.sexo }}</div>
        <div><strong>Edad:</strong> {{ gato.edad }} años</div>
    </v-card-text>
  </v-card>
</template>
