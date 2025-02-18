<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  protectora: {
    type: Object,
    required: true
  }
})
</script>

<template>
<v-card class="protectora-card" max-width="500">
      <v-img class="protectora-card__image" :src="protectora.imagen_Protectora" height="200px" cover></v-img>
      <v-card-title class="protectora-card__title">{{ protectora.nombre_Protectora }}</v-card-title>
      <v-card-subtitle class="protectora-card__subtitle"><strong>Dirección:</strong> {{ protectora.direccion}}</v-card-subtitle>
        <v-card-text class="protectora-card__content">
        <div class="protectora-card__email"><strong>Correo Electrónico:</strong> {{ protectora.email }}</div>
        <div class="protectora-card__schedule"><strong>Horario:</strong> {{ protectora.horario_Atención }}</div>
        <div class="protectora-card__phone"><strong>Teléfono:</strong> {{ protectora.telefono }}</div>
      </v-card-text>
    </v-card>
  </template>
  