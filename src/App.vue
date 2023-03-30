<script setup>
import { ref, onMounted, inject } from 'vue'
import HelloWrold from './components/HelloWorld.vue'
import TheWelcome from '@com/TheWelcome.vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import defer from 'lodash-es/defer'
import map from 'lodash-es/map'
import { Base64 } from 'js-base64'

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
// console.log('APP----->', foo)
</script>

<template>
  <div class="d-f">
    <div class="box">
      <!-- <span class='demo'>demo</span> -->
    </div>
    <!-- <TheWelcome @onKey="onKey"></TheWelcome>
    <div style="display: flex;">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.box {
  color: red;
  .demo {
    color: blue;
  }
}
</style>
