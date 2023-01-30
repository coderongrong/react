<template>
  <div>
    <div>about...</div>
    <el-tree
      :data="data.data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick"
    />
    <div :class="classes.red">123</div>
    <!-- <img :src="imgUrl" alt=""> -->
    <button @click="handleFetch">FETCH</button>
    <div>{{ state }}</div>
    <div>{{ foo }}</div>
    <div>{{ object.bar }}</div>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>


<script setup>
import Foo from "./child/Foo.vue";
import Render from "./child/render.js";

import {
  ref,
  onMounted,
  toRaw,
  reactive,
  isRef,
  toRef,
  isReactive,
  toRefs,
  customRef,
  inject,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import classes from "../assets/example.module.css";
import { isArray } from "lodash";

const imgUrl = new URL("../assets/img/abc.jpeg", import.meta.url).href;

const service = inject("data");
const handleNodeClick = (data) => {
  console.log(toRaw(data));
};
let data = reactive({
  data: [
    {
      label: "Level one 1",
      children: [
        {
          label: "Level two 1-1",
          children: [
            {
              label: "Level three 1-1-1",
            },
          ],
        },
      ],
    },
    {
      label: "Level one 2",
      children: [
        {
          label: "Level two 2-1",
          children: [
            {
              label: "Level three 2-1-1",
            },
          ],
        },
        {
          label: "Level two 2-2",
          children: [
            {
              label: "Level three 2-2-1",
            },
          ],
        },
      ],
    },
    {
      label: "Level one 3",
      children: [
        {
          label: "Level two 3-1",
          children: [
            {
              label: "Level three 3-1-1",
            },
          ],
        },
        {
          label: "Level two 3-2",
          children: [
            {
              label: "Level three 3-2-1",
            },
          ],
        },
      ],
    },
  ],
});

const defaultProps = {
  children: "children",
  label: "label",
};
const handleData = (data) => {
  if (!isArray(data)) return null;
  return data.map((item) => {
    return {
      ...item,
      label: item.productClassName,
      children: handleData(item.children),
    };
  });
};
const route = useRoute();
const num = 10;
const count = ref(1);
onMounted(async () => {
  const { result } = await service.axios.get(
    `/sys/productClass/queryByParentId?_t=1669339352&parentId=0&type=1`
  );
  data.data = result.map((item) => {
    return {
      ...item,
      label: item.productClassName,
      children: handleData(item.children),
    };
  });
});

const handleFetch = async () => {
  //  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  state = "yang";
  console.log(state);
};

const object = { bar: ref(10) };

let { state, foo } = toRefs(
  reactive({
    state: "rong",
    foo: 10,
  })
);

const isShow = ref(true);
const handleCount = () => {
  foo.value++;
  // console.log(foo);
};
</script>

<style scoped>
</style>
