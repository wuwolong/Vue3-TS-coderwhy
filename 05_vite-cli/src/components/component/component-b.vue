<script setup>
defineOptions({
  name: 'component-b',
  inheritAttrs: false,
})
defineProps({
  currentIndex: Number,
})
</script>

<template>
  <div class="component-b">
    component-b
    <input type="text" />
  </div>
</template>

<style lang="less" scoped></style>
