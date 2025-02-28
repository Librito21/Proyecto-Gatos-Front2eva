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
  <div class="perfil">
    <h1 class="perfil__titulo">Mi Perfil</h1>
    <p class="perfil__dato"><strong>Nombre:</strong> {{ usuario.nombre }}</p>
    <p class="perfil__dato"><strong>Email:</strong> {{ usuario.Email }}</p>
    <p class="perfil__dato"><strong>Fecha de Registro:</strong> {{ usuario.fechaRegistro }}</p>

    <div class="perfil__cambiar-contrasena">
      <h2 class="perfil__subtitulo">Cambiar Contraseña</h2>
      <input class="perfil__input" v-model="nuevaContrasena" type="password" placeholder="Nueva contraseña" />
      <button class="perfil__boton" @click="cambiarContrasena">Actualizar</button>
      <p class="perfil__mensaje" v-if="mensaje">{{ mensaje }}</p>
    </div>

    <button class="perfil__boton perfil__boton--rojo" @click="cerrarSesion">Cerrar Sesión</button>
  </div>
</template>

<style scoped lang="scss">
.perfil {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.perfil__titulo, .perfil__subtitulo {
  text-align: center;
  margin-bottom: 20px;
}

.perfil__dato {
  margin-bottom: 10px;
}

.perfil__cambiar-contrasena {
  margin-top: 30px;
  text-align: center;
}

.perfil__input {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.perfil__boton {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.perfil__boton:hover {
  background-color: #0056b3;
}

.perfil__boton--rojo {
  background-color: red;
  margin-top: 30px;
  font-size: 18px;
}
</style>