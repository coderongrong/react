<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

//methods
const logout = () => {
  router.push('/login')
}
</script>

<template>
  <div>
    <span class='person'>个人中心</span>
    <br />
    <span class='user_info'>用户名：admin</span>
    <br />
    <span class='user_info'>个人信息：******</span>
    <br />
    <span class='user_info'>兴趣爱好：******</span>
    <br />
        <span class='user_info'>其他：******</span>
    <br />
    <el-button type="primary" @click="logout">退出登入</el-button>
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
</style>
