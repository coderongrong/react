<template>
    <div id='sss'>
        tesHooks
        <h2>{{ data }}</h2>
        <h2>{{ double }}</h2>
        <button @click='handleAdd'>+</button>
        <div>parent: {{ store.state.age }}</div>
        <div>getters: {{ store.getters.myAge }}</div>
        <Child
            :data='data'
            :reactiveData='reactiveData'
            @handleNum='handleP'
        />
        <button @click='handleStore'>store.state</button>
        <button @click='asyncHandleStore'>asyncHandleStore</button>
    </div>
</template>

<script setup lang='ts'>
import Child from './components/Child.vue'
import { ref, reactive, computed, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '../../myStore'
import type { Ref } from 'vue'

const store: object = useStore()

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
    console.log('onmounted', useStore())
})

const handleStore = (): viod => {
    store.commit('add', 1)
}
const asyncHandleStore = (): viod => {
    store.dispatch('asyncAdd', 5)
}
</script>
