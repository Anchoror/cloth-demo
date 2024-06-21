<template>
  <view class="w-100% rounded-3 overflow-hidden">
    <cardSwiper class="w-100% h-48" @change="onChange"/>

    <view class="mt-2">
      <view class="text-4">{{ props.data.title }}</view>

      <wd-row :gutter="6" v-for="(item, index) in msg" :key="index">
        <wd-col :span="6">
          <view class="text-28rpx lh-5 text-#999 overflow-hidden text-clip">{{ index }}</view>
        </wd-col>
        <wd-col :span="18">
          <colorBlocks v-if="index === 'color'" :data="item" v-model:active="activeColor" />

          <view class="text-#333 lh-5" v-else-if="['material', 'model'].includes(index)">
            {{ (item as string[])?.join('、') }}
          </view>
          <view class="text-#333 text-3 pt-1" v-else>
            {{ item }}
          </view>
        </wd-col>
      </wd-row>
    </view>
  </view>
</template>

<script lang="ts" setup>
import colorBlocks from './colorBlocks'
import cardSwiper from './cardSwiper'

const props = defineProps<{
  data: Record<string, string | string[]>
}>()

const msg = computed(() => {
  return {
    color: props.data.color,
    model: props.data.model,
    material: props.data.material,
    type: props.data.type,
    desc: props.data.desc,
  }
})

const activeColor = ref(0)

const onChange = (index:number) => {
  activeColor.value = index
} 
</script>

<style lang="scss" scoped>
//
</style>
