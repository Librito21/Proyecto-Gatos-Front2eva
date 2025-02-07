<script setup lang="ts">
import { useprotectorasStore } from '@/stores/protectoras';


const store = useprotectorasStore()
store.findAll()


</script>

<template>
  <div class="d">
    <h1>Pagina de las protectoras de gatos</h1>
  </div>
  <v-col v-for="protectora in store.protectoras" :key="protectora.Id_Protectora">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="protectora.Imagen_Protectora" height="200px" cover></v-img>
          <v-card-title>{{ protectora.Nombre_Protectora }}</v-card-title>
          <v-card-subtitle>{{ protectora.Direccion }}</v-card-subtitle>
          <v-card-text>
            <div><strong>Correo Electronico:</strong> {{ protectora.Correo_Protectora }} años</div>
            <div><strong>Horario:</strong> {{ protectora.Horario_Atención }}</div>
            <div><strong>Telefono:</strong> {{ protectora.Telefono_Protectora }}</div>
          </v-card-text>
        </v-card>
      </v-col>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
