<template>
  <div>sadas</div>
  <h1>{{ props.title }}</h1>
  <div>{{ props.name }}</div>
  <div>{{ props.data }}</div>
  <div>num: {{ num }}</div>
  <div>str: {{ str }}</div>
  <button @click="handleMe" ref="domRef">click me</button>
  <div :class="active">active</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue'
import type { PropType, Ref } from 'vue'

const domRef = ref<HTMLInputElement>(null)
const active: Ref<string> = ref('blue')
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
  (e: 'changeTitle', value: string | number): void
}>()

type Data = {
  car: string
  feel: string
}

const props = defineProps<{
  title: string | number
  name: string
  data: Data
}>()

interface Props {
  msg?: string
  labels?: string[]
  title: string
  name: string
}

// const props = withDefaults(defineProps<Props>(), {
//   title: () => 'hello',
//   name: () => 'china',
//   labels: () => ['one', 'two']
// })

// const props = defineProps({
//   name: String,
//   title: Title
// })

const num = computed<number>(() => {
  return 123421
})

const handleMe = () => {
  emit('changeTitle', 2023)
  active.value = 'red'
}

type aa = {
  name: string
  sex: string
}

type bb = aa & {
  age: number
}

interface cc {
  good: string
}

const obj: bb = {
  name: 'code',
  age: 18,
  sex: 'fale',
}

type myString = string

const str = computed<myString>(() => {
  return 'abc'
})

interface Len {
  length: number
}

function demo<T = string>(arg: T): T {
  return arg
}
console.log(demo('100'))
</script>

<style lang="less" scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
