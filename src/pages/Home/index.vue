<script setup lang="ts">
import { ref, reactive, toRaw } from "vue";
import type { Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { showTabBar } from "@/stores/counte.js";
import { storeToRefs } from "pinia";
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = showTabBar();
const { handleFalse } = store;
const router = useRouter();

const getURL = (name) => {
  return new URL(`../../assets/img/imgZe/ze${name}.jpg`, import.meta.url).href;
};

// data
const data = reactive({
  arrData: [
    { title: getURL(1), price: 88 },
    { title: getURL(2), price: 115 },
    { title: getURL(3), price: 135 },
    { title: getURL(4), price: 135 },
    { title: getURL(5), price: 88 },
    { title: getURL(6), price: 49 },
    { title: getURL(7), price: 49 },
    { title: getURL(8), price: 110 },
    { title: getURL(9), price: 100 },
    { title: getURL(10), price: 90 },
    { title: getURL(11), price: 48 },
    { title: getURL(12), price: 98 },
    { title: getURL(13), price: 110 },
    { title: getURL(14), price: 145 },
    { title: getURL(15), price: 108 },
    { title: getURL(16), price: 130 },
    { title: getURL(17), price: 188 },
    { title: getURL(18), price: 130 },
    { title: getURL(19), price: 150 },
    { title: getURL(20), price: 75 },
    { title: getURL(21), price: 110 },
    { title: getURL(22), price: 155 },
  ],
});

// methods
const hanleDetail = (info) => {
  router.push({
    path: "/main/detail",
    query: toRaw(info),
  });
  handleFalse();
};
</script>

<template>
  <div class="mian_info" :class="{ wrapper_height: data.arrData.length > 6 }">
    <div
      @click="hanleDetail(item)"
      class="info"
      v-for="(item, index) in data.arrData"
      :key="index"
    >
      <img :src="item.title" alt="" />
      <div class="proxy_run">支持一件代发</div>
      <span class="price"
        ><span class="price_color">新款</span>单价：￥{{ item.price }}
      </span>
      <div class="title_tip">点击查看详情</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  position: fixed;
  width: 100%;
  background: #fff;
  top: 0px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  z-index: 10;
  // border-bottom: 1px solid #d5cdcd;
  box-shadow: 0px 0px 3px;
}
.mian_info {
  position: relative;
  // top: 35px;
  padding: 0px 10px;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
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
  height: calc(100vh - 60px);
}
.proxy_run {
  position: absolute;
  font-size: 8px;
  top: 158px;
  right: 4px;
  color: #f8f3f3;
  background: rgb(255 0 0 / 70%);
  border-radius: 10%;
}
</style>
