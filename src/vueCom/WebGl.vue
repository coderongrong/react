<template>
  <div></div>
</template>

<script setup lang="ts">
import { Box } from '../utils/index.js'
import { ref } from 'vue'
import type { PropType, Ref } from 'vue'
import THREE from 'three.js'

const threeBox: Ref<object | []> = ref(null)

const b: any = new Box({ THREE })
const box = b.create(1, 1, 1)
const box1 = b.create(2, 2, 2, 'red')
const box2 = b.create(1, 1, 1)
box.position.x = 5
box2.position.x = -5
function animate() {
  requestAnimationFrame(animate)
  box.rotation.x += 0.01
  box.rotation.y += 0.01

  box2.rotation.x += 0.01
  box2.rotation.y += 0.01
  box2.position.x += 0.01
  if (box2.position.x >= 6) {
    box2.position.x = -5
  }
  b.animate()
}
animate()
</script>

<style lang="less" scoped></style>
