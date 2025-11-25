<template>
  <div id="app" style="text-align: center; margin-top: 100px;">
    <GlitchText text="Glitch animáció Vue 3-ban" />
  </div>
</template>

<script>
import GlitchText from './components/GlitchText.vue'

export default {
  name: 'App',
  components: {
    GlitchText
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #121212;
  color: white;
}
</style>