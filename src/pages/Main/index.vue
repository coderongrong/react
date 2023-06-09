<template>
  <div>
    <router-view></router-view>
    <div class="tab_bar w-100">
      <div
        :class="['item', data.currentIndex == index ? 'active' : '']"
        v-for="(item, index) in data.tabBar"
        :key="index"
        @click="handleTabBar(index)"
      >
        <div>
          <component
            :is="item.icon"
            style="width: 1.3em; height: 1.3em; margin-right: 0px"
          />
        </div>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw } from 'vue'
import type { Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

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
  const routerArr = [
    '/main/home',
    '/main/about',
    '/main/detail',
    '/main/person',
  ]
  data.currentIndex = index
  router.push(routerArr[index])
}
</script>

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
