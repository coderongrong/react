<template>
    <div>foo...</div>
    <span>foo...</span>
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeMount, onBeforeUnmount } from 'vue'

onMounted(() => {
    console.log('onMounted')
})
onUnmounted(() => {
    console.log('onUnmounted')
})
onBeforeMount(() => {
    console.log('onBeforeMount')
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
})
</script>

<style scoped lang='scss'>

$primary-color: red;

div {
    color: $primary-color;
}
$main-blue: blue;
span {
    color: $main-blue;
}
</style>
