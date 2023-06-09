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
    person...
    <el-button type="primary" @click="logout">退出登入</el-button>
  </div>
</template>

<style lang="less" scoped></style>
