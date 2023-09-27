<template>
    <div>provide --- {{ propsData.book }}</div>
    <button @click='handleBooks'>click provide</button>
    <Foo />
</template>

<script setup>
import { inject, defineProps, defineEmits } from "vue";
import Foo from './Foo.vue'

const propsData = defineProps({
    book: {
        type: Object,
        default: () => {}
    }
})

const emit = defineEmits(['handleBooks'])
const handleBooks = () => {
    emit('handleBooks', 'abc')
}

</script>
