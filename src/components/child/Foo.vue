<template>
  <div>foo...</div>
  <span>foo... --- {{ count }}</span>
  <span>foo... --- {{ doubleCount }}</span>
  <br />
  <button @click="handleAdd">click me</button>
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
const { count, doubleCount } = storeToRefs(store)  // doubleCount
const { increment } = useCounterStore()

const handleAdd = () => {
  increment()
}
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
