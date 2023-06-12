<script setup lang="ts">
import { ref, reactive, toRaw } from 'vue'
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { userInfo } from '@/stores/counte.js'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const store = userInfo()
const { user } = storeToRefs(store)
const { person } = toRaw(user.value)

//methods
const logout = () => {
  router.push('/login')
}
</script>

<template>
  <div>
    <span class="person">个人中心</span>
    <br />
    <span class="user_info">用户名：{{ person.name || '******' }}</span>
    <br />
    <span class="user_info">个人信息：******</span>
    <br />
    <span class="user_info">兴趣爱好：******</span>
    <br />
    <span class="user_info">其他：******</span>
    <br />
    <el-button type="primary" @click="logout">退出登入</el-button>

    <!-- <span class="hoby">个人爱好</span> -->
  </div>
</template>

<style lang="less" scoped>
/deep/ .el-button {
  width: 100%;
  position: fixed;
  bottom: 50%;
}
.person {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 5px 0px;
}
.user_info {
  display: inline-block;
  width: 100%;
  padding: 5px 0px 8px 30px;
  border-bottom: 1px solid #f3f3f3;
}
.hoby {
  animation: move 4s;
  animation-iteration-count: infinite;
  position: relative;
  left: 20px;
}
@keyframes move {
  0% {
    left: 10px;
    color: red;
  }
  50% {
    left: 50px;
    color: green;
  }
  100% {
    left: 10px;
    color: red;
  }
}
</style>
