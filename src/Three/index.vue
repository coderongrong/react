<template>
  <div ref='threeBox'></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import THREE from 'three.js'

const img = new URL('../assets/img/abc.jpeg', import.meta.url).href
const threeBox = ref() 

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  60
)

camera.position.set(6, 0, 0)

const renderer = new THREE.WebGLRenderer({ 
  alpha: true, 
  antialias: true
})// 设置渲染器大小

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// 加载世界纹理
const worldTexture = new THREE.TextureLoader().load(img) 

onMounted(() => {
  threeBox.value.appendChild(renderer.domElement)
  console.log(img)
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
