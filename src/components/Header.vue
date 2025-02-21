<script setup lang="ts">

</script>

<template>
  <main>
    <header>
      <RouterLink to="/">
        <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
          <!-- Huella grande -->
          <circle cx="100" cy="120" r="40" fill="#FF5500" stroke="#3B2F2F" stroke-width="5" />

          <!-- Dedos -->
          <circle cx="60" cy="70" r="20" fill="#FF5500" stroke="#3B2F2F" stroke-width="4" />
          <circle cx="100" cy="60" r="22" fill="#FF5500" stroke="#3B2F2F" stroke-width="4" />
          <circle cx="140" cy="70" r="20" fill="#FF5500" stroke="#3B2F2F" stroke-width="4" />

          <!-- Círculo interior en la palma -->
          <circle cx="100" cy="132" r="27" fill="whitesmoke" />
        </svg>
      </RouterLink>
      <div class="text">
        <nav>
          <RouterLink to="/gato">Gatos</RouterLink>
          <RouterLink to="/protectoras">Protectoras</RouterLink>
        </nav>
        <div class="usuario">
          <RouterLink to="/iniciar-sesion">Iniciar Sesion‎ ‎ ‎</RouterLink>
          <RouterLink to="/registrarse">Registrarse</RouterLink>
        </div>
      </div>

    </header>
  </main>
</template>

<style scoped lang="scss">
/* 🔹 Mobile-First */
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  width: 100%;
}

.text {
  width: 200px;
}

nav {
  display: flex;
  width: 170px;
  gap: 5px;
  justify-content: center;
}

@media (min-width: 768px) {
  header {
    justify-content: flex-start;
    padding: 15px 30px;
  }

  .text {
    display: flex;
    width: 610px;
  }

  nav {
    flex-grow: 1;
    display: flex;
    justify-content: start;
  }

  .usuario {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
  }
}

@media (min-width: 1024px) {
  header {
    padding: 15px 150px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .text {
    width: 1310px;
  }

  svg {
    width: 80px;
    height: 80px;
  }

  nav {
    gap: 20px;
  }

  .usuario {
    gap: 20px;
  }
}
</style>