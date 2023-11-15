<template>
    child
    <h1>{{ props.data }}</h1>
    <button @click='onchange'>init</button>
    <div>{{ store.state.age }}</div>
    <button @click='store.commit("add", 10)'>+10</button>
</template>

<script setup lang='ts'>
import { defineProps, withDefaults, defineEmits } from 'vue'
// import { useStore } from 'vuex'
import { useStore } from '../../../myStore/index.js'
const store: object = useStore()
interface IBook {
    title: string
    type: string
}
interface IProp {
    data: number
    reactiveData: IBook
}
interface IEmit {
    (e: 'handleNum'): void
}
const props = withDefaults(defineProps<IProp>(), {})

const emit: IEmit = defineEmits<IEmit>()
const onchange = (): viod => {
    emit<IEmit>('handleNum', 0)
}
interface IO {
    title: string
    icon: string
    path: string
}
interface IData {
    currentIndex: number
    tabBar: Array<Partial<IO>>
}
const datas = reactive({
    currentIndex: 0,
    tabBar: [
        { title: '首页', icon: 'Goods', path: '/main/home' },
        { title: '关于', icon: 'Calendar', path: '/main/about' },
        {
            title: '精选',
            icon: 'Filter',
            path: '/main/choice',
            animation: true
        },
        { title: '个人', icon: 'Iphone', path: '/main/person' }
    ]
})
</script>
