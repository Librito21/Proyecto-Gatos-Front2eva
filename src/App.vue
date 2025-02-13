<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Huella grande -->
  <circle cx="100" cy="120" r="40" fill="#FF5500" stroke="#3B2F2F" stroke-width="5"/>
  
  <!-- Dedos -->
  <circle cx="60" cy="70" r="20" fill="#FF5500" stroke="#3B2F2F" stroke-width="4"/>
  <circle cx="100" cy="60" r="22" fill="#FF5500" stroke="#3B2F2F" stroke-width="4"/>
  <circle cx="140" cy="70" r="20" fill="#FF5500" stroke="#3B2F2F" stroke-width="4"/>
  
  <!-- Círculo interior en la palma -->
  <circle cx="100" cy="132" r="27" fill="whitesmoke"/>
</svg>

    <div class="wrapper">
      <HelloWorld msg="Gatos" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gato">Gatos</RouterLink>
        <RouterLink to="/protectoras">Protectoras</RouterLink>
        <RouterLink to="/detalles-gatos">Detalles-Gatos</RouterLink>
        <RouterLink to="/log-in">Login-User</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
