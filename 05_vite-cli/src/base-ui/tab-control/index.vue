<script setup>
defineOptions({
  name: 'tab-control',
  inheritAttrs: false,
})
defineProps({
  tabControlItems: {
    type: Array,
    default: () => [],
  },
  width: {
    type: String,
    default(value) {
      return '300px'
    },
  }, // 宽度
  height: { type: String, default: '500px' }, // 高度
})
const { currentIndex, handleChangeCurrentIndex } = inject('currentIndex')
import ComponentA from '@/components/component/component-a.vue'
import tabControlContent from './tab-contol-content.vue'
import ComponentB from '@/components/component/component-b.vue'
</script>

<template>
  <div class="tab-control">
    <div class="tab-control-header">
      <template v-for="(item, index) in tabControlItems">
        <tab-control-item :item="item" :index="index"></tab-control-item>
      </template>
    </div>
    <div class="tab-control-content">
      <tab-control-content
        :content="
          tabControlItems.filter((item, index) => index === currentIndex)[0]
            .name
        "
      ></tab-control-content>
      <keep-alive>
        <component
          :is="currentIndex === 0 ? ComponentA : ComponentB"
          :currentIndex="currentIndex"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tab-control {
  width: v-bind(width);
  height: v-bind(height);
  display: flex;
  flex-direction: column;
  .tab-control-header {
    display: flex;
    flex-basis: 30px;
  }
  .tab-control-content {
    flex: 1;
  }
}
</style>
