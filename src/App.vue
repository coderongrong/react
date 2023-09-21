<template>
    <div id='box' class='drag_box' ref='dragBox'>456</div>
</template>

<script setup>
import { effect, reactive, onMounted, getCurrentInstance, computed, ref} from "vue";
import { drag } from './Hooks/drag'

const dragBox = ref(null)
drag(dragBox)

let state = reactive({name: 'rong', age: 10})

let data = ref(100)
console.log( data )

</script>
