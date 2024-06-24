<template>
  <view
    class="wfull"
    :style="{
      height: 'calc(100vh - ' + safeAreaInsets?.top + 'px)',
    }"
  >
    <scroll-view scroll-y class="wfull h-100%" :show-scrollbar="false">
      <view v-for="(img, index) in pics" :key="index">
        <image class="wfull" :src="img" mode="widthFix"></image>
      </view>
    </scroll-view>

    <view
      class="wfull bg-pink absolute bottom-0 left-0 border-rd-t-4"
      :class="{ 'transition-all': isTransfrom }"
      :style="{ height: floatHeight + 'rpx' }"
      @touchstart.stop="ontouchstart"
      @touchmove.stop="ontouchmove"
      @touchend.stop="ontouchend"
    >
      <view class="wfull center h-6">
        <view class="w-12 h-2 bg-#eee rounded-full"></view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import clothSvg from '@/static/images/clothing.svg'
import cloth2Svg from '@/static/images/clothing2.svg'
import cloth3Svg from '@/static/images/clothing3.svg'
import cloth4Svg from '@/static/images/clothing4.svg'

const pics = ref([clothSvg, cloth2Svg, cloth3Svg, cloth4Svg])

const { safeAreaInsets } = uni.getSystemInfoSync()

const floatHeight = ref(1000)
const maxFloatHeight = ref(1200)
const anchorHeight = ref([100, 600, maxFloatHeight.value])

const startY = ref(0)
const startHeight = ref(floatHeight.value)
const distanceY = ref(0)
const isTransfrom = ref(false)
const ontouchstart = ($event) => {
  const touch = $event.touches[0]
  const { clientX, clientY } = touch
  isTransfrom.value = false
  startY.value = clientY
  startHeight.value = floatHeight.value
}
const ontouchmove = ($event) => {
  const touch = $event.touches[0]
  const { clientX, clientY } = touch
  distanceY.value = startY.value - clientY
  floatHeight.value =
    startHeight.value + distanceY.value > maxFloatHeight.value
      ? maxFloatHeight.value
      : startHeight.value + distanceY.value
}
const ontouchend = ($event) => {
  const touch = $event.touches[0]
  const { clientX, clientY } = touch
  startY.value = 0
  distanceY.value = 0

  // 吸附锚点
  isTransfrom.value = true
  const distanceAnchor = anchorHeight.value.map((item) => {
    return Math.abs(floatHeight.value - item)
  })
  floatHeight.value = anchorHeight.value[distanceAnchor.indexOf(Math.min(...distanceAnchor))]
  startHeight.value = floatHeight.value
}
</script>

<style lang="scss" scoped></style>
