<template>
  <div id="app" class="font-sans">
    <!-- Navigációs sáv -->
    <Navigation />

    <!-- Ide kerülnek az oldalak tartalmai -->
    <router-view />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
</script>

<style>
/* Alap stílusok, opcionális */
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
