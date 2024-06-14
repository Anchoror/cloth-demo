<template>
  <view class="w-100% rounded-3 overflow-hidden">
    <img class="w-100% h-48 bg-#f8f8f8" :src="clothingSvg" alt="" />
    <view class="footer">
      <view class="text-4">Elbow Patch Blazer</view>

      <wd-row :gutter="6" v-for="(item, index) in data" :key="index">
        <wd-col :span="6">
          <view class="text-28rpx lh-5 text-#999 overflow-hidden text-clip">{{ index }}</view>
        </wd-col>
        <wd-col :span="18">
          <colorBlocks v-if="index === 'color'" :data="item" />
          <view class="text-#333 text-3 pt-1" v-else-if="index === 'desc'">
            {{ item }}
          </view>
          <view class="text-#333" v-else>
            {{ (item as string[])?.join('、') }}
          </view>
        </wd-col>
      </wd-row>
    </view>
  </view>
</template>

<script lang="ts" setup>
import clothingSvg from '@/static/images/clothing.svg'
import colorBlocks from './colorBlocks'

const data = {
  // color: ['#8c7059', '#507462', '#b3574a', '#535fa1', '#e7c5af', '#f8f8f8', '#1a181b'],
  color: ['#8c7059', '#507462', '#b3574a'],
  model: ['S', 'M', 'L'],
  material: ['kapok'],
  desc: '圆领、长袖、当下热卖哦',
}
</script>

<style lang="scss" scoped>
//
</style>
