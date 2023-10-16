<script setup>
const tabControlItems = ref([
  { name: '手机', active: true },
  { name: '电脑', active: false },
  { name: '平板', active: false },
])
import { mitter } from '@/utils'
import ComponentA from './components/component/component-a.vue'
import ComponentB from './components/component/component-b.vue'
mitter.on('handleClick', (payload) => {
  tabControlItems.value.some(
    (item, index) => item.active === true && (item.active = false)
  )
  tabControlItems.value.some(
    (item, index) => index === payload && (item.active = true)
  )
})
const currentIndex = ref(0)
function handleChangeCurrentIndex(index) {
  currentIndex.value = index
}
provide('currentIndex', { currentIndex, handleChangeCurrentIndex })
const slotA = ref('name-slot')
const view = shallowRef(ComponentA)
</script>

<template>
  <TabControl :tabControlItems="tabControlItems"></TabControl>
  <DefaultSlot>default-slot</DefaultSlot>
  <NameSlot>
    <template #[slotA]>
      <div>{{ slotA }}</div>
    </template>
  </NameSlot>
  <ScopeNameSlot>
    <template #scope-name-slot="{ message }">
      <h1>{{ message }}</h1>
    </template>
  </ScopeNameSlot>
  <CursorPositon>
    <template v-slot="{ x, y, off, on }">
      <div>Mouse is at: {{ x }}, {{ y }}</div>
      <button
        @click="
          () => {
            off()
          }
        "
      >
        OFF
      </button>
      <button
        @click="
          () => {
            on()
          }
        "
      >
        ON
      </button>
    </template>
  </CursorPositon>
  <component :is="ComponentA" />
  <component is="div" />
</template>

<style scoped></style>
