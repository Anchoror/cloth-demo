<template>
  <view class="flex h-5 items-center gap-2 overflow-x-auto hidden-scrollbar">
    <view
      v-for="(item, index) in props.data"
      :key="index"
      class="w-3 h-3 rounded-1 shrink-0"
      :class="{
        active: props.active === index,
      }"
      :style="{
        backgroundColor: item,
      }"
    ></view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: string[]
  active: number
}>()
</script>

<style lang="scss" scoped>
//

.hidden-scrollbar {
  &::-webkit-scrollbar {
    display: none;
  }
}

.active {
  @apply h-4 w-4;
}
</style>
