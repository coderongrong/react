<template>
  <div>Text</div>
  <div>abc</div>
  <div>{{ _proxy.info }}</div>
  <el-button type="primary" @click='handleIce'>click me</el-button>
</template>

<script setup lang="ts">

import { userInfoProxy } from '@/stores/counte.js'

const { _proxy } = storeToRefs(userInfoProxy())
const { handleUserIndo } = userInfoProxy()
const res = userInfoProxy()

const handleIce = () => {
  handleUserIndo(300)
}
</script>
