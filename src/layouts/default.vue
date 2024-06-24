<template>
  <wd-config-provider :themeVars="themeVars">
    <view
      class="bg-white px-4 page"
      :style="{ marginTop: safeAreaInsets?.top + 'px' }"
      @click="closeOutside"
    >
      <slot />
    </view>

    <wd-toast />
    <wd-message-box />

    <wd-fab
      type="default"
      position="right-bottom"
      direction="top"
      draggable
      custom-class="fab-btn"
      activeIcon="service"
      inactiveIcon="service"
      :zIndex="10000"
      :gap="{
        top: 150,
        right: 16,
        bottom: 100,
        left: 16,
      }"
    >
      <view
        class="w-100rpx h-100rpx rounded-full bg-#8f2833 flex items-center justify-center m-2"
        @click="onMobile"
      >
        <wd-icon name="call" color="#fff" size="50rpx"></wd-icon>
      </view>
      <view
        class="w-100rpx h-100rpx rounded-full bg-#3b5645 flex items-center justify-center m-2"
        @click="onWchat"
      >
        <!-- <wd-icon name="chat" color="#fff" size="50rpx"></wd-icon> -->
        <view class="i-carbon:logo-wechat w-50rpx h-50rpx color-#fff"></view>
      </view>
    </wd-fab>
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'
import { useQueue } from 'wot-design-uni'

const { safeAreaInsets } = uni.getSystemInfoSync()
const { closeOutside } = useQueue()

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}

const onMobile = () => {
  console.log('mobile')
}

const onWchat = () => {
  console.log('wchat')
}
</script>
