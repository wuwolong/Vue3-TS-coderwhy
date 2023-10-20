<script setup>
defineOptions({
  name: 'customRef',
  inheritAttrs: false,
})
function debounceRef(value, delay = 200) {
  return customRef((track, trigger) => {
    let timer = null
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newVal
          trigger()
        }, delay)
      },
    }
  })
}

const text = debounceRef('hello world')
// const text = ref('hello world')
</script>

<template>
  <div class="customRef">
    <input v-model="text" />
    <h1>{{ text }}</h1>
  </div>
</template>

<style lang="less" scoped></style>
