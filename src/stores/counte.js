import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useCount = defineStore('counte', () => {
  // 其他配置...
  const state = ref(100)

  function increment() {
    state.value++
  }

  function decrement() {
    state.value--
  }

  return {
    state,
    increment,
    decrement,
  }
})

export const useBooks = defineStore('books', () => {
  // 其他配置...
  const books = reactive({
    arr: ['js', 'vue', 'react'],
  })

  function handleAdd() {
    books.arr.push('angular')
  }

  function handleDelete() {
    books.arr.pop()
  }

  return {
    books,
    handleAdd,
    handleDelete,
  }
})
