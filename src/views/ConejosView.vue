<script setup lang="ts">
import { useConejosStore } from '@/stores/conejos'
import { computed, ref} from 'vue'
import FiltrosConejo from '@/components/FiltrosGato.vue'
import ConejoCard from '../components/ConejoCard.vue'

const store = useConejosStore()

store.fetchConejo()

const edadMin = ref(1)
const edadMax = ref(15)
const razaSeleccionada = ref('')

const actualizarFiltros = (filtros) => {
  edadMin.value = filtros.edadMin
  edadMax.value = filtros.edadMax
  razaSeleccionada.value = filtros.razaSeleccionada
}

const conejosFiltrados = computed(() => {
  return store.conejos.filter(conejo => {
    const edadEnRango = conejo.edad >= edadMin.value && conejo.edad <= edadMax.value
    
    const razaCoincide = razaSeleccionada.value === '' || conejo.raza === razaSeleccionada.value
    
    return edadEnRango && razaCoincide
  })
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <FiltrosConejo @actualizar-filtros="actualizarFiltros" />
      </v-col>

    </v-row>

    <v-row class="justify-center">
      <v-col v-if="conejosFiltrados.length === 0" cols="12" class="NoFiltroContenedor">
        <v-alert
          text="Todavía no tenemos conejos que cumplan estas condiciones."
          class="NoFiltro"
        ></v-alert>
      </v-col>

      <v-col v-for="conejo in conejosFiltrados" :key="conejo.id_Conejo" cols="12" sm="6" md="4" lg="3">
        <ConejoCard :conejo="conejo" style="object-fit: cover;"/>
      </v-col>
    </v-row>
    <button @click="$router.push(`/gestion-conejos`)" class="boton-conejo">Crear Conejo </button>
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

.boton-conejo {
  background-color: $color-principal;
  color: $color-blanco;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: $color-principal-oscuro;
  }
}

</style>