<script setup lang="ts">
import { useprotectorasStore } from '@/stores/protectoras';


const store = useprotectorasStore()
store.findAll()
store.fetchProtectora()


</script>

<template>
  <div class="d">
    <h1>Protectoras</h1>
  </div>
  <v-col v-for="protectora in store.protectoras" :key="protectora.id_Protectora" >
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
  </v-col>
</template>

<style scoped lang="scss">
.v-card-text {
  padding-left: 14px;

  & .protectora-card__email {
    
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
