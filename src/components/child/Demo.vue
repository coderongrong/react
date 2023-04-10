<template>
  <div>Demo...</div>
  <span>Demo... --- {{ count }} 🍍</span>
  <br />
  <button @click="handleADd">click me</button>
  <button @click="handleReset">reset</button>

  <h1 v-for='item in list.data' :key='item'>{{ item }}</h1>
  <button @click='incrementList'>incrementList</button>
  <button @click='deccrementList'>deccrementList</button>
</template>

<script setup>
import { useCounterStore, useListStore } from '../../stores/counter'
import { storeToRefs } from 'pinia'

const { deccrement } = useCounterStore()
const store = useCounterStore()
const { count } = storeToRefs(store)

const storeList = useListStore()
const { list } = storeToRefs(storeList)
const { incrementList, deccrementList } = useListStore()

const handleADd = () => {
  deccrement()
}
const handleReset = () => store.$reset()



</script>

<style scoped lang="scss">
$primary-color: red;
$main-blue: blue;
div {
  text-align: center;
  color: $primary-color;
}
span {
  color: $main-blue;
}
</style>
