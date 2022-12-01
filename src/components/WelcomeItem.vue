
<template>
  <div>WelcomeItem</div>
  <ul>
    <li v-for="(item, index) in items.items" :key='index'>
      <slot name="item" v-bind="item"></slot>
    </li>
  </ul>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
const items = reactive({
  items: [
    {
      body: 1,
      username: "a",
      likes: "xx",
    },
    {
      body: 2,
      username: "b",
      likes: "yy",
    },
    {
      body: 3,
      username: "c",
      likes: "zz",
    },
  ],
});
</script>
