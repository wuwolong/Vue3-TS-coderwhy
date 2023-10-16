<script setup>
defineOptions({
  name: 'component-a',
  inheritAttrs: false,
})
defineProps({
  currentIndex: Number,
})
const count = ref(0)
</script>

<template>
  <div class="component">
    component-a
    <h1>{{ count }}</h1>
    <button @click="() => count++">+1</button>
  </div>
</template>

<style lang="less" scoped></style>
