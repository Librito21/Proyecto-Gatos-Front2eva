<script setup lang="ts">
import ProtectorasCard from '@/components/ProtectorasCard.vue';
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
    <ProtectorasCard :protectora="protectora"/>
  </v-col>
</template>

<style scoped lang="scss">

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
