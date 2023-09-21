<template>
    <div
        id='box'
        class='drag_box'
        ref='dragBox'
    ></div>
</template>

<script setup>
import { ref } from "vue";
import { drag } from "./drag";
const dragBox = ref(null);
drag(dragBox);

</script>
