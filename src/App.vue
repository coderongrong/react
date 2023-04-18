<template>
  <div>
    App...
    <Demo />
    <div class='wrapper'>asdasd</div>
    <button @click="handleData">get Data</button>
    <div class='box'>
      <div class='main'>asdasd</div>
    </div>
  </div>
</template>

<script>
import Demo from "@/components/Demo.vue";
import { _getTreeData } from "./api/index.js";
export default {
  data() {
    return {};
  },
  components: {
    Demo,
  },
  mounted() {
    // console.log(_.size([1,2,3,4,5]))
  },
  methods: {
    async handleData() {
      const res = await _getTreeData({ parentId: 0, type: 1 });
    //   console.log("res>>>>>", res);
    },
  },
};
</script>

<style lang='less' scoped>
div {
    // color: red;
}
</style>
