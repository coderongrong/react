<template>
  <div class="wrrape">
    <div v-for="(item, index) in 200" :key="index" class="main">
      <template v-if="isShow(index)">
        <div clas="contain" style="display: flex; flex-wrap: wrap; border: 1px solid red;">
          <div class="box" v-for="(item, index) in 10000" :key="index"></div>
        </div>
      </template>
    </div>
    <!-- <div class="main">
      <div
        clas="contain"
        style="display: flex; flex-wrap: wrap; border: 1px solid red"
        v-if="isShow(1)"
      >
        <div class="box" v-for="(item, index) in 8000" :key="index"></div>
      </div>
    </div>
    <div class="main">
      <div
        clas="contain"
        style="display: flex; flex-wrap: wrap; border: 1px solid red"
        v-if="isShow(60)"
      >
        <div class="box" v-for="(item, index) in 8000" :key="index"></div>
      </div>
    </div>
    <div class="main">
      <div
        clas="contain"
        style="display: flex; flex-wrap: wrap; border: 1px solid red"
        v-if="isShow(100)"
      >
        <div class="box" v-for="(item, index) in 8000" :key="index"></div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
const count = ref(0)

onMounted(() => {
  function refresh(num = 1000) {
    count.value++
    requestAnimationFrame(() => {
      if (count.value * 5 <= num) {
        refresh()
      }
    })
  }
  refresh()
})

const isShow = (index) => {
  return count.value >= index
}
</script>

<style lang="less" scoped>
.wrrape {
  // display: flex;
  background: #fff;
}
.main {
  width: 32%;
  margin: 5px 5px;
  display: inline-block;
}
.contain {
  display: flex !important;
  flex-wrap: wrap !important;
}
.box {
  margin: 1px;
  width: 1px;
  height: 1px;
  background: #ccc;
  line-height: 1px;
}
</style>
