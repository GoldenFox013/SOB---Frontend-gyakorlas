<template>
  <div class="flowers-container" style="display: flex; flex-wrap: wrap; gap: 20px;">
    <div v-for="flower in store.flowers" :key="flower.id" class="flower-card" style="border: 1px solid #ccc; padding: 10px; width: 200px;">
      <h3>{{ flower.name }}</h3>
      <img :src="flower.imageUrl" alt="" style="width: 100%; height: 150px; object-fit: cover;">
      <p>Ár: {{ flower.price }} Ft</p>
      <router-link :to="`/flowers/${flower.id}`">
        <button style="margin-top: 5px;">Részletek</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFlowersStore } from '../stores/flowersStore'

const store = useFlowersStore()

onMounted(() => {
  store.fetchFlowers()
})
</script>
