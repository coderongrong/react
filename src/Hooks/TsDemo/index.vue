<template>
    <div id='sss'>
        tesHooks
        <h2>{{ data }}</h2>
        <h2>{{ double }}</h2>
        <button @click='handleAdd'>+</button>
        <Child
            :data='data'
            :reactiveData='reactiveData'
            @handleNum='handleP'
        />
    </div>
</template>

<script setup lang='ts'>
import Child from './components/Child.vue'
import { ref, reactive, computed, onMounted } from 'vue'
import type { Ref } from 'vue'

interface IBook {
    title: string
    type: string
}
const data: Ref<number | string> = ref(100)
const reactiveData: IBook = reactive({
    title: 'vue3',
    type: 'ts'
})
const double = computed<number | string>(() => data.value * 2)
const handleAdd = (): void => {
    data.value++
}
const handleP = (value: number): void => {
    data.value = value
}
onMounted(() => {
    console.log('onmounted')
})
</script>
