<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Contacto -->
      <div class="footer__section">
        <b>📞 Teléfono: 123456789</b>
        <b>✉️ <a href="mailto:adopciones@zaragoza.com" class="footer-link">adopciones@zaragoza.com</a></b>
      </div>

      <!-- Información General -->
      <div class="footer__section">
        <p>
          Esta plataforma reúne a todas las protectoras de Zaragoza para facilitar la adopción responsable de animales.
        </p>
      </div>

      <!-- Enlaces -->
      <div class="footer__section">
        <v-btn to="/faq" variant="text">❓ <b>Preguntas Frecuentes</b></v-btn>
      </div>
    </div>

    <div class="footer__credits">
      <p>Desarrollado con ❤️ por Roberto Gómez y Daniel Santamaría</p>
      <p>© {{ new Date().getFullYear() }} Adopciones Zaragoza - Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 10px 0; /* Se reduce la altura */
  text-align: center;
}

.footer__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 5px;
}

/* Cada sección del footer ocupa todo el ancho en móviles */
.footer__section {
  width: 100%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
}

/* Créditos al final */
.footer__credits {
  font-size: 12px;
  opacity: 0.8;
  margin-top: 5px;
}

/* Enlaces dentro del footer */
.footer-link {
  text-decoration: none;
  color: #f7a277;
  font-weight: bold;
}

.footer-link:hover {
  color: #fb7c3c;
}

/* 📌 Estilos para pantallas más grandes */
@media (min-width: 768px) {
  .footer__container {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer__section {
    width: auto;
    text-align: left;
    padding: 0 15px;
  }

  .footer__credits {
    text-align: center;
  }
}
</style>
