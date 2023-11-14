<template>
    <div id='sss'>
        tesHooks
        <h2>{{ data }}</h2>
        <button @click='handleAdd'>+</button>
        <Child :data='data' @handleNum='handleP' />
    </div>
</template>

<script setup lang='ts'>
import Child from './components/Child.vue'
import {ref} from 'vue'

const data = ref(100)
const handleAdd = () => {
    data.value ++ 
}
const handleP = (value) => {
    data.value = value
}
</script>
