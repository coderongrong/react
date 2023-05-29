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
const colorA = ref(0)
const demo = (x, y, cxt) => {
  cxt.beginPath()
  cxt.arc(x, y, 20, 6, Math.PI * 2, true)
  cxt.closePath()
  cxt.fill()
}

const handleImgDataColor = (data, x, y) => {
  console.log(data.width, x, y)
  const imgData = data.getImageData(
    0,
    0,
    cxtRef.value.width,
    cxtRef.value.height
  )
  const point = (y * data.width + x) * 4
  console.log(
    imgData.data[point],
    imgData.data[point + 1],
    imgData.data[point + 2],
    imgData.data[point + 3]
  )
  imgData.data[point] = 0
  imgData.data[point + 1] = 255
  imgData.data[point + 2] = 0
  imgData.data[point + 3] = 255
  data.putImageData(imgData, 0, 0)
}

const init = async () => {
  var c = document.getElementById('canvas')
  
  var cxt = c.getContext('2d', { willReadFrequently: true })

  var r = new Round({ cxt, url: '../assets/img/back.jpg' })
  await r.drawImg()
  new Array(10).fill().forEach((item) => {
    r.draw(randomNum(0, 300), randomNum(20, 120))
  })
  r.line(400, 600)
  cxtRef.value = cxt
}

onMounted(() => {
  init()
})

const start = (e) => {
  // handleImgDataColor(cxtRef.value, e.offsetX, e.offsetY)
}
</script>

<style scoped lang="less"></style>
