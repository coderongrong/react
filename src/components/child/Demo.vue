<template>
  <div>Demo...</div>
  <span>Demo... --- {{ count }} 🍍</span>
  <br />
  <button @click="handleADd">click me</button>
  <button @click="handleReset">reset</button>
</template>

<script setup>
import {
  onMounted,
  onUnmounted,
  onBeforeMount,
  onBeforeUnmount,
  reactive,
} from 'vue'
import { useCounterStore } from '../../stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { count } = storeToRefs(store)
const { deccrement } = useCounterStore()

const handleADd = () => {
  deccrement()
}
const handleReset = () => store.$reset()
onMounted(() => {
  console.log('onMounted --> useCounterStore ✨', storeToRefs(store), store)
})
onUnmounted(() => {
  console.log('onUnmounted')
})
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
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
