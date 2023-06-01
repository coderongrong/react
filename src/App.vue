<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
// import Hellow from './vueCom/Hellow.vue'
import Canvas from './vueCom/Canvas.vue'
// import WebGl from './vueCom/WebGl.vue'

interface Book {
  car: string
  feel: string
}

const title: Ref<string | number> = ref('中文')
const data: Book = reactive({ car: 'berz', feel: 'good' })
const handletext = (val) => {
  title.value = val
  let timer = setTimeout(() => {
    title.value = '中文'
    timer = null
  }, 1500)
}
</script>

<template>
  <!-- <div>App...</div> -->
  <!-- <Hellow :data='data' :title="title" name="code" @changeTitle="handletext" /> -->
  <Canvas />
</template>
