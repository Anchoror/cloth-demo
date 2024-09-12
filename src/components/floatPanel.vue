<template>
  <view
    class="wfull bg-#f8f8f8 absolute bottom-0 left-0 border-rd-t-4 shadow-top overflow-hidden"
    :class="{ 'transition-all-400': isTransfrom }"
    :style="{ height: floatHeight + 'rpx' }"
    @touchstart.stop="ontouchstart"
    @touchmove.stop="ontouchmove"
    @touchend.stop="ontouchend"
  >
    <view class="wfull center h-4">
      <view class="w-12 h-1 bg-#333 rounded-full"></view>
    </view>

    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
const maxFloatHeight = ref(1000)
const anchorHeight = ref([180, maxFloatHeight.value])
const floatHeight = ref(maxFloatHeight.value)

const startY = ref(0)
const startHeight = ref(floatHeight.value)
const startTime = ref(0)
const distanceY = ref(0)
const isTransfrom = ref(false)
const ontouchstart = ($event) => {
  const touch = $event.touches[0]
  const { clientX, clientY } = touch
  const { timeStamp } = $event
  isTransfrom.value = false
  startY.value = clientY
  startHeight.value = floatHeight.value
  startTime.value = timeStamp
}
const ontouchmove = ($event) => {
  const touch = $event.touches[0]
  const { clientX, clientY } = touch
  const { timeStamp } = $event
  distanceY.value = startY.value - clientY
  floatHeight.value = startHeight.value + distanceY.value
}
const ontouchend = ($event) => {
  const touch = $event.touches[0]
  const { clientX, clientY } = touch
  const { timeStamp } = $event

  // 吸附锚点
  isTransfrom.value = true

  const distance = Math.abs(distanceY.value)
  const speed = distance / (timeStamp - startTime.value)
  if (speed > 0.7) {
    if (distanceY.value < 0) {
      floatHeight.value = anchorHeight.value[0]
    } else {
      floatHeight.value = anchorHeight.value[1]
    }
  } else {
    floatHeight.value = startHeight.value
  }
  startHeight.value = floatHeight.value
  startY.value = 0
  startTime.value = 0
  distanceY.value = 0
}
</script>

<style lang="scss" scoped>
.shadow-top {
  // box-shadow: rgba(0, 0, 0, 0.08) 0px -1px 2px;
}
</style>
