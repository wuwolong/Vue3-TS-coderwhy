<template>
  <h1 class="title">
    {{ name }}
  </h1>
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    const name = "和光不同尘";
    return {
      name,
    };
  },
});
</script>
