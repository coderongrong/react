<template>
  <div>children</div>
  <h1>{{ msg }}</h1>
  <button @click="() => emit('changeChildren', '123456')">+</button>
  <button @click="() => emit('delete', 'delete')">+</button>
  <h3>{{ state }}</h3>
  <h3>{{ memoNum }}</h3>
</template>

<script setup lang='ts'>
// ref reactive computed watch watchEffect readonly

import { useSlots, useAttrs, h, ref, computed, $ref } from 'vue'
import type { Ref } from 'vue'
const slots = useSlots()
const attrs = useAttrs()

const state: Ref<string | number> = ref(2022)
const memoNum: Ref<number | string> = computed((): number => {
  return state.value * 2
})
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

const emit = defineEmits<{
  (e: 'changeChildren', id: number): void,
  (e: 'delete', value: string | number): void
}>();

let count = $ref(0)
console.log(count)

h('div', { id: 'foo' }, 'hello')

</script>

<style scoped>
</style>
