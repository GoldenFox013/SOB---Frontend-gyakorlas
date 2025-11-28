<script setup>
const props = defineProps(['task'])
const emit = defineEmits(['toggle', 'delete'])

const toggle = () => emit('toggle', props.task.id)
const remove = () => emit('delete', props.task.id)
</script>

<template>
  <li :class="{ completed: task.completed }">
    <input type="checkbox" :checked="task.completed" @change="toggle">
    <span>{{ task.text }}</span>
    <button @click="remove">Törlés</button>
  </li>
</template>

<style scoped>
.completed { text-decoration: line-through; }
</style>