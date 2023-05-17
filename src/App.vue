<script setup>
import { ref, onMounted, watch } from 'vue'
import HelloWorld from './components/child/HelloWorld.vue'
import Count from './components/child/Count.vue'
// const HelloWorld = new Promise(res => {
//   setTimeout(() => {

//   }, 2000)
// })
</script>

<template>
  <HelloWorld />
  <Count />
</template>

<style scoped lang="scss"></style>
