<script>
import { ref, h } from 'vue'

export default {
  props: {
    msg: {
        type: Number,
        default: () => 0
    }
  },
  setup(props) {

    const count = ref(1)
    const ok = ref(1)
    console.log(props)

    return () => h('div', [ok.value ? h('div', 'yes') : h('span', 'no')])
    return () => [
      h('div', 200),
      h('div', 200),
      h('div', 200),
      h('div', 200),
      h('div', 200),
    ]
    // 返回渲染函数
    return () => h('div', props.msg + count.value)
  }
}
</script>