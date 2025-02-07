<script setup lang="ts">
import { usegatosStore } from '@/stores/gatos';


const store = usegatosStore()
store.findAll()

</script>

<template>
    <h1>Pagina de los detalles de los gatos</h1>
    <div v-for="gato in store.gatos">
        {{ gato.Id_Gato }} {{ gato.Id_Protectora }} {{ gato.Nombre_Gato }} {{ gato.Raza }} {{ gato.Edad }} {{ gato.Esterilizado }} {{ gato.Sexo }} {{ gato.Descripcion_Gato }} {{ gato.Imagen_Gato }}
    </div>
</template>