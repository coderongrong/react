<template>
  <h3>{{ num }}</h3>
  <h3>{{ store.infoData.num }}</h3>
  <el-button @click="handleNum">click me</el-button>
  <el-button @click="handleDemo">click me</el-button>
</template>

<script setup>
import { useTest } from '@/stores/counte.js'
import { defer } from 'lodash'
const num = ref(100)
// const { infoData } = storeToRefs(useTest())
const store = useTest()
const { handleNum } = store

// console.log(store)

const handleDemo = () => {
  defer(() => {})
}
</script>
