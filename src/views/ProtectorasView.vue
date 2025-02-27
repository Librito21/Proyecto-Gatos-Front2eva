<script setup lang="ts">
import ProtectorasCard from '@/components/ProtectorasCard.vue';
import { useprotectorasStore } from '@/stores/protectoras';

const store = useprotectorasStore();
store.findAll();
store.fetchProtectora();
</script>

<template>
  <div class="protectoras">
    <h1>Protectoras</h1>
    <div class="protectoras-container">
      <v-col 
        v-for="protectora in store.protectoras" 
        :key="protectora.id_Protectora"
        class="card-col"
      >
        <ProtectorasCard :protectora="protectora" />
      </v-col>
    </div>
  </div>
</template>

<style scoped lang="scss">
.protectoras {
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: #FF5500;
  }
}

.protectoras-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.card-col {
  max-width: 250px;
  flex: 1 1 220px; 
  padding: 10px;
}

/* Mobile-First */
@media (max-width: 768px) {
  .protectoras-container {
    flex-direction: row;
    justify-content: center;
  }

  .card-col {
    max-width: 3000px; 
    flex: 1 1 180px;
  }
}

@media (min-width: 769px) {
  .protectoras-container {
    justify-content: space-around;
  }

  .card-col {
    max-width: 220px;
  }
}

@media (min-width: 1024px) {
  .protectoras-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .card-col {
    max-width: 350px;
  }
}
</style>
