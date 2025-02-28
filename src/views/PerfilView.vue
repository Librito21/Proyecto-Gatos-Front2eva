<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAutenticacion } from '@/stores/Autentificacion';

const autenticacion = useAutenticacion();
const { usuario } = storeToRefs(autenticacion);
const router = useRouter();
const nuevaContrasena = ref('');
const mensaje = ref('');

onMounted(() => {
  autenticacion.cargarUsuarioDesdeLocalStorage();
});

const cambiarContrasena = async () => {
  if (!nuevaContrasena.value) {
    mensaje.value = 'Introduce una nueva contraseña';
    return;
  }
  try {
    const response = await fetch('https://localhost:7278/api/Usuario/cambiar-contrasena', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idUsuario: usuario.value?.Id_Usuario,
        nuevaContrasena: nuevaContrasena.value
      })
    });

    if (!response.ok) throw new Error('Error al cambiar la contraseña');
    mensaje.value = 'Contraseña actualizada con éxito';
    nuevaContrasena.value = '';
  } catch (error) {
    mensaje.value = 'Error al cambiar la contraseña';
    console.error(error);
  }
};

const cerrarSesion = () => {
  autenticacion.cerrarSesion();
  router.push('/');
};
</script>

<template>
  <div class="perfil-container" v-if="usuario">
    <h1>Mi Perfil</h1>
    <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
    <p><strong>Email:</strong> {{ usuario.Email }}</p>
    <p><strong>ID Usuario:</strong> {{ usuario.Id_Usuario }}</p>
    <p><strong>Fecha de Registro:</strong> {{ usuario.fechaRegistro }}</p>

    <div class="cambiar-contrasena">
      <h2>Cambiar Contraseña</h2>
      <input v-model="nuevaContrasena" type="password" placeholder="Nueva contraseña" />
      <button @click="cambiarContrasena">Actualizar</button>
      <p v-if="mensaje">{{ mensaje }}</p>
    </div>

    <button class="logout-btn" @click="cerrarSesion">Cerrar Sesión</button>
  </div>
</template>

<style scoped>
.perfil-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  text-align: center;
}

.cambiar-contrasena {
  margin-top: 20px;
  text-align: center;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.logout-btn {
  background-color: red;
  margin-top: 20px;
}
</style>
