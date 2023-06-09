<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
interface DataInfo {
  tabBar: string[]
}

// data
const data = reactive({
  currentIndex: 0,
  tabBar: [
    { title: '首页', icon: 'Goods' },
    { title: '关于', icon: 'Calendar' },
    { title: '详情', icon: 'Folder' },
    { title: '个人', icon: 'Iphone' },
  ],
})

// methods
const handleTabBar = (index) => {
  if (data.currentIndex == index) return
  data.currentIndex = index
}
</script>

<template>
  <div>
   home...
  </div>
</template>

<style lang="less" scoped>
.tab_bar {
  position: fixed;
  bottom: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #d5cdcd;
  padding-top: 6px;
  .item {
    width: 25%;
    cursor: pointer;
    z-index: 1;
    line-height: 20px;
    text-align: center;
    font-size: 13px;
  }
  .active {
    color: #1890ff;
  }
}
</style>
