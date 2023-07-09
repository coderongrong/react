<script setup lang="ts">
import { ref, reactive, toRaw } from "vue";
import type { Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { showTabBar } from "@/stores/counte.js";
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = showTabBar();
const { handleFalse } = store;
const router = useRouter();

const getURL = (name) => {
  return new URL(`../../assets/img/imgZe/ze${name}.jpg`, import.meta.url).href;
};

// console.log(getURL())
const _data = [
  { title: getURL(1), price: 88 },
  { title: getURL(2), price: 115 },
  { title: getURL(3), price: 40 },
];
const data = reactive({
  arrBat: ["低端", "中端", "高端"],
  currenIndex: -1,
  arrData: [
    { title: getURL(1), price: 88 },
    { title: getURL(2), price: 115 },
    { title: getURL(3), price: 40 },
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
  handleFalse();
};
</script>

<template>
  <div class="top">
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
    :class="{wrapper_height: data.arrData.length > 6 }"
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
  top: 25px;
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
  height: calc(100vh - 85px);
}
</style>
