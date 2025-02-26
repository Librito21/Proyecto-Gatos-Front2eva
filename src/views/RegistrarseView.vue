<script setup lang="ts">
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

const nombre = ref('');
const email = ref('');
const contraseña = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const isPasswordVisible = ref(false);

const handleRegister = async () => {
  if (!nombre.value || !email.value || !contraseña.value) {
    errorMessage.value = 'Todos los campos son obligatorios';
    return;
  }

  try {
    const response = await fetch('https://localhost:7278/api/Usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre.value,
        email: email.value,
        contraseña: contraseña.value
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error al registrar usuario');
    }

    successMessage.value = 'Registro exitoso. Redirigiendo...';
    errorMessage.value = '';

    setTimeout(() => {
      window.location.href = '/iniciar-sesion'; // Redirigir al login después de registrar
    }, 2000);

  } catch (error: any) {
    errorMessage.value = error.message;
    successMessage.value = '';
  }
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<template>
  <div class="login-form">
    <h2 class="login-form__title">Registrarse</h2>
    <form @submit.prevent="handleRegister" class="login-form__form">
      <div class="login-form__field">
        <label for="nombre" class="login-form__label">Usuario</label>
        <input type="text" v-model="nombre" id="nombre" class="login-form__input" required />
      </div>
      <div class="login-form__field">
        <label for="email" class="login-form__label">Correo electrónico</label>
        <input type="email" v-model="email" id="email" class="login-form__input" required />
      </div>
      <div class="login-form__field">
        <label for="password" class="login-form__label">Contraseña</label>
        <div class="login-form__password-wrapper">
          <input :type="isPasswordVisible ? 'text' : 'password'" v-model="contraseña" id="contraseña"
            class="login-form__input" required />
          <button type="button" @click="togglePasswordVisibility" class="login-form__eye-icon">
            <span v-if="isPasswordVisible">👁️</span>
            <span v-else>👁️‍🗨️</span>
          </button>
        </div>
      </div>
      <button type="submit" class="login-form__button login-form__button--primary">Registrarse</button>
    </form>
    <div v-if="errorMessage" class="login-form__error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="login-form__success-message">{{ successMessage }}</div>
  </div>
</template>

<style lang="scss" scoped>
/* Estilos idénticos al formulario de login */
.login-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.login-form__title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.login-form__field {
  margin-bottom: 1.5rem;
}

.login-form__label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.login-form__input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.login-form__button {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-form__button:hover {
  background-color: #0056b3;
}

.login-form__button--primary {
  background-color: #007bff;
}

.login-form__button--primary:hover {
  background-color: #0056b3;
}

.login-form__error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.login-form__success-message {
  color: green;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.login-form__password-wrapper {
  position: relative;
}

.login-form__password-wrapper .login-form__input {
  width: 100%;
  padding-right: 40px;
}

.login-form__eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #007bff;
  transition: color 0.3s;
}

.login-form__eye-icon:hover {
  color: #0056b3;
}

@media (prefers-color-scheme: dark) {
  .login-form__title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: black;
}
.login-form__label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: black;
}
}
</style>
