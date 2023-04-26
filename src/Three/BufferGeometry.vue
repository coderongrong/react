<template>
  <div ref="threeBox" class="box"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import THREE from 'three.js'

const threeBox = ref(null)
console.log('box', threeBox)
// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   1,
//   500
// )
// const renderer = new THREE.WebGLRenderer()
// renderer.setSize( window.innerWidth, window.innerHeight );
// //  创建立方体对象
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// var cube = new THREE.Mesh(geometry, material)
// scene.add(cube)
// camera.position.z = 5

// const object = new THREE.Object3D();

// // 渲染场景
// function animate() {
//   requestAnimationFrame(animate)
//   cube.rotation.z -= 0.03
//   renderer.render(scene, camera)
// }

// const MAX_POINTS = 500;

// // geometry
// const geometry = new THREE.BufferGeometry();
// console.log('geometry', geometry)
// // attributes
// const positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
// geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

// // draw range
// const drawCount = 2; // draw the first 2 points, only
// geometry.setDrawRange( 0, drawCount );

// // material
// const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// // line
// const line = new THREE.Line( geometry, material );
// scene.add( line );

onMounted(() => {
  //   threeBox.value.appendChild(renderer.domElement)
  //   animate()
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
