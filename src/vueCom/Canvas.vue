<template>
  <div>asd</div>
  <canvas
    id="canvas"
    style="border: 1px solid #c3c3c3"
    @click="start"
    key="id"
  ></canvas>
  <img
    id="scream"
    width="0"
    height="0"
    src="../assets/img/eg_flower.png"
    alt="The Scream"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { defer } from 'lodash'
// class demo {
//     constructor({x, y}) {

//     }
// }
const d1 = ref('')
const id = ref(0)
const cxtRef = ref(null)
const colorA = ref(0)
const demo = (x, y, cxt) => {
  cxt.beginPath()
  cxt.arc(x, y - 50, 20, 3, Math.PI * 2, true)
  cxt.closePath()
  cxt.fill()
}
const handleImg = (x, w, h) => {
  var ctx = canvas.getContext('2d')
  var img = document.getElementById('scream')
  console.log(img.width, img.height)
  ctx.drawImage(img, w / 2, h / 2 - 50)
}

const handleImgData = (data) => {
  const imgData = data.getImageData(100, 200, 200, 200)
  if (colorA.value == 255) {
    for (let i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = 0
    }
    colorA.value = 0
  } else {
    for (let i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = 255
    }
    colorA.value = 255
  }
  data.putImageData(imgData, 100, 200)
}

const handleImgDataColor = (data, x, y) => {
  const imgData = data.getImageData(
    0,
    0,
    cxtRef.value.width,
    cxtRef.value.height
  )

  const point = (y * data.width + x) * 4

  console.log('point', point, [
    imgData.data[point],
    imgData.data[point + 1],
    imgData.data[point + 2],
    imgData.data[point + 3],
  ])

  imgData.data[point] = 0
  imgData.data[point + 1] = 255
  imgData.data[point + 2] = 0
  imgData.data[point + 3] = 255

  data.putImageData(imgData, 0, 0)
}

const init = async () => {
  var c = document.getElementById('canvas')
  var cxt = c.getContext('2d', { willReadFrequently: true })
  d1.value = cxt
  cxt.fillStyle = 'red'

  //   cxt.fillRect(50, 20, 100, 100)
  //   cxt.fillRect(0, 0, 20, 30)

  //   cxt.moveTo(10, 10)
  //   cxt.lineTo(150, 50)
  //   cxt.lineTo(10, 50)
  //   cxt.stroke()

  //   cxt.beginPath()
  //   cxt.arc(100, 20, 20, 3, Math.PI * 2, true)
  //   cxt.closePath()
  //   cxt.fill()

  const img = new Image()
  const s = await import('../assets/img/eg_flower.png')
  img.src = s.default
  cxt.width = img.width
  cxt.height = img.height
  cxt.drawImage(img, 0, 0)
  cxtRef.value = cxt
}

onMounted(() => {
  init()
})

const start = (e) => {
  console.log('start', e.offsetX, e.offsetY)
  // demo(e.pageX, e.pageY, d1.value)
  //   handleImg(d1.value, e.pageX, e.pageY)
  //   handleImgData(cxtRef.value)
  handleImgDataColor(cxtRef.value, e.offsetX, e.offsetY)
}
</script>

<style scoped lang="less"></style>
