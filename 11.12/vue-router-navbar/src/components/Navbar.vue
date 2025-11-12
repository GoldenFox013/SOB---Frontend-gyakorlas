<template>
  <nav class="navbar">
    <!-- Vue Router Linkek a navigációhoz -->
    <router-link to="/" class="nav-link" exact-active-class="active-link">Kezdőlap</router-link>
    <router-link to="/books" class="nav-link" exact-active-class="active-link">Könyvek</router-link>
    <router-link to="/contact" class="nav-link" exact-active-class="active-link">Kapcsolat</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #007bff;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.active-link {
  text-decoration: underline;
}
</style>