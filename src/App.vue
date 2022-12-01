<script setup>
import { ref, onMounted } from "vue";
import HelloWrold from "./components/HelloWorld.vue";
import TheWelcome from "@com/TheWelcome.vue";
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { defer } from 'lodash'

const service = axios.create({
//baseURL: '/jeecg-boot',
// baseURL: apiBaseUrl, // api base_url  http://2l916746t7.goho.co:1008/jeecg-boot
  baseURL: 'http://2l916746t7.goho.co:1008/jeecg-boot',
  timeout: 5000 // 请求超时时间
})
service.interceptors.request.use(config => {
  const token = localStorage.getItem('Access-Token')
  if(token){
    config.headers['X-Access-Token'] = token
  }
  return config
})

service.interceptors.response.use(response => {
  return response.data
}, () => {})

const router = useRouter()
const list = ref([1, 2, 3, 4, 5]);

const itemRefs = ref([]);
const child = ref(null);

const num = ref(0)
onMounted(async () => {
  // console.log('>>>>>', child.value);
  // console.log(import.meta.env.VITE_APP_SOME_KEY) // 123
  // const Token = {
  //   expire: 1669883827554,
  //   value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk2ODU5MjksInVzZXJuYW1lIjoiamlleWluZ2ppbmcifQ.I_NbFCVmZ8zjRvckwp59XYU5XHK1QDEHWQ04Oejr5LA"
  // }
  // localStorage.setItem('Access-Token', Token)
  // const res = await axios.get(`http://2l916746t7.goho.co:1008/jeecg-boot/sys/productClass/queryByParentId?_t=1669339352&parentId=0&type=1`)
  // console.log('res', res)
  const params = {
    "username": "jieyingjing",
    "password": "123456kkk",
    "captcha": "1",
    "remember_me": true,
    "loginType": "3"
  }
  const { result } = await service.post('/sys/login', params)
  localStorage.setItem('Access-Token',result.token)
  try {
    const res = await service.get(`/sys/productClass/queryByParentId?_t=1669339352&parentId=0&type=1`)
    // console.log('res', res)
  } catch (e) {
    // console.log(e)
  }

});
const onKey = (key) => {
  // console.log('app...', key)
  num.value = key
  router.push({
    path: '/home',
    query: {
      rong: 123,
      hobby: 'game'
    }
  })
  if(key == 2) {
    router.push('/about/123')
  }
}
</script>

<template>
  <div class='d-f'>
    <!-- <div class='box'>
      <span class='demo'>demo</span>
    </div> -->
    <TheWelcome @onKey="onKey"></TheWelcome>
    <div style="display: flex;">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped  lang='scss'>
.box {
  color: red;
  .demo{
    color: blue;
  }
}
</style>
