<script setup>
defineOptions({
  name: 'list-drag',
  inheritAttrs: false,
})
import { throttle } from 'lodash-es'
const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
])
const delay = 100
const currentDragIndex = ref(null)
// 实现拖拽功能 有几个事件dragStart dragOver dragEnd
function dragstart(index) {
  currentDragIndex.value = index
}
function dragover(index) {
  // 改变数组的顺序
  const item = items.value.splice(currentDragIndex.value, 1)[0]
  items.value.splice(index, 0, item)
  currentDragIndex.value = index
}
function dragend() {
  currentDragIndex.value = null
}
function drop() {
  console.log('click')
}
</script>

<template>
  <div class="list-drag">
    <transition-group tag="ul" name="list">
      <li
        v-for="(item, index) in items"
        :key="index"
        draggable="true"
        @dragstart="dragstart(index)"
        @dragover="throttle(dragover, delay)(index)"
        @drop="drop(index)"
        @dragend="dragend"
        :class="{ active: index === currentDragIndex }"
      >
        {{ index }}-{{ item.id }}-{{ item.name }}
      </li>
    </transition-group>
  </div>
</template>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
li {
  user-select: none;
  list-style: none;
  background-color: #1abc9c;
  margin-top: 10px;
  &.active {
    // transform: scale(1.2);
    background-color: #e67e22;
  }
}
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}

</style>
