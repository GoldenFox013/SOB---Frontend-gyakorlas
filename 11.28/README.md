# vue-composables-demo

### Leírás (projektről röviden)

Vue 3-ban a mixinek helyett composables-t használunk, amelyek Composition API-val
encapsulálják a újrahasználható logikát. Ez egy számláló és localStorage kezelés demója, ami több
komponensben működik.

### Létrehozás

```bash
npm create vue@latest vue-composables-demo
cd vue-composables-demo
npm install
npm run dev
```

### Fájlstruktúra

src/  
├── composables/  
│ └── useCounter.js # Újrahasználható logika  
├── components/  
│ ├── CounterDisplay.vue # Szülő: két counter  
│ └── Counter.vue # Gyerek: counter UI  
├── App.vue  
└── main.js

### Működése

**useCounter** composable-t importáljuk minden komponensben, ez a komponens kezeli a számlálót, computed tulajdonságokat  
**Paraméterezhető** (különböző key-ek localStorage-hoz)
**Reaktív állapot + computed + lifecycle** egyetlen függvényben
**Több példány** függetlenül működik (tasks, lessons)

### Futtatás

Futtasd *npm run dev*: próbáld a + / - gombokat, frissítsd az oldalt!  
_Előnyök mixinnel szemben_: Nincs névkollízió, paraméterezhető, jobb TypeScript támogatás, explicit függőségi lánc.

### Módosított, illetve létrehozott fájlok

**src/composables/useCounter.js (Composable - mixin helyettesítő):**

```js
import { ref, computed, onMounted, onUnmounted } from 'vue'
export function useCounter(key = 'default', initialValue = 0) {
// Reaktív állapot
const count = ref(initialValue)
const storageKey = `counter_${key}`
// Computed értékek
const isEven = computed(() => count.value % 2 === 0)

const double = computed(() => count.value * 2)
// Műveletek
const increment = () => count.value++
const decrement = () => count.value--
const reset = () => count.value = initialValue
// Lifecycle hookok (mint mixinben)
onMounted(() => {
const saved = localStorage.getItem(storageKey)
if (saved) count.value = parseInt(saved)
})
onUnmounted(() => {
localStorage.setItem(storageKey, count.value.toString())
})
return {
count,
isEven,
double,
increment,
decrement,
reset
}
}
```

**src/components/Counter.vue**

```vue
<script setup>
import { useCounter } from '../composables/useCounter.js'
const props = defineProps(['counterKey', 'title'])
const { count, isEven, double, increment, decrement, reset } =
useCounter(props.counterKey, 0)
</script>
<template>
<div class="counter-card" :class="{ even: isEven }">
<h3>{{ title }}</h3>
<p>Érték: <strong>{{ count }}</strong></p>

<p>Kétszerese: {{ double }}</p>
<div class="buttons">
<button @click="decrement">-</button>
<button @click="increment">+</button>
<button @click="reset">Reset</button>
</div>
</div>
</template>
<style scoped>
.counter-card {
border: 1px solid #ccc;
padding: 20px;
margin: 10px;
border-radius: 8px;
background: white;
}
.even { background: #e8f5e8; }
.buttons button {
margin: 0 5px;
padding: 8px 12px;
}
</style>
```

**src/components/CounterDisplay.vue**

```vue
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
```

**src/App.vue**

```vue
<script setup>
import CounterDisplay from './components/CounterDisplay.vue'
</script>

<template>
<div id="app" style="padding: 20px; max-width: 800px; margin: 0 auto;">
<h1>Vue 3 Composables (Mixin alternatíva)</h1>
<p>Frissítsd az oldalt: az értékek megmaradnak localStorage-ból!</p>
<CounterDisplay />
</div>
</template>
```