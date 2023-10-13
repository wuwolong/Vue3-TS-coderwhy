<!--渲染模版-->
<template>
  <h1>{{ msg }}</h1>
  <HelloWorld />
  <el-button>按钮</el-button>
</template>

<!--样式描述-->
<style scoped>
h1 {
  color: red;
}
</style>

<!--组件逻辑-->
<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/HelloWorld'
const msg = ref('webpack-js-vue')
</script>
