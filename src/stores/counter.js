import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(100)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
    // console.log('conter', count)
  }

  return { count, doubleCount, increment }
})
