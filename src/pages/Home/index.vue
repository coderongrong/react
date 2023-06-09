<script setup lang="ts">
import { ref, reactive, toRaw } from 'vue'
import type { Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

// data
const data = reactive({
  arrData: [
    { title: 'src/assets/img/imgData/self1.jpg', price: 90 },
    { title: 'src/assets/img/imgData/self2.jpg', price: 80 },
    { title: 'src/assets/img/imgData/self3.jpg', price: 89 },
    { title: 'src/assets/img/imgData/self4.jpg', price: 30 },
    { title: 'src/assets/img/imgData/self5.jpg', price: 40 },
    { title: 'src/assets/img/imgData/self5.jpg', price: 40 },
    { title: 'src/assets/img/imgData/self5.jpg', price: 40 },
    { title: 'src/assets/img/imgData/self5.jpg', price: 40 },
    { title: 'src/assets/img/imgData/self5.jpg', price: 40 },
    { title: 'src/assets/img/imgData/self5.jpg', price: 40 },
  ],
})

// methods
const hanleDetail = (info) => {
  console.log(toRaw(info))
  router.push({
    path: '/main/detail',
    query: toRaw(info),
  })
}
</script>

<template>
  <div class="title">服装</div>
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
      <span>单价：￥{{ item.price }} </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  height: 30px;
  line-height: 30px;
  text-align: center;
  z-index: 10;
}
.mian_info {
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
    }
    span {
      display: inline-block;
      width: 100%;
      text-align: center;
      color: #2d3a46;
    }
  }
}
.wrapper_height {
  height: calc(100vh - 85px);
}
</style>
