<script setup>
import { storeToRefs } from 'pinia'
import { useCount } from '@/stores/counte.js'
const store = useCount()
const { decrement } = store
const { state } = storeToRefs(store)
</script>

<template>
  <div>count... {{ state }}</div>
  <el-button type="primary" @click="decrement">-</el-button>
</template>
