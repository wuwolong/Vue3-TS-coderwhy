<script setup>
defineOptions({
  name: 'tab-control-content',
  inheritAttrs: false,
})
defineProps({
  content: String,
})
</script>

<template>
  <div class="tab-control-content">{{ content }}</div>
</template>

<style lang="less" scoped>
// div {
//   border-bottom: 1px solid transparent;
// }
</style>
