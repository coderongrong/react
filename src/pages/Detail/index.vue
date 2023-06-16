<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { showTabBar } from '@/stores/counte.js'
import { storeToRefs } from 'pinia'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = showTabBar()
const { handleTrue } = store
const router = useRouter()

// data
const num: Ref<number> = ref(1)
interface DataType {
  img: string | string[],
  price: any,
  totalPrice: number
}
const data: DataType = reactive({
  img: router.currentRoute.value.query.title,
  price: router.currentRoute.value.query.price,
  totalPrice: 0,
})

// methods
const handleBack = () => {
  router.go(-1)
  handleTrue()
}
const open = () => {
  ElMessageBox({
    title: '提示',
    message: h('p', null, [
      h('span', null, '请联系客服取货'),
      h('div', { style: 'color: teal' }, '客服VX：854016993'),
    ]),
  })
}
const handleChange = (e: number = 1): void => {
  data.totalPrice = data.price * e
}
</script>

<template>
  <div class="box">
    <div class="title">
      <span class="back" @click="handleBack"
        ><Back style="width: 1em; height: 1em; margin-right: 8px"
      /></span>
      <span>商品详情</span>
    </div>
    <img :src="data.img" alt="" />
    <!-- <el-carousel trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <img :src="data.img.title" alt="" />
      </el-carousel-item>
    </el-carousel> -->
    <span>型号: <span class="mian_color">19239894893849238498324</span></span>
    <br />
    <span>款式：<span class="mian_color">新款</span></span>
    <br />
    <span
      >出厂价：<span class="mian_color">￥{{ data.price }}</span></span
    >
    <br />
    <span>
      尺码：S
      <el-input-number
        size="small"
        class="ml-20"
        v-model="num"
        :min="1"
        :max="9999"
        @change="handleChange"
      />
    </span>
    <br />
    <span
      >总价格：<span class="mian_color">￥{{ data.totalPrice.toFixed(2) }}</span></span
    >
    <br />
    <span
      >建议售价：<span class="mian_color"
        >￥{{ (data.price * 1.5).toFixed(2) }}</span
      ></span
    >
  </div>

  <div></div>
  <div class="button_pos">
    <el-button @click="open" type="primary">我要选择它</el-button>
  </div>
</template>

<style lang="less" scoped>
.box {
  padding: 3px 10px;
  .title {
    position: relative;
    text-align: center;
    height: 35px;
    line-height: 35px;
    .back {
      position: absolute;
      left: 2px;
      font-size: 20px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

  .mian_color {
    color: red;
  }
}
.button_pos {
  padding: 0 10px;
  text-align: right;
}
</style>
