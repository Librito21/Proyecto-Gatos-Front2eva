<template>
    <div class="detalles-gato-card">
      <img :src="gato.imagen_Gato" :alt="gato.nombre_Gato" class="gato-imagen" />
      <div class="detalles">
        <h2>{{ gato.nombre_Gato }}</h2>
        <p><strong>Sexo:</strong> {{ gato.sexo }}</p>
        <p><strong>Edad:</strong> {{ gato.edad }} años</p>
        <p><strong>Descripción:</strong> {{ gato.descripcion_Gato }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import type GatoDto from '@/dtos/gato.dto';
  
  defineProps<{ gato: GatoDto }>();
  </script>
  
  <style lang="scss" scoped>
  .detalles-gato-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  .gato-imagen {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  </style>
  