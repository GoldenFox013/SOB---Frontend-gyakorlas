<script setup>
import TaskList from './components/TaskList.vue'
import { ref } from 'vue'
</script>

<template>
  <div id="app" style="padding: 20px;">
    <h1>Feladatkezelő - Props/Emit Demo</h1>
    <TaskList />
  </div>
</template>