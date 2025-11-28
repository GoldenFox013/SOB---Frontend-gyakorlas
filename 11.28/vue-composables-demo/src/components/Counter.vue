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