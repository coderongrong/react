import { reactive, onMounted } from 'vue'
export function drag(dragBox) {
  const data = reactive({ disX: 0, disY: 0 })
  return onMounted(() => {
    function handlemove(e) {
      dragBox.value.style.left = e.clientX - data.disX + 'px'
      dragBox.value.style.top = e.clientY - data.disY + 'px'
    }
    const handleClick = (e) => {
      data.disX = e.offsetX
      data.disY = e.offsetY
      document.addEventListener('mousemove', handlemove, false)

        // dragBox.value.removeEventListener('mousedown', handleClick)
    }
    dragBox.value.addEventListener('mousedown', handleClick, false)
    document.addEventListener(
      'mouseup',
      function () {
        document.removeEventListener('mousemove', handlemove)
      },
      false
    )
  })
}
