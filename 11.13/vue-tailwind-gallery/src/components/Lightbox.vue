<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <button
      @click="$emit('close')"
      class="absolute top-4 right-4 text-white text-3xl"
    >
      ✕
    </button>

    <button @click="prevImage" class="absolute left-6 text-white text-4xl">‹</button>

    <img
      :src="images[currentIndex].url"
      class="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
    />

    <button @click="nextImage" class="absolute right-6 text-white text-4xl">›</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  images: Array,
  startIndex: Number
})

const currentIndex = ref(props.startIndex)

watch(() => props.startIndex, val => currentIndex.value = val)

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}
</script>
