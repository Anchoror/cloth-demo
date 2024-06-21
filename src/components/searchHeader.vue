<template>
  <view class="search-header">
    <view
      class="fixed flex z-10001"
      :style="{
        top: menuRect.top + 'px',
        left: 0,
        width: `calc(100% - ${menuRect.width}px)`,
      }"
    >
      <view class="pl-2">
        <image
          :src="logoImg"
          :style="{
            width: menuRect.width + 'px',
            height: menuRect.height + 'px',
          }"
        />
      </view>

      <wd-search
        v-model="searchValue"
        custom-class="flex-1"
        @search="onSearch"
        @cancel="onCancel"
        maxlength="10"
        hide-cancel
      />
    </view>
    <view
      class="fixed top-0 left-0 bg-white z-10000"
      :style="{
        height: menuRect.height + menuRect.top + padbottom + 'px',
        width: '100%',
      }"
    ></view>

    <view
      :style="{
        height: menuRect.height + padbottom + 'px',
        width: '100%',
      }"
    ></view>
  </view>
</template>

<script lang="ts" setup>
import logoImg from '@/static/images/logo.png'
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'

const { menuRect, padbottom } = storeToRefs(useAppStore())
const searchValue = ref('')
const onSearch = () => {
  console.log('222')
}
const onCancel = () => {
  console.log(222)
}

onLoad(() => {})
</script>

<style lang="scss" scoped>
.search-header {
  --wot-search-padding: 0 40rpx;
  --wot-search-side-padding: 40rpx;
}
</style>
