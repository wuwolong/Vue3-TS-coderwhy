<script setup>
defineOptions({
  name: 'computed',
  inheritAttrs: false,
})
/**
 * 基本使用
 *  缓存,依赖变化才会重新执行
 *  getter
 *  对象get set
 *  返回值是一个ref
 */

const firstName = ref('Wu')
const lastName = ref('Noah')
// getter
const fullName = computed(() => lastName.value + '-' + firstName.value)
// 对象
const fullName1 = computed({
  get() {
    return lastName.value + '-' + firstName.value
  },
  set(newVal) {
    const res = newVal.split('-')
    ;[firstName.value, lastName.value] = res
    console.log(newVal)
  },
})
</script>

<template>
  <div class="computed">computed</div>
  <h1>{{ fullName }}</h1>
  <h1>{{ fullName1 }}</h1>
  <input type="text" v-model="fullName1" />
</template>

<style lang="less" scoped></style>
