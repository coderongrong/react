<script setup lang="ts">
import { h, ref, reactive } from 'vue'
import type { Ref } from 'vue'
import { ElMessageBox, ElSwitch } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const data = reactive({
  img: router.currentRoute.value.query,
})

// methods
const handleBack = () => {
  router.go(-1)
}
const open = () => {
  ElMessageBox({
    title: '提示',
    message: h('p', null, [
      h('span', null, '请联系客服取货'),
      h('div', { style: 'color: teal' }, '客服VX：88888888'),
    ]),
  })
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
    <img :src="data.img.title" alt="" />
    <span>型号: <span class="mian_color">19239894893849238498324</span></span>
    <br />
    <span>款式：<span class="mian_color">新款</span></span>
    <br />
    <span
      >出厂价：<span class="mian_color">￥{{ data.img.price }}</span></span
    >
    <br />
    <span
      >建议售价：<span class="mian_color"
        >￥{{ data.img.price * 1.5 }}</span
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
