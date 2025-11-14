<template>
  <div
    class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
    @click="$emit('click')"
  >
    <img
      :src="image.url"
      :alt="image.author"
      class="w-full h-56 object-cover"
    />

    <div class="p-4">
      <h2 class="text-lg font-semibold text-purple-600 mb-2">
        Photo by {{ image.author }}
      </h2>

      <p><strong>Views:</strong> {{ image.views.toLocaleString() }}</p>
      <p><strong>Downloads:</strong> {{ image.downloads.toLocaleString() }}</p>
      <p><strong>Likes:</strong> {{ image.likes.toLocaleString() }}</p>

      <div class="flex flex-wrap gap-2 mt-3">
        <span
          v-for="tag in image.tags"
          :key="tag"
          class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: Object,
    required: true
  }
})
</script>
