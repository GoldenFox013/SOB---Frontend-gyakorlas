<script setup>
import { ref } from 'vue'
import TaskItem from './TaskItem.vue'

const tasks = ref([
  { id: 1, text: 'Tananyag készítés', completed: false },
  { id: 2, text: 'Git gyakorlatok', completed: true }
])

const addTask = () => {
  tasks.value.push({
    id: Date.now(),
    text: `Új feladat ${tasks.value.length + 1}`,
    completed: false
  })
}

const toggleTask = (id) => {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.completed = !task.completed
}
</script>

<template>
  <div>
    <h2>Feladatok ({{ tasks.length }})</h2>
    <button @click="addTask">+ Új feladat</button>
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="tasks.splice(tasks.indexOf(task), 1)"
      />
    </ul>
  </div>
</template>