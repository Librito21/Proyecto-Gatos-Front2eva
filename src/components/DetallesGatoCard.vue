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

const enviarEmail = async () => {
  if (!props.protectora || !usuario.value?.Email || !usuario.value?.Id_Usuario) {
    alert("No se puede enviar el correo. Asegúrate de estar autenticado y que la protectora tenga un email.");
    return;
  }

  try {
    const response = await fetch("https://localhost:7278/api/Usuario/enviar-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        IdUsuario: usuario.value.Id_Usuario,
        To: props.protectora.email,
        Subject: `Interesado en adoptar a ${props.gato.nombre_Gato}`,
        Message: mensaje.value,
      }),
    });

    if (!response.ok) throw new Error("Error al enviar el correo");

    alert("Correo enviado con éxito");
    cerrarModal();
  } catch (error) {
    console.error("Error enviando email:", error);
  }
};

const agregarADeseados = async () => {
  if (!autenticacion.usuario) {
    mensaje.value = "Debes iniciar sesión para agregar a deseados";
    return;
  }

  if (esDeseado.value) {
    mensaje.value = "Este gato ya está en deseados";
    return;
  }

  try {
    const nuevoDeseado = await gatosStore.agregarGatoADeseados(autenticacion.usuario.userId, props.gato.id_Gato,);
    esDeseado.value = true;
    idDeseado.value = nuevoDeseado.id_Deseado;
    mensaje.value = "Gato agregado a deseados";
  } catch (error) {
    console.error("Error:", error);
    mensaje.value = "No se pudo agregar a deseados";
  }
};

const eliminarDeDeseados = async () => {
  if (!autenticacion.usuario) {
    mensaje.value = "Debes iniciar sesión para eliminar de deseados";
    return;
  }

  if (idDeseado.value === null || idDeseado.value === undefined) {
    mensaje.value = "No se encontró el ID de deseados";
    console.error("Error: idDeseado es null o undefined", idDeseado.value);
    return;
  }

  try {
    await gatosStore.eliminarGatoDeDeseados(idDeseado.value);
    esDeseado.value = false;
    idDeseado.value = null;
    mensaje.value = "Gato eliminado de deseados";
  } catch (error) {
    console.error("Error:", error);
    mensaje.value = "No se pudo eliminar de deseados";
  }
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
      <v-btn color="green" @click="abrirModal" :disabled="!usuario || !protectora">
        Contactar Protectora
      </v-btn>
    </v-card-actions>

    <!-- MODAL PARA ENVIAR MENSAJE -->
    <v-dialog v-model="modal" max-width="500px">
      <v-card>
        <v-card-title>Contactar a {{ protectora?.nombre_Protectora }}</v-card-title>
        <v-card-text>
          <v-textarea v-model="mensaje" label="Escribe tu mensaje" outlined dense></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="grey" @click="cerrarModal">Cancelar</v-btn>
          <v-btn color="green" @click="enviarEmail" :disabled="!mensaje">Enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
