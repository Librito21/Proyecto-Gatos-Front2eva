<script setup lang="ts">
import { usegatosStore } from '@/stores/gatos';

const store = usegatosStore();
store.findAll();
</script>

<template>
  <div class="header">
    <h1 class="logo-container">
      AdoptArag
      <svg class="logo-svg" width="40" height="40" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx="100" cy="120" r="40" fill="#FF5500" stroke="#3B2F2F" stroke-width="5"/>
        <circle cx="60" cy="70" r="20" fill="#FF5500" stroke="#3B2F2F" stroke-width="4"/>
        <circle cx="100" cy="60" r="22" fill="#FF5500" stroke="#3B2F2F" stroke-width="4"/>
        <circle cx="140" cy="70" r="20" fill="#FF5500" stroke="#3B2F2F" stroke-width="4"/>
        <circle cx="100" cy="132" r="27" fill="whitesmoke"/>
      </svg>
      n
    </h1>
  </div>
  <div class="quienes-somos">
    <p>
      <span class="highlight">Nosotros somos AdoptAragón</span>, un espacio dedicado a conectar a los gatos en adopción de Zaragoza con personas que desean darles un hogar. 
      Nuestro propósito es servir como un punto de encuentro entre las <span class="highlight">protectoras locales</span> y quienes buscan adoptar, 
      facilitando así el proceso de adopción responsable y brindando mayor visibilidad a los felinos que esperan una segunda oportunidad.
    </p>
<br>
    <p>
      Colaboramos con distintas <span class="highlight">protectoras de Zaragoza</span>, recopilando y mostrando en un solo lugar información sobre los gatos en adopción. 
      Aquí encontrarás fotos, descripciones y datos de contacto para que puedas conocer a cada uno de ellos y ponerte en contacto con la protectora correspondiente de manera sencilla.
    </p>
<br>
    <p>
      Nuestra misión es no solo facilitar las adopciones, sino también dar voz a las protectoras, apoyando su labor y concienciando sobre la importancia de la <span class="highlight">adopción responsable</span>. 
      Cada gato que aparece aquí tiene una historia, un pasado que muchas veces ha sido difícil, pero lo más importante: un futuro lleno de cariño que puede comenzar contigo.
    </p>
<br>
    <p>
      Si estás pensando en adoptar o simplemente quieres conocer más sobre la labor de las protectoras, te invitamos a explorar nuestra web y ayudar a estos pequeños a encontrar un hogar.
    </p>

    <div class="cta-container">
      <button class="cta-button">Ver gatos en adopción</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: #ddd;
  gap: 5px;
}

.logo-svg {
  margin-left: -10px;
  width: 1em;
  height: 1em;
}
.subtitle {
  font-size: 1.2rem;
  font-weight: 500;
  color: #F7A277;
  margin-top: 5px;
}

/* 📌 Sección "Quiénes somos" */
.quienes-somos {
  background: rgba(255, 85, 0, 0.1); /* Fondo sutil basado en el color del logo */
  padding: 30px;
  border-radius: 10px;
  color: black;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* ✨ Resaltado de palabras clave */
.highlight {
  color: #FF5500;
  font-weight: bold;
}

/* 📌 Estilo del botón */
.cta-container {
  margin-top: 20px;
}

.cta-button {
  background-color: #FF5500;
  color: #EEEEEE;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.cta-button:hover {
  background-color: #FB7C3C;
}

@media (prefers-color-scheme: dark) {
  .quienes-somos {
  background: rgba(255, 85, 0, 0.1); /* Fondo sutil basado en el color del logo */
  padding: 30px;
  border-radius: 10px;
  color: white;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
}
</style>
