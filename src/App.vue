<template>
    <div id='box'>456</div>
</template>

<script setup>
import { effect, reactive, onMounted, getCurrentInstance} from "vue";
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
// interface Book {
//     car: string;
//     feel: string;
// }

let state = reactive({name: 'rong', age: 10})
// effect(() => {
//     console.log('effect')
//     state.name
// })

onMounted(() => {
    console.log('abc', getCurrentInstance())
})

// setTimeout(() => {
//     state.name = 'www'
// }, 2000)
</script>
