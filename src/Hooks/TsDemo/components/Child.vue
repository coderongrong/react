<template>
    child
    <h1>{{ props.data }}</h1>
    <button @click='onchange'>init</button>
</template>

<script setup lang='ts'>
import { defineProps, withDefaults, defineEmits } from "vue";
interface IProp {
    data: number;
}
interface IEmit {
    (e: "handleNum"): void;
}
const props = withDefaults(defineProps<IProp>(), {});

const emit = defineEmits<IEmit>();
const onchange = () => {
    emit("handleNum", 0);
};
</script>
