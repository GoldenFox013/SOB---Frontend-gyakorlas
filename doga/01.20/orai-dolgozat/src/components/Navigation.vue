<template>
  <nav style="margin-bottom: 20px; padding: 10px; border-bottom: 1px solid #ccc;">
    <router-link to="/" style="margin-right: 15px; text-decoration: none;">Kezdőlap</router-link>
    <router-link to="/flowers" style="text-decoration: none;">Virágok</router-link>
  </nav>
</template>

<script setup>
// Jelenleg nincs szükség script-re
</script>

<style scoped>
/* Egyszerű stílus */
nav {
  font-weight: bold;
  font-size: 18px;
}

router-link {
  color: #333;
}

router-link:hover {
  color: #007BFF;
}
</style>
