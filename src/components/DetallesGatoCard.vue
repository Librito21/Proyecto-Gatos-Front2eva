<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAutenticacion } from "@/stores/Autentificacion";
import { usegatosStore } from "@/stores/gatos.ts"
import type GatoDto from "../stores/dtos/gato.dto";
import type ProtectoraDto from "../stores/dtos/protectoras.dto";

const props = defineProps<{ gato: GatoDto; protectora?: ProtectoraDto }>();
const autenticacion = useAutenticacion();
const { usuario } = storeToRefs(autenticacion);
const gatosStore = usegatosStore();
const gatosDeseados = computed(() => gatosStore.gatosDeseados);

const mensaje = ref("");
const esDeseado = ref(false);
const idDeseado = ref<number | null>(null);
const modal = ref(false);

onMounted(async () => {
  autenticacion.cargarUsuarioDesdeLocalStorage();
  await gatosStore.obtenerGatosDeseados(); // Asegurar que los gatos deseados están actualizados

  console.log("Gatos deseados cargados:", gatosStore.gatosDeseados); // Verificar en consola

  const deseado = gatosStore.gatosDeseados.find(gato => Number(gato.id_Gato) === Number(props.gato.id_Gato));

  if (deseado) {
    esDeseado.value = true;
    idDeseado.value = deseado.id_Deseado || null; // Asegurar que se guarda correctamente

    console.log("ID de deseado asignado:", idDeseado.value); // Verifica si se asigna bien
  }
});

const abrirModal = () => {
  modal.value = true;
};

const cerrarModal = () => {
  modal.value = false;
  mensaje.value = "";
};
</script>

<template>
  <v-card class="CardGatoDetalles">
    <v-img :src="gato.imagen_Gato" cover class="FotoDetallesGato"></v-img>
    <v-card-title>{{ gato.nombre_Gato }}</v-card-title>
    <v-card-subtitle>{{ gato.raza }} - {{ gato.edad }} años</v-card-subtitle>
    <v-card-text>
      <p><strong>Sexo:</strong> {{ gato.sexo }}</p>
      <p><strong>Protectora:</strong> {{ protectora?.nombre_Protectora || "No disponible" }}</p>
      <p><strong>Descripción:</strong> {{ gato.descripcion_Gato }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="green" @click="agregarADeseados" :disabled="esDeseado">Añadir a Deseados</v-btn>
      <v-btn color="red" @click="eliminarDeDeseados" :disabled="!esDeseado">Eliminar de Deseados</v-btn>
    </v-card-actions>
    <p v-if="mensaje" class="gato-card__mensaje">{{ mensaje }}</p>
    <v-card-actions>
      <v-btn color="#FF5500" to="/gato">Volver a gatos</v-btn>
      <v-btn color="green" :href="`mailto:${protectora?.email}`" :disabled="!protectora?.email">
        Contactar Protectora
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.CardGatoDetalles {
  width: 72%;
}

.gato-card__mensaje {
  text-align: center;
  color: green;
}

.FotoDetallesGato {
  max-height: 400px;
}

.v-card-actions {
  flex-direction: column;
}

@media (min-width: 620px) {
  .CardGatoDetalles {
    width: 50%;
  }

  .v-card-actions {
    flex-direction: row;
  }
}
</style>
