<script setup lang="ts">
import { ref, reactive, toRaw } from "vue";
import type { Ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const _data = [
  { title: "src/assets/img/imgData/self1.jpg", price: 90 },
  { title: "src/assets/img/imgData/self2.jpg", price: 80 },
  { title: "src/assets/img/imgData/self3.jpg", price: 89 },
  { title: "src/assets/img/imgData/self4.jpg", price: 30 },
  { title: "src/assets/img/imgData/self5.jpg", price: 40 },
  { title: "src/assets/img/imgData/self6.jpg", price: 49 },
  { title: "src/assets/img/imgData/self7.jpg", price: 49 },
  { title: "src/assets/img/imgData/self8.jpg", price: 49 },
  { title: "src/assets/img/imgData/self9.jpg", price: 49 },
  { title: "src/assets/img/imgData/self10.jpg", price: 18 },
  { title: "src/assets/img/imgData/self11.jpg", price: 18 },
  { title: "src/assets/img/imgData/self12.jpg", price: 29 },
  { title: "src/assets/img/imgData/self13.jpg", price: 29 },
  { title: "src/assets/img/imgData/self14.jpg", price: 19 },
  { title: "src/assets/img/imgData/self15.jpg", price: 18 },
  { title: "src/assets/img/imgData/self16.jpg", price: 19 },
  { title: "src/assets/img/imgData/self17.jpg", price: 19 },
];
const data = reactive({
  arrBat: ["低端", "中端", "高端"],
  currenIndex: 0,
  arrData: [
    { title: "src/assets/img/imgData/self1.jpg", price: 90 },
    { title: "src/assets/img/imgData/self2.jpg", price: 80 },
    { title: "src/assets/img/imgData/self3.jpg", price: 89 },
    { title: "src/assets/img/imgData/self4.jpg", price: 30 },
    { title: "src/assets/img/imgData/self5.jpg", price: 40 },
    { title: "src/assets/img/imgData/self6.jpg", price: 49 },
    { title: "src/assets/img/imgData/self7.jpg", price: 49 },
    { title: "src/assets/img/imgData/self8.jpg", price: 49 },
    { title: "src/assets/img/imgData/self9.jpg", price: 49 },
    { title: "src/assets/img/imgData/self10.jpg", price: 18 },
    { title: "src/assets/img/imgData/self11.jpg", price: 18 },
    { title: "src/assets/img/imgData/self12.jpg", price: 29 },
    { title: "src/assets/img/imgData/self13.jpg", price: 29 },
    { title: "src/assets/img/imgData/self14.jpg", price: 19 },
    { title: "src/assets/img/imgData/self15.jpg", price: 18 },
    { title: "src/assets/img/imgData/self16.jpg", price: 19 },
    { title: "src/assets/img/imgData/self17.jpg", price: 19 },
  ],
});

// methods
const handleTab = (index) => {
  data.currenIndex = index;
  if (index == 0) {
    data.arrData = _data.filter((item) => item.price <= 20);
  } else if (index == 1) {
    data.arrData = _data.filter(
      (item) => item.price > 20 && item.price < 50
    );
  } else {
    data.arrData = _data.filter((item) => item.price >= 50);
  }
};
const hanleDetail = (info) => {
  console.log(toRaw(info))
  router.push({
    path: '/main/detail',
    query: toRaw(info),
  })
}
</script>

<template>
  <div class="top">
    <div class="center mb-10">服装分类</div>
    <div class="d-f">
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
    :class="[data.arrData.length > 6 ? 'wrapper_height' : '']"
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
      left: 3px;
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
