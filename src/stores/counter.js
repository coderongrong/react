import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(100)

  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }

  function deccrement() {
    count.value --
  }

  return { count, doubleCount, increment, deccrement }
})
