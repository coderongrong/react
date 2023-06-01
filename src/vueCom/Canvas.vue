<template>
  <canvas
    id="canvas"
    width="1900"
    height="1000"
    style="width: 100%; height: 100%; border: 1px solid #c3c3c3"
    @click="start"
    key="id"
  ></canvas>
  <img
    id="scream"
    width="0"
    height="0"
    src="../assets/img/back.jpg"
    alt="The Scream"
  />
</template>

<script setup>
import { randomNum, Round } from '../utils/index.js'
import { ref, onMounted } from 'vue'
import { defer } from 'lodash'

const id = ref(0)
const cxtRef = ref(null)

const init = async () => {
  var c = document.getElementById('canvas')
  var cxt = c.getContext('2d')
  const cav = new Round({ cxt })
  cav.draw(randomNum(10, 500), randomNum(10, 500))


  
  function animate() {
    requestAnimationFrame(animate)
  }
  animate()
}

onMounted(() => {
  init()
})

const start = (e) => {
  // handleImgDataColor(cxtRef.value, e.offsetX, e.offsetY)
}
</script>

<style scoped lang="less"></style>
