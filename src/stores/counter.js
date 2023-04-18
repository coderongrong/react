import { ref, computed, reactive } from 'vue'
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


export const useListStore = defineStore('list', () => {
  const list = reactive({
    data: ['🍍', '✨', '😊', '🥚', '🍎']
  })
  
  function incrementList() {
    list.data.push('🍍')
  }

  function deccrementList() {
    list.data.pop()
  }

  return { list, incrementList, deccrementList }
})