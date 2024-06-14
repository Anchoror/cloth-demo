<template>
  <view class="flex h-5 items-center gap-2 overflow-x-auto hidden-scrollbar">
    <view
      v-for="item in props.data"
      :key="item"
      class="w-4 h-4 rounded-1 shrink-0"
      :style="{
        backgroundColor: item,
      }"
    ></view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: string[]
}>()
</script>

<style lang="scss" scoped>
//

.hidden-scrollbar {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
