<template>
  <div>children</div>
  <h1>{{ msg }}</h1>
  <button @click="() => emit('changeChildren', '123456')">+</button>
  <button @click="() => emit('delete', 'delete')">+</button>
</template>

<script setup lang='ts'>
import { useSlots, useAttrs, h } from 'vue'
const slots = useSlots()
const attrs = useAttrs()

interface Book {
  title: string
  author: string
  year: number
}

interface PropsInt {
  foo?: String,
  msg: String | Number
}

const { foo, msg } = defineProps<PropsInt>()

const emit = defineEmits(["changeChildren", "delete"]);
h('div', { id: 'foo' }, 'hello')
</script>

<style scoped>
</style>
