<template>
    <div>Home...app</div>
    <div>state{{ state }}</div>
    <div>state:{{ state.book }}</div>
</template>

<script setup>
import { defineProps, toRaw } from 'vue'

const { state } = defineProps(['state'])

console.log(toRaw(state))

</script>
