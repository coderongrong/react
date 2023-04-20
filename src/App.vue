<script setup>
import { ref, onMounted, inject } from 'vue'
import HelloWrold from './components/HelloWorld.vue'
import TheWelcome from '@com/TheWelcome.vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { Base64 } from 'js-base64'
import Three from './Three/index.vue'
import Foo from './components/child/Foo.vue'
import Demo from './components/child/Demo.vue'
import { pinia } from 'make-loader'

// baseURL: 'http://2l916746t7.goho.co:1008/jeecg-boot',
const service = axios.create({
  baseURL: '',
  timeout: 5000, // 请求超时时间
})
service.interceptors.request.use((config) => {
  const token = localStorage.getItem('Access-Token')
  if (token) {
    config.headers['X-Access-Token'] = token
  }
  return config
})

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  () => {}
)

const router = useRouter()
const list = ref([1, 2, 3, 4, 5])

const itemRefs = ref([])
const child = ref(null)

const num = ref(0)

onMounted(async () => {
  const params = {
    username: 'jieyingjing',
    password: Base64.encode('123456kkk'),
    captcha: '1',
    remember_me: true,
    loginType: '3',
  }
  const { result } = await service.post('/sys/login', params)
  // console.log('>>> res', result)
  localStorage.setItem('Access-Token', result.token)
  try {
    const res = await service.get(
      `/sys/productClass/queryByParentId?_t=1669339352&parentId=0&type=1&classType=xxx`
    )
    // console.log('res', res)
  } catch (e) {
    // console.log(e)
  }
})
const handleLoade = async () => {
  console.log('handleLoade')
  let i = 1000000000
  while ((i--, i > 0)) {}
  console.log('执行完了')

  const fetchPromise1 = await fetch(
    'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
  )
  console.log('fetchPromise2', fetchPromise1)
}
const onKey = (key) => {
  // console.log('app...', key)
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
</script>

<template>
  <div class="d-f">
    <router-link to="/about"> <el-button> about </el-button></router-link>
    <router-link to="/home"> <el-button> home </el-button></router-link>
    <router-view></router-view>
    <input type="text" value="1000" />
    <el-button type="primary" @click="handleLoade">加载</el-button>
    <!-- <el-button type="primary" @click="handleLoade" style='margin-left: 50px'>333</el-button> -->
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
</style>
