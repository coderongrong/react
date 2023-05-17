<script setup>
import { ref } from 'vue'
import { useCount, useBooks } from '@/stores/counte.js'
import { storeToRefs } from 'pinia'
const store = useCount()
const sotreBooks = useBooks()
const { state } = storeToRefs(store)
const { books } = storeToRefs(sotreBooks)
const { increment } = store
const { handleAdd, handleDelete } = sotreBooks
</script>

<template>
  <div>
    Hello HelloWorld --- {{ state }} --books-- {{ books.arr.join('-') }}
  </div>
  <el-button type="primary" @click="increment">+</el-button>
  <el-button type="primary" @click="handleAdd">handleAdd</el-button>
  <el-button type="primary" @click="handleDelete">handleDelete</el-button>
</template>
