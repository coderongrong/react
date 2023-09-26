<template>
    <div>foo</div>
    <h2>count: {{ count }}</h2>
    <button @click='handleAdd'>click count</button>
</template>

<script setup>
import Foo from "./Foo.vue";
import { useCounterStore } from "../stores/counte";
import {storeToRefs} from 'pinia' 

const { count } = storeToRefs(useCounterStore());
const { handleAdd } = useCounterStore()

// 注入不含默认值的静态值
// 注入响应式的值

</script>
