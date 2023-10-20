<script setup>
defineOptions({
  name: 'watchEffect',
  inheritAttrs: false,
})
/**
 * 基本使用
 * 参数
 *  watchEffect
 *   要执行的副作用函数,
 *   这个函数也可以有一个参数onCleanUp,这个参数是一个函数,作用为取消副作用,调用时机是在下一次副作用函数执行前调用
 *
 *  options?:设置flush:post,会在组件渲染后才执行
 * 是否立即执行,会立即执行
 */
const text = ref('xxx')
watchEffect((onCleanUp) => {
  // console.log(text.value)
  const params = text.value
  let timer = setTimeout(() => {
    console.log('response')
  }, 2000)
  onCleanUp(() => {
    clearTimeout(timer)
  })
})
const title = ref(null)
watchEffect(
  () => {
    console.log(title.value)
  },
  { flush: 'post' }
)
</script>

<template>
  <div class="watchEffect">watchEffect</div>
  <input type="text" v-model="text" />
  <div ref="title"></div>
</template>

<style lang="less" scoped></style>
