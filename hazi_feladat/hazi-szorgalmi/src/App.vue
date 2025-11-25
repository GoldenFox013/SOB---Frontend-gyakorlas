<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import MainContent from './components/MainContent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div id="app-container">
    <HeaderComponent />
    <main class="content-wrapper">
      <MainContent />
    </main>
    <FooterComponent />
  </div>
</template>

<style>
/* Globális stílus a test-re és az App konténerre */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #f4f4f4; 
}

#app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* A fő tartalom (ContentWrapper) stílusa */
.content-wrapper {
    flex-grow: 1; 
    width: 90%;
    max-width: 1200px;
    margin: 20px auto; /* Középre igazítás */
    padding: 0;
    background-color: white; /* Fehér háttér a tartalomnak */
}
</style>