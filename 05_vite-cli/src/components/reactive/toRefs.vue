<script setup>
defineOptions({
  name: 'toRefs',
  inheritAttrs: false,
})
/**
 * 应用场景解构reactive对象
 * 组合函数hooks的返回值,使用toRefs非常管用
 */
const { name, age } = toRefs(reactive({ name: 'why', age: 42 }))
/**
 * toRef的基本使用
 *  普通值
 *  ref值
 *  reactive对象,注意二者同时指向一个对象
 *  getter
 *
 */
// const count = toRef(0)
// console.log(count)
// const count = toRef(ref(0))
// console.log(count)
// const info = toRef(reactive({ info: { name: 'curry' } }), 'info')
const state = reactive({ info: { name: 'curry' } })
const info = toRef(() => state.info)
info.value.name = 'kobe'
console.log(info, state.info.name)
</script>

<template>
  <div class="toRefs">toRefs</div>
  <h1>{{ name }}{{ age }}</h1>
  <input type="text" v-model="name" />
  <input type="text" v-model="age" />
</template>

<style lang="less" scoped></style>
