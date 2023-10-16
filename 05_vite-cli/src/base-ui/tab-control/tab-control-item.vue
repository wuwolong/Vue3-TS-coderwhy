<script setup>
defineOptions({
  name: 'tab-control-item',
  inheritAttrs: false,
})
const { item, index } = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  index: {
    type: Number,
  },
})
// const { name, active } = item
import { mitter } from '@/utils'
// function handleClick() {
//   mitter.emit('handleClick', index)
// }
function handleClick() {
  handleChangeCurrentIndex(index)
}
const { currentIndex, handleChangeCurrentIndex } = inject('currentIndex')
</script>

<template>
  <div
    class="tab-control-item"
    @click="handleClick"
    :class="{ active: currentIndex === index }"
  >
    {{ item.name }}
  </div>
</template>

<style lang="less" scoped>
.tab-control-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  &.active {
    border-bottom: 2px solid red;
  }
}
</style>
