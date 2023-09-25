<template>
    <div id='box' class='drag_box' ref='dragBox'>drag</div>
</template>

<script setup>
import { effect, reactive, onMounted, getCurrentInstance, computed, ref, watchEffect} from "vue";
import { drag } from './Hooks/drag'

const dragBox = ref(null)
drag(dragBox)

const state = reactive({name: 'www'})

</script>
