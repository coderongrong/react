<template>
  <div>Text</div>
  <div>abc</div>
  <div>{{ _proxy.info }}</div>
  <el-button type="primary" @click="handleIce">click me</el-button>
</template>

<script setup lang="ts">
import { userInfoProxy, useTest } from '@/stores/counte.js'
import { useFeatureX } from '../../utils/publish.js'
const { foo } = useFeatureX()
const { infoData } = useTest()
const { _proxy } = storeToRefs(userInfoProxy())
const { handleUserIndo } = userInfoProxy()
const res = userInfoProxy()

const handleIce = () => {
  handleUserIndo(300)
  foo.value ++
}
</script>
