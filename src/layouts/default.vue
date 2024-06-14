<template>
  <wd-config-provider :themeVars="themeVars">
    <view
      class="bg-white overflow-hidden pt-2 px-4"
      :style="{ marginTop: safeAreaInsets?.top + 'px' }"
    >
      <slot />
    </view>

    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'

const { safeAreaInsets } = uni.getSystemInfoSync()

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>
