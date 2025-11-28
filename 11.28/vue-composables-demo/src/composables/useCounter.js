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