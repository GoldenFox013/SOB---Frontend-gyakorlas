<template>
  <div id="app">
    <!-- Navigációs sáv -->
    <Navbar />
    <!-- Itt jelennek meg az útvonalak tartalmai -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>