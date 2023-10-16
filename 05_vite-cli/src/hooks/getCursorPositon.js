function getCursorPositon() {
  const x = ref(0)
  const y = ref(0)
  function eventFn(event) {
    x.value = event.clientX
    y.value = event.clientY
  }
  function on() {
    window.addEventListener('mousemove', eventFn)
  }
  on()
  function off() {
    window.removeEventListener('mousemove', eventFn)
  }
  return {
    x,
    y,
    off,
    on,
  }
}

export default getCursorPositon
