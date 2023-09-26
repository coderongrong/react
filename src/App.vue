<template>
    <!-- <div id='box' class='drag_box' ref='dragBox'>drag</div> -->
    <h2>count: {{ count }}</h2>
    <button @click='handleDec'>click des</button>
    <Provide />
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
import Provide from "./test/Provide.vue";
import { useDebouncedRef } from "./Hooks/debouncedRef";
import { useCounterStore } from './stores/counte'
import {storeToRefs} from 'pinia' 
// import { drag } from './Hooks/drag'
// const dragBox = ref(null)
// drag(dragBox)

const {count} = storeToRefs(useCounterStore())
const { handleDec } = useCounterStore()

const text = useDebouncedRef("hello");



</script>
