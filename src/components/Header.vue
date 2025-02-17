<script setup lang="ts">

</script>

<template>
  <main>
    <header>
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
        <!-- Huella grande -->
        <circle cx="100" cy="120" r="40" fill="#FF5500" stroke="#3B2F2F" stroke-width="5" />

        <!-- Dedos -->
        <circle cx="60" cy="70" r="20" fill="#FF5500" stroke="#3B2F2F" stroke-width="4" />
        <circle cx="100" cy="60" r="22" fill="#FF5500" stroke="#3B2F2F" stroke-width="4" />
        <circle cx="140" cy="70" r="20" fill="#FF5500" stroke="#3B2F2F" stroke-width="4" />

        <!-- Círculo interior en la palma -->
        <circle cx="100" cy="132" r="27" fill="whitesmoke" />
      </svg>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gato">Gatos</RouterLink>
        <RouterLink to="/protectoras">Protectoras</RouterLink>
      </nav>
      <div class="usuario">
        <RouterLink to="/log-in">Iniciar Sesion</RouterLink>
        <RouterLink to="/log-up">Registrarse</RouterLink>
      </div>
        
    </header>
  </main>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
nav {
  display: flex;
  gap: 20px;
}

.usuario {
  margin-left: auto; /* Esto mueve el contenido de 'usuario' a la izquierda */
}
</style>