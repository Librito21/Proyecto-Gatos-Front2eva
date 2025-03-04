<script setup lang="ts">
import { defineProps } from 'vue';
import { useAutenticacion } from '@/stores/Autentificacion';
import { ref } from 'vue';

const props = defineProps({
  gato: {
    type: Object,
    required: true
  }
});

const autenticacion = useAutenticacion();
const mensaje = ref('');

const agregarADeseados = async () => {
  if (!autenticacion.usuario) {
    mensaje.value = 'Debes iniciar sesión para agregar a deseados';
    return;
  }

  console.log("Enviando a API:", {
    id_Usuario: autenticacion.usuario.userId,
    id_Gato: props.gato.id_Gato,
    fecha_Deseado: new Date().toISOString()
  });

  try {
    const response = await fetch('https://localhost:7278/api/Deseado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_Usuario: autenticacion.usuario.userId,
        id_Gato: props.gato.id_Gato,
        fecha_Deseado: new Date().toISOString() // Envía la fecha en formato ISO
      })
    });

    if (!response.ok) throw new Error('Error al agregar a deseados');
    mensaje.value = 'Gato agregado a deseados';
  } catch (error) {
    console.error('Error:', error);
    mensaje.value = 'No se pudo agregar a deseados';
  }
};
</script>

<template>
  <v-card class="gato-card" max-width="344">
    <v-card @click="$router.push(`/detalles-gato/${gato.id_Gato}`)">
      <v-img class="gato-card__imagen" :src="gato.imagen_Gato" height="200px"></v-img>
      <v-card-title>{{ gato.nombre_Gato }}</v-card-title>
      <v-card-subtitle>{{ gato.raza }}</v-card-subtitle>
      <v-card-text>
        <div><strong>Sexo:</strong> {{ gato.sexo }}</div>
        <div><strong>Edad:</strong> {{ gato.edad }} años</div>
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-btn color="red" @click="agregarADeseados">Añadir a Deseados</v-btn>
    </v-card-actions>
    <p v-if="mensaje" class="gato-card__mensaje">{{ mensaje }}</p>
  </v-card>
</template>

<style lang="scss" scoped>
.gato-card__imagen :deep(.v-img__img--contain) {
  object-fit: fill;
}

.gato-card__mensaje {
  text-align: center;
  color: green;
  margin-top: 10px;
}
</style>