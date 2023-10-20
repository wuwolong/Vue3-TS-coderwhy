<script setup>
defineOptions({
  name: 'reactive',
  inheritAttrs: false,
})
/*
 *  1.基本使用
 *    只能对对象类型数据使用,基本数据类型不可以
 *  2.局限性
 *    只能对对象类型数据使用
 *    解构后的值不是响应式的
 *  3.赋值操作会失去响应式,但是ref.value的赋值操作是不会的
 */
// const counter = reactive(100) //reactive.vue:11  value cannot be made reactive: 100

// const { counter } = reactive({ counter: 100 })
// const { value } = ref({ counter: 100 })
// function increament() {
//   value.counter++
// }
let state = reactive({ counter: 1 })
state = reactive({ counter: 2 })
function increament() {
  state.counter++
}
</script>

<template>
  <div class="reactive">
    <h1>{{ state.counter }}</h1>
    <button @click="increament">+1</button>
  </div>
</template>

<style lang="less" scoped></style>
