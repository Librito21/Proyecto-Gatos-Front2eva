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
  padding: $espacio-grande;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: $color-principal;
  }
}

.protectoras-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  .card-col {
    max-width: 250px;
    flex: 1 1 220px;
    padding: $espacio-mediano;
  }

  /* Mobile-First */
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;

    .card-col {
      max-width: 3000px;
      flex: 1 1 180px;
    }
  }

  @media (min-width: 769px) {
    justify-content: space-around;

    .card-col {
      max-width: 220px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1100px;
    margin: 0 auto;

    .card-col {
      max-width: 350px;
    }
  }
}

</style>
