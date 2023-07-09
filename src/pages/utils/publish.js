export function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2,
  })

  // ...基于状态的操作逻辑
  watch(
    () => state.foo,
    () => {
      console.log('xxxxxxxxxxxxxx', state.foo)
    }
  )
  // 在返回时都转为 ref
  return toRefs(state)
}

// 可以解构而不会失去响应性
//   const { foo, bar } = useFeatureX()
