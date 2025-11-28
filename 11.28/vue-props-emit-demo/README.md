# vue-props-emit-demo

### Leírás (projektről röviden)

Ez a projekt demonstrálja az adatátadást szülő-gyerek komponensek között egy egyszerű feladatkezelő alkalmazásban.

### Létrehozás

```bash
npm create vue@latest vue-props-emit-demo
cd vue-props-emit-demo
npm install
npm install vue-router@4
npm run dev
```

### Fájlstruktúra

src/  
├── components/  
│   ├── TaskItem.vue      # Gyerek: feladat elem  
│   └── TaskList.vue      # Szülő: feladat lista  
├── App.vue  
└── main.js

### Futtatás

Futtasd *npm run dev*-vel: props adja át a feladatokat lefelé, emit kezeli a toggle/delete eseményeket felfelé.

### Módosított, illetve létrehozott fájlok

**src/App.vue**

```vue
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
```

**src/components/TaskList.vue (Szülő)**

```vue
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
```

**src/components/TaskItem.vue (Gyerek)**

```vue
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
```