<script setup lang="ts">
import GatoCard from '@/components/GatoCard.vue';
import { usegatosStore } from '@/stores/gatos';

const store = usegatosStore()

store.fetchGato()

</script>

<template>
<v-card class="mx-auto" max-width="644" v-for="gato in store.gatos" :key="gato.id_Gato">
    <v-img :src="gato.imagen_Gato" height="200px" cover></v-img>
    <v-card-title>{{ gato.nombre_Gato }}</v-card-title>
    <v-card-subtitle>{{ gato.raza }}</v-card-subtitle>
    <v-card-text>
        <div><strong>Sexo:</strong> {{ gato.sexo }}</div>
        <div><strong>Edad:</strong> {{ gato.edad }} años</div>
    </v-card-text>
  </v-card>
</template>