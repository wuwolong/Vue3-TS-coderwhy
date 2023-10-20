<template>
  <transition-group
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <li
      v-for="(item, index) in items"
      :key="item.id"
      :data-index="index"
      draggable="true"
      @dragstart="dragStart(index)"
      @dragover="dragOver(index)"
      @drop="drop(index)"
      @dragend="dragEnd"
    >
      {{ item.name }}
    </li>
  </transition-group>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
      ],
      draggingIndex: null,
    }
  },
  methods: {
    dragStart(index) {
      this.draggingIndex = index
    },
    dragOver(index) {
      if (this.draggingIndex === null) return
      const draggingItem = this.items[this.draggingIndex]
      this.items.splice(this.draggingIndex, 1)
      this.items.splice(index, 0, draggingItem)
      this.draggingIndex = index
    },
    drop(index) {
      this.draggingIndex = null
    },
    dragEnd() {
      this.draggingIndex = null
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done,
      })
    },
    onBeforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      })
    },
  },
}
</script>
<style lang="less" scoped>
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
