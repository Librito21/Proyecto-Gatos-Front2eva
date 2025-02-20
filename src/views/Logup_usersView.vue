<script setup lang="ts">
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';


// Variables reactivas
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isPasswordVisible = ref(false); // Variable para controlar la visibilidad de la contraseña

// Función para manejar el login
const handleLogin = () => {
    if (email.value === 'user@example.com' && password.value === 'password') {
        // Simulación de login exitoso
        window.location.href = '/dashboard';  // Redirige a dashboard
    } else {
        errorMessage.value = 'Correo electrónico o contraseña incorrectos';
    }
};

// Función para alternar la visibilidad de la contraseña
const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};

</script>

<template>

    <div class="login-form">
        <h2 class="login-form__title">Iniciar sesión</h2>
        <form @submit.prevent="handleLogin" class="login-form__form">
            <div class="login-form__field">
                <label for="email" class="login-form__label">Correo electrónico</label>
                <input type="email" v-model="email" id="email" class="login-form__input" required />
            </div>
            <div class="login-form__field">
                <label for="password" class="login-form__label">Contraseña</label>
                <div class="login-form__password-wrapper">
                    <input :type="isPasswordVisible ? 'text' : 'password'" v-model="password" id="password"
                        class="login-form__input" required />
                    <button type="button" @click="togglePasswordVisibility" class="login-form__eye-icon">
                        <span v-if="isPasswordVisible">👁️</span>
                        <span v-else>👁️‍🗨️</span>
                    </button>
                </div>
            </div>
            <button type="submit" class="login-form__button login-form__button--primary">Entrar</button>
        </form>
        <div v-if="errorMessage" class="login-form__error-message">{{ errorMessage }}</div>
    </div>
</template>

<style lang="scss" scoped>
/* Bloque principal del formulario de login */
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Título */
.login-form__title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

/* Campo del formulario (input + label) */
.login-form__field {
  margin-bottom: 1.5rem;
}

/* Etiqueta de los campos */
.login-form__label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Entrada de texto común (email, password) */
.login-form__input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

/* Estilo para el botón de login */
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

/* Estilo para el botón de login con modificador para un estilo primario */
.login-form__button--primary {
  background-color: #007bff;
}

.login-form__button--primary:hover {
  background-color: #0056b3;
}

/* Mensaje de error */
.login-form__error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

/* Estilo para el contenedor del input de contraseña y el ícono del ojo */
.login-form__password-wrapper {
  position: relative;
}

.login-form__password-wrapper .login-form__input {
  width: 100%;
  padding-right: 40px; /* Asegura que haya espacio para el ícono */
}

/* Estilo para el ícono del ojo */
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
</style>