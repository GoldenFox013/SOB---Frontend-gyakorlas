<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Vue Tailwind Image Gallery</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ImageCard
        v-for="(img, index) in images"
        :key="img.id"
        :image="img"
        @click="openLightbox(index)"
      />
    </div>

    <Lightbox
      v-if="lightboxOpen"
      :images="images"
      :startIndex="currentIndex"
      @close="lightboxOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ImageCard from '../components/ImageCard.vue'
import Lightbox from '../components/Lightbox.vue'

const images = ref([])
const lightboxOpen = ref(false)
const currentIndex = ref(0)

onMounted(async () => {
  const resp = await fetch('http://localhost:3000/pics')
  images.value = await resp.json()
})

function openLightbox(index) {
  currentIndex.value = index
  lightboxOpen.value = true
}
</script>
