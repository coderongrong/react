<template>
  <div ref="threeBox" class="box"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import THREE from 'three.js'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const threeBox = ref(null)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  500
)
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight );
//  创建立方体对象
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)
camera.position.z = 5

const object = new THREE.Object3D();
scene.add( object );
console.log(scene, object)

// 渲染场景
function animate() {
  requestAnimationFrame(animate)
  cube.rotation.z -= 0.03
  renderer.render(scene, camera)
}

onMounted(() => {
  threeBox.value.appendChild(renderer.domElement)
  animate()
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
.box {
  width: 50%;
  height: 50%;
  overflow: hidden;
  ::v-deep .abc {
    width: 100px;
  }
  ::v-deep canvas {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
