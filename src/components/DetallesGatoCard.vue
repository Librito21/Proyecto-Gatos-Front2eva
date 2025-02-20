<template>
  <v-card>
    <v-img :src="gato.imagen_Gato" cover></v-img>
    <v-card-title>{{ gato.nombre_Gato }}</v-card-title>
    <v-card-subtitle>{{ gato.raza }} - {{ gato.edad }} años</v-card-subtitle>
    <v-card-text>
      <p><strong>Sexo:</strong> {{ gato.sexo }}</p>
      <p><strong>Esterilizado:</strong> {{ gato.esterilizado }}</p>
      <p><strong>Protectora:</strong> {{ protectora?.nombre_Protectora || "No disponible" }}</p>
      <p><strong>Descripción:</strong> {{ gato.descripcion_Gato }}</p>      
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="/gato">Volver a gatos</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type GatoDto from "../stores/dtos/gato.dto";
import type ProtectoraDto from "../stores/dtos/protectoras.dto";

defineProps<{ gato: GatoDto; protectora?: ProtectoraDto }>();
</script>
