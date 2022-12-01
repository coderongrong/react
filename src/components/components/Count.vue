<template>
  <div>Count...APP</div>
  <div>count: {{ count }}</div>
  <div>foo: {{ state.foo }}</div>
  <div>{{ foo }}--{{ bar }}</div>
  <div>vue: {{ refBook }}</div>
  <div>state.vue:  {{ state.book }}</div>
  <div>memoCpunt: {{ memoCpunt }}</div>
  <div>shallowRef->newCount: {{ newCount.count}}</div>
  <!-- <Home :state='state' /> -->
</template>

<script setup>
import { ref, reactive, toRefs, toRef, computed, shallowRef } from "vue";
import Home from './Home.vue'

const count = ref(100);
const state = reactive({
  book: 'js',
  year: 10
});

const newCount = shallowRef({count: 10})

const memoCpunt = computed(() => {
    return count.value + 100
})

// const refBook = toRef(state, 'book')
let refBook = state.book

setTimeout(() => {
    refBook += '-vue'
    newCount.value = {count: 20}
}, 1000)

setTimeout(() => {
    state.book += '--react'
}, 2000)

function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2,
  });

  // ...基于状态的操作逻辑

  // 在返回时都转为 ref
  return toRefs(state);
}

// 可以解构而不会失去响应性
const { foo, bar } = useFeatureX();

setTimeout(() => {
    foo.value ++ 
    bar.value ++ 
    // console.log(foo.value, bar.value)
}, 1000)

</script>
