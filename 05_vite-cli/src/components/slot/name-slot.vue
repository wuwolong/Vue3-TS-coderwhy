<script setup>
defineOptions({
  name: 'name-slot',
  inheritAttrs: false,
})
</script>

<template>
  <div class="name-slot">
    <slot name="name-slot"></slot>
  </div>
</template>

<style lang="less" scoped></style>
