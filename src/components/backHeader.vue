<template>
  <view class="back-header">
    <view
      class="fixed flex z-10001"
      :style="{
        top: menuRect.top + 'px',
        left: rightGap + 'px',
        width: `calc(100% - ${menuRect.width + rightGap * 2}px)`,
      }"
    >
      <view
        :style="`
          --wot-button-icon-size: ${menuRect.height}px;
          width:${menuRect.width}px;
          height:${menuRect.height}px;
        `"
      >
        <view
          :style="`width:${menuRect.height}px;height:${menuRect.height}px;border-radius:50%;background-color:rgba(170,170,170,.5)`"
        >
          <wd-button type="icon" icon="thin-arrow-left" @click="back"></wd-button>
        </view>
      </view>

      <view class="flex-1 center text-5 text-#333">
        {{ props.title }}
      </view>
    </view>
    <view
      v-if="props.placeholder"
      class="fixed top-0 left-0 bg-white z-10000"
      :style="{
        height: menuRect.height + menuRect.top + padbottom + 'px',
        width: '100%',
      }"
    ></view>

    <view
      v-if="props.placeholder"
      :style="{
        height: menuRect.height + padbottom + 'px',
        width: '100%',
      }"
    ></view>
  </view>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'

const { menuRect, windowInfo, padbottom } = storeToRefs(useAppStore())

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  placeholder: {
    type: Boolean,
    default: true,
  },
})
const rightGap = ref(windowInfo.value.windowWidth - menuRect.value.right)

const back = () => {
  uni.navigateBack()
}

onLoad(() => {})
</script>

<style lang="scss" scoped>
.back-header {
  --wot-button-icon-color: #fff;
}
</style>
