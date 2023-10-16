<script setup>
defineOptions({
  name: 'cursor-positon',
  inheritAttrs: false,
})
import getCursorPositon from '@/hooks/getCursorPositon'
const { x, y, off, on } = getCursorPositon()
</script>

<template>
  <div class="cursor-positon">
    <slot :x="x" :y="y" :off="off" :on="on">cursor-positon</slot>
  </div>
</template>

<style lang="less" scoped></style>
