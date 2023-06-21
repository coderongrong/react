<template>
  <div>children</div>
  <h3>{{ text }}</h3>
  <h1>{{ msg }}</h1>
  <button @click="() => emit('changeChildren', '123456')">+</button>
  <button @click="() => emit('delete', 'delete')">+</button>
  <h3>{{ state }}</h3>
  <h3>{{ memoNum }}</h3>
  <h3>{{ stateData.foo }}</h3>
  <h3>{{ stateData.nested.bar }}</h3>
  <button @click='handleBtn'>+</button>  
  <button @click='handleBtn1'>+</button>
  <div>-----------list</div>
  <List />
  <div>storeData: {{ count }}</div>
  <button @click='increment'>+ 1</button>
  <h1>-------</h1>
  <Demo :msg='1000' />
</template>

<script setup lang='ts'>
import List from './List.vue'
import Demo from './Demo.vue'

import { useSlots,
  useAttrs,
  h,
  ref,
  computed,
  shallowReadonly,
  onMounted,
  reactive,
  readonly,
  watchEffect,
  isRef,
  isReactive,
  isReadonly,
  unref,
  toRef,
  shallowRef,
  triggerRef
} from 'vue'
import type { Ref } from 'vue'
import { useCounterStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment } = useCounterStore()

// ref reactive computed watch watchEffect readonly

// 工具函数 isRef()
//  unref() toRef() toRefs() isProxy()
//  isReactive() isReadonly()

// 进阶 shallowRef() shallowReadonly() shallowReactive() 
// triggerRef() customRef() toRaw() markRaw() effectScope() getCurrentScope() onScopeDispose()

import { useDebouncedRef } from './debouncedRef'
const text = useDebouncedRef('hello')
onMounted(() => {
  // const text = useDebouncedRef('hello')
})

const slots = useSlots()
const attrs = useAttrs()

const original = reactive({ count: 0 })

const _foo = toRef(original, 'count')
_foo.value += 100
// console.log('original   original', original, _foo.value)

const copy = readonly(original)
const _refdata = ref(100)
const readData = readonly({count: 100})
watchEffect(() => {
  // 用来做响应性追踪
  // console.log('watchEffect', original.count, _foo.value)

}, {
  flush: 'post',
  onTrack(e) {
    // console.log(e)
  },
  onTrigger(e) {
    // console.log(e)
    // debugger
  }
})

const handleBtn = () => {
  original.count ++ 
}

const handleBtn1 = () => {
  original.count ++ 
}

const shallow = shallowRef({greet: 'red'})
watchEffect(() => {
  // console.log(shallow.value.greet)
})
// shallow.value = {greet: 'blue'}
shallow.value.greet = 'Hello, universe'
// triggerRef(shallow)

const state: Ref<string | number> = ref(2022)
const memoNum: Ref<number | string> = computed((): number => {
  return state.value * 2
})
interface Book {
  title: string
  author: string
  year: number
}

const stateData = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2
  }
})
// stateData.foo ++
stateData.nested.bar ++

interface PropsInt {
  foo?: String,
  msg: String | Number
}

const { foo, msg } = defineProps<PropsInt>()

const emit = defineEmits<{
  (e: 'changeChildren', id: number): void,
  (e: 'delete', value: string | number): void
}>();

let counts = $ref(0)
// console.log(count)

h('div', { id: 'foo' }, 'hello')

</script>

<style scoped>
</style>
