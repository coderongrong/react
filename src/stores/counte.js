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

export const showTabBar = defineStore('TabBar', () => {
  const isShowTabBar = ref(true)

  function handleTrue() {
    isShowTabBar.value = true
  }

  function handleFalse() {
    isShowTabBar.value = false
  }

  return {
    isShowTabBar,
    handleTrue,
    handleFalse,
  }
})

export const userInfo = defineStore('userInfo', () => {
  const user = reactive({
    person: {},
  })

  function handleUser(data) {
    localStorage.setItem('USERINFO', data.name)
    user.person = data
  }

  return {
    user,
    handleUser,
  }
})

export const userInfoProxy = defineStore('userInfoProxy', () => {
  const _proxy = reactive({
    person: {},
    info: 100,
  })

  function handleUserProxy(data, type) {
    _proxy[type] = data
  }

  return {
    _proxy,
    handleUserProxy,
  }
})
