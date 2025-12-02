<script setup>
import { onMounted } from 'vue'
import { useItemsStore } from '../stores/items'
const store = useItemsStore()
onMounted(() => {
if (!store.items.length) {
store.fetchItems()
}
})

</script>
<template>
<div class="p-6 max-w-6xl mx-auto">
<h2 class="text-2xl font-bold mb-4">Adatok</h2>
<!-- betöltés / hiba jelzés -->
<div v-if="store.loading" class="text-gray-600 mb-4">Betöltés...</div>
<div v-if="store.error" class="text-red-600 mb-4">{{ store.error }}</div>
<!-- kártyás lista -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div
v-for="item in store.items"
:key="item.id"
class="border rounded-lg shadow p-4 flex flex-col"
>
<img
:src="item.image"
:alt="item.title"
class="w-full h-48 object-cover rounded mb-3"
/>
<h3 class="text-lg font-semibold mb-2">
{{ item.title }}
</h3>
<router-link
:to="{ name: 'Details', params: { id: item.id } }"
class="mt-auto inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600"
>
Részletek
</router-link>
</div>
</div>
</div>
</template>