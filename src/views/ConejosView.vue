<script setup lang="ts">
import { useConejosStore } from '@/stores/conejos'
import { computed, ref} from 'vue'
import ConejoCard from '../components/ConejoCard.vue'

const store = useConejosStore()

store.fetchConejo()

const edadMin = ref(1)
const edadMax = ref(15)

// Gatos filtrados como propiedad computada
const conejosFiltrados = computed(() => {
  return store.conejos.filter(conejo => {
    // Filtrar por edad
    const edadEnRango = conejo.edad >= edadMin.value && conejo.edad <= edadMax.value
    
    return edadEnRango
  })
})
</script>

<template>
  <v-container fluid>
    <v-row class="justify-center">
      <v-col v-for="conejo in conejosFiltrados" :key="conejo.id_Conejo" cols="12" sm="6" md="4" lg="3">
        <ConejoCard :conejo="conejo" style="object-fit: cover;"/>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped lang="scss">
.v-row + .v-row {
  margin-top: 8px;
}

.NoFiltroContenedor {
  display: flex;
  justify-content: center;
}

.NoFiltro {
  background-color: $color-principal;
  max-width: 500px;
  display: flex;
  justify-content: center;
  color:$color-blanco;
}

:deep(.v-btn.primary),
:deep(.v-alert.info) {
  background-color: $color-principal !important;
  border-color: $color-principal !important;
}

</style>