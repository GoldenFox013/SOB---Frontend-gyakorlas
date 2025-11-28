<script setup>
import Counter from './Counter.vue'
</script>
<template>
<div>
<h2>Composable Demo - Több számláló</h2>
<Counter counter-key="tasks" title="Feladatok száma" />
<Counter counter-key="lessons" title="Órák száma" />
</div>
</template>