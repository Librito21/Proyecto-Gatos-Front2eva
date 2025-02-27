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
      window.location.href = '/iniciar-sesion'; // Redirigir al register después de registrar
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
  <div class="register-form">
    <h2 class="register-form__title">Registrarse</h2>
    <form @submit.prevent="handleRegister" class="register-form__form">
      <div class="register-form__field">
        <label for="nombre" class="register-form__label">Usuario</label>
        <input type="text" v-model="nombre" id="nombre" class="register-form__input" required />
      </div>
      <div class="register-form__field">
        <label for="email" class="register-form__label">Correo electrónico</label>
        <input type="email" v-model="email" id="email" class="register-form__input" required />
      </div>
      <div class="register-form__field">
        <label for="password" class="register-form__label">Contraseña</label>
        <div class="register-form__password-wrapper">
          <input :type="isPasswordVisible ? 'text' : 'password'" v-model="contraseña" id="contraseña"
            class="register-form__input" required />
          <button type="button" @click="togglePasswordVisibility" class="register-form__eye-icon">
            <span v-if="isPasswordVisible">👁️</span>
            <span v-else>👁️‍🗨️</span>
          </button>
        </div>
      </div>
      <button type="submit" class="register-form__button register-form__button--primary">Registrarse</button>
    </form>
    <div v-if="errorMessage" class="register-form__error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="register-form__success-message">{{ successMessage }}</div>
  </div>
</template>

<style lang="scss" scoped>
.register-form {
  max-width: 400px;
  margin: 20px auto;
  margin-bottom: 50px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.register-form__title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.register-form__field {
  margin-bottom: 1.5rem;
}

.register-form__label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.register-form__input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.register-form__button {
  width: 100%;
  padding: 0.5rem;
  background-color: #FF5500;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-form__button:hover {
  background-color: #C54400;
}

.register-form__button--primary {
  background-color: #FF5500;
}

.register-form__button--primary:hover {
  background-color: #C54400;
}

.register-form__error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.register-form__success-message {
  color: green;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.register-form__password-wrapper {
  position: relative;
}

.register-form__password-wrapper .register-form__input {
  width: 100%;
  padding-right: 40px;
}

.register-form__eye-icon {
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

.register-form__eye-icon:hover {
  color: #0056b3;
}

@media (prefers-color-scheme: dark) {
  .register-form__title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: black;
}
.register-form__label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: black;
}
}
</style>
