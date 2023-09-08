<template>
    <div>456</div>
</template>

<script setup lang="ts">
import { effect, reactive } from "vue";
// import enquireScreen from '@/utils/device'

// onMounted(() => {
//   enquireScreen((deviceType) => {
//     if (deviceType == -1) {
//       // console.log('pc')
//     } else if (deviceType == 0) {
//       // console.log('平板')
//     } else {
//       // console.log('手机')
//     }
//   })
// })
interface Book {
    car: string;
    feel: string;
}
let state = reactive({name: 'rong', arr: [1,2,3]})
effect(() => {
    state.name
})
</script>
