<script setup>
import { ref, onMounted, inject } from 'vue'
import HelloWrold from './components/HelloWorld.vue'
import TheWelcome from '@com/TheWelcome.vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { Base64 } from 'js-base64'
import ThreeBox from './Three/index.vue'
import Line from './Three/Line.vue' 
import BufferGeometry from './Three/BufferGeometry.vue'  //BufferGeometry
import Foo from './components/child/Foo.vue'
import Demo from './components/child/Demo.vue'
import { pinia } from 'make-loader'
import { debounce } from './utils/index.js'
import { getUserInfo } from '@/api'

const router = useRouter()
const list = ref([1, 2, 3, 4, 5])

const itemRefs = ref([])
const child = ref(null)
const canvasRef = ref(null)

const num = ref(0)
const numValue = ref('')
const canvasFn = (color = 'green') => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'green'
  ctx.fillRect(10, 10, 150, 100)
}

onMounted(async () => {
  const params = {
    username: 'jieyingjing',
    password: Base64.encode('123456kkk'),
    captcha: '11',
    remember_me: true,
    loginType: '3',
  }
  const { result } = await getUserInfo(params)
  localStorage.setItem('Access-Token', result.token)
})
const handleLoade = async () => {}

const onKey = (key) => {
  num.value = key
  router.push({
    path: '/home',
    query: {
      rong: 123,
      hobby: 'game',
    },
  })
  if (key == 2) {
    router.push('/about')
  }
  if (key == 5) {
    router.push('/table')
  }
}

const foo = inject('foo')
const handleChange = () => {
  debounce(() => {
    console.log('input updata')
  })
}

</script>

<template>
  <div class="w-100 h-100">
    <!-- <router-link to="/about"> <el-button> about </el-button></router-link>
    <router-link to="/home"> <el-button> home </el-button></router-link>
    <router-view></router-view>
    <el-input type="text" v-model="numValue" @input="handleChange" />
    <el-button type="primary" @click="handleLoade">加载</el-button>
    <br />
    <canvas id="canvas" ref="canvasRef"></canvas> -->
    <ThreeBox />
    <!-- <Line /> -->
    <!-- <BufferGeometry /> -->
  </div>
</template>

<style scoped lang="scss">
.box {
  color: red;
  text-align: center;
  .demo {
    color: blue;
  }
}
.wrapper {
  width: 200px;
  height: 200px;
  background: red;
}
.main {
  width: 100px;
  height: 100px;
  background: rgb(52, 49, 97);
}
</style>
