<script setup>
defineOptions({
  name: 'ref',
  inheritAttrs: false,
})
//伪代码
// const myRef = {
//   _value: 0,
//   get value() {
//     track()
//     return this._value
//   },
//   set value(val) {
//     trigger()
//     this._value = val
//   },
// }
/**
 * 基本使用
 *  可以是任意类型的值,通过.value访问
 *  深层次响应式
 *  解包
 */
//作为reactive对象的属性,只有作为深层次响应式对象的属性才会解包,浅层数响应式对象不会
const count = ref(0)
const state = reactive({ count })
state.count = 1
console.log(state.count, count.value) //解包,对象引用赋值
const state1 = shallowReactive({ count })
console.log(state1.count)

// 作为一个普通对象的属性
const obj = { count }
console.log(obj.count)
// 作为reactive数组中的元素是不会解包的

// 模板中解包,只有顶层的ref才会解包
const info = ref({ names: [] })
</script>

<template>
  <div class="ref">{{ info.names }}</div>
  <input
    type="text"
    @change="
      (e) => {
        info.names.push(e.target.value)
        e.target.value = ''
      }
    "
  />
  <h1>{{ obj.count.value + 1 }}</h1>
</template>

<style lang="less" scoped></style>
