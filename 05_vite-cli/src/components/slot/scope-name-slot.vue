<script setup>
defineOptions({
  name: 'scope-name-slot',
  inheritAttrs: false,
})
const message = ref('scope-name-slot')
//具名作用域插槽的实现
function ScopeSlotNameComponent(slot) {
  const message = ref('scope-name-slot')
  return `<div>${slot['scope-name-slot']({ message })}</div>`
}
ScopeSlotNameComponent({
  ['scope-name-slot']: ({ message }) => {
    // console.log(message)
    return `<h1>${message}</h1>`
  },
})
</script>

<template>
  <div class="scope-name-slot">
    <slot name="scope-name-slot" :message="message">scope-name-slot1</slot>
  </div>
</template>

<style lang="less" scoped></style>
