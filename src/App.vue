<template>
    <div id='box' class='drag_box' ref='dragBox'>drag</div>
    <h2>count: {{ count }}</h2>
    <button @click='handleDec'>click des</button>
    <button @click='handlebook'>click handlebook</button>
    <!-- <Provide :book='book' @handleBooks='handleBooks' /> -->
    <!-- <router-view></router-view> -->
    <TsDemo />
</template>

<script setup>
import {
    effect,
    reactive,
    onMounted,
    getCurrentInstance,
    computed,
    ref,
    watchEffect,
    unref,
    triggerRef,
    shallowRef,
    provide,
} from "vue";
import Provide from "./test/pinia/Provide.vue";
import { useDebouncedRef } from "./Hooks/Drag/debouncedRef";
import { useCounterStore } from "./stores/counte";
import TsDemo from './Hooks/TsDemo/index.vue'
// import {storeToRefs} from 'pinia'
import { drag } from './Hooks/Drag/drag.js';
const dragBox = ref(null)
drag(dragBox)
const { count } = storeToRefs(useCounterStore());
const { handleDec } = useCounterStore();

const book = reactive({
    name: 'rong',
    age: '10'
})
const handlebook = () => {
    book.name = 'www'
}
const handleBooks = (a) => {
    book.name = a
}
const text = useDebouncedRef("hello");
</script>
