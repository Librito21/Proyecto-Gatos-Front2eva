<script setup lang="ts">
import { defineProps } from 'vue';
import { ref } from 'vue';

const props = defineProps({
  conejo: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <v-card class="conejo-card" max-width="344">
    <v-card>
      <v-img class="conejo-card__imagen" :src="conejo.imagen_Conejo" height="200px"></v-img>
      <v-card-title>{{ conejo.nombre_Conejo }}</v-card-title>
      <v-card-subtitle>{{ conejo.raza }}</v-card-subtitle>
      <v-card-text>
        <div><strong>Sexo:</strong> {{ conejo.sexo }}</div>
        <div><strong>Edad:</strong> {{ conejo.edad }} años</div>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card {
  font-family: $fuente-textos;
}

.conejo-card__imagen {
  :deep(.v-img__img--contain) {
    object-fit: cover;
  }
}

.conejo-card__mensaje {
  text-align: center;
  color: green;
  margin-top: $espacio-mediano;
}


</style>