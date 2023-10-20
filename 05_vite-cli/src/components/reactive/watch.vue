<script setup>
defineOptions({
  name: 'watch',
  inheritAttrs: false,
})
/**
 * 参数
 * source
 *  getter
 *  ref
 *  reactive
 *  Array
 * cb:WatchCallback:(value,oldValue,onCleanUp:(cleanUpFn:()=>viod))=>viod
 *  副作用函数
 * options?
 */
// getter
const count = ref(0)
// watch(
//   () => count.value,
//   (value, oldValue, onCleanUp) => {
//     console.log(value, oldValue, onCleanUp)
//   }
// )
// ref 默认是浅层次
const state = ref({ name: 'kobe' })
watch(
  state,
  (value, oldValue, onCleanUp) => {
    console.log(value, oldValue, onCleanUp)
  }
  // { deep: true }
)
</script>

<template>
  <div class="watch">watch</div>
  <input type="text" v-model="count" />
  <input type="text" v-model="state.name" />
</template>

<style lang="less" scoped></style>
