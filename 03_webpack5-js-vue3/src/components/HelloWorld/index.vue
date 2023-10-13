<script setup>
defineOptions({
  name: 'HelloWorld',
  inheritAttrs: true,
})

const msg = ref('hello world')
</script>

<template>
  <div class="name">
    {{ msg }}
  </div>
</template>

<style lang="less" scoped></style>
