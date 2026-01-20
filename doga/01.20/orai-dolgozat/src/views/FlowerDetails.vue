<template>
  <div v-if="flower" style="padding: 20px;">
    <h1>{{ flower.name }}</h1>
    <img :src="flower.imageUrl" alt="" style="width: 300px; height: 300px; object-fit: cover;">
    <p>Ár: {{ flower.price }} Ft</p>
    <p>{{ flower.description }}</p>
    <router-link to="/flowers">
      <button style="margin-top: 10px;">Vissza a listához</button>
    </router-link>
  </div>
  <div v-else>
    <p>Virág nem található.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useFlowersStore } from '../stores/flowersStore'

const route = useRoute()
const store = useFlowersStore()

// Várunk, amíg a flowersStore betölt
const flower = computed(() => store.getFlowerById(route.params.id))
</script>
