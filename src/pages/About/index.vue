<script setup lang="ts">
import { ref, reactive, toRaw } from "vue";
import type { Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { showTabBar } from '@/stores/counte.js'
import { storeToRefs } from 'pinia'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = showTabBar()
const { handleFalse } = store
const router = useRouter()

const getURL = (name) => {
  return new URL(`../../assets/img/imgData/self${name}.jpg`, import.meta.url)
    .href;
};

// console.log(getURL())
const _data = [
  { title: getURL(1), price: 90 },
  { title: getURL(2), price: 80 },
  { title: getURL(3), price: 89 },
  { title: getURL(4), price: 30 },
  { title: getURL(5), price: 40 },
  { title: getURL(6), price: 49 },
  { title: getURL(7), price: 49 },
  { title: getURL(8), price: 49 },
  { title: getURL(9), price: 49 },
  { title: getURL(10), price: 18 },
  { title: getURL(11), price: 18 },
  { title: getURL(12), price: 29 },
  { title: getURL(13), price: 29 },
  { title: getURL(14), price: 19 },
  { title: getURL(15), price: 18 },
  { title: getURL(16), price: 19 },
  { title: getURL(17), price: 19 },
];
const data = reactive({
  arrBat: ["低端", "中端", "高端"],
  currenIndex: -1,
  arrData: [
    { title: getURL(1), price: 90 },
    { title: getURL(2), price: 80 },
    { title: getURL(3), price: 89 },
    { title: getURL(4), price: 30 },
    { title: getURL(5), price: 40 },
    { title: getURL(6), price: 49 },
    { title: getURL(7), price: 49 },
    { title: getURL(8), price: 49 },
    { title: getURL(9), price: 49 },
    { title: getURL(10), price: 18 },
    { title: getURL(11), price: 18 },
    { title: getURL(12), price: 29 },
    { title: getURL(13), price: 29 },
    { title: getURL(14), price: 19 },
    { title: getURL(15), price: 18 },
    { title: getURL(16), price: 19 },
    { title: getURL(17), price: 19 },
  ],
});

// methods
const handleTab = (index) => {
  data.currenIndex = index;
  if (index == 0) {
    data.arrData = _data.filter((item) => item.price <= 20);
  } else if (index == 1) {
    data.arrData = _data.filter((item) => item.price > 20 && item.price < 50);
  } else {
    data.arrData = _data.filter((item) => item.price >= 50);
  }
};
const hanleDetail = (info) => {
  router.push({
    path: "/main/detail",
    query: toRaw(info),
  });
  handleFalse()
};
</script>

<template>
  <div class="top">
    <div class="center mb-10">服装分类</div>
    <div class="d-f pl-10 pr-10">
      <div
        class="f-1 center"
        :class="{ active: data.currenIndex == index }"
        v-for="(item, index) in data.arrBat"
        :key="index"
        @click="handleTab(index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
  <div
    class="mian_info"
    :class="[data.arrData.length > 4 ? 'wrapper_height' : '']"
  >
    <div
      @click="hanleDetail(item)"
      class="info"
      v-for="(item, index) in data.arrData"
      :key="index"
    >
      <img :src="item.title" alt="" />
      <span class="price"
        ><span class="price_color">新款</span>单价：￥{{ item.price }}
      </span>
      <div class="title_tip">点击查看详情</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
  background: #fff;
  padding-bottom: 2px;
  box-shadow: 0px 0px 3px;
}
.active {
  background: #1890ff;
  color: #fff;
  border-radius: 5%;
}
.mian_info {
  padding: 0px 10px;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  position: relative;
  top: 58px;
  //   height: calc(100vh - 85px);
  overflow-y: auto;
  .info {
    width: 48%;
    margin-left: 5px;
    margin-top: 5px;
    background: #e5eaf2;
    img {
      width: 100%;
      height: 180px;
      //   margin: 5px 2px 0px;
      border-radius: 5%;
    }
    .price_color {
      background: red;
      color: #fff;
      border-radius: 20%;
      padding: 0 2px;
      position: relative;
      left: -5px;
      top: -2px;
      font-size: 8px;
    }
    .price {
      display: inline-block;
      width: 100%;
      text-align: center;
      color: #2d3a46;
    }
    .title_tip {
      position: absolute;
      top: 2px;
      right: 3px;
      background: #0042ff66;
      color: #fff;
      border-radius: 10%;
      padding: 0 4px;
      font-size: 8px;
    }
  }
}
.wrapper_height {
  height: calc(100vh - 120px);
}
</style>
