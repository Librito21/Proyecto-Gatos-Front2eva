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
</style>
