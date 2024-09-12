<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '详情',
  },
}
</route>

<template>
  <backHeader :placeholder="false" />
  <view
    class="wfull"
    :style="{
      height: 'calc(100vh - ' + safeAreaInsets?.top + 'px)',
    }"
  >
    <swiper>
      <swiper-item>
        <scroll-view scroll-y class="wfull h-100%" :show-scrollbar="false">
          <view v-for="(img, index) in pics" :key="index">
            <image class="wfull" :src="img" mode="widthFix" lazy-load></image>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view scroll-y class="wfull h-100%" :show-scrollbar="false">
          <view v-for="(img, index) in pics" :key="index">
            <image class="wfull" :src="img" mode="widthFix" lazy-load></image>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view scroll-y class="wfull h-100%" :show-scrollbar="false">
          <view v-for="(img, index) in pics" :key="index">
            <image class="wfull" :src="img" mode="widthFix" lazy-load></image>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view scroll-y class="wfull h-100%" :show-scrollbar="false">
          <view v-for="(img, index) in pics" :key="index">
            <image class="wfull" :src="img" mode="widthFix" lazy-load></image>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view scroll-y class="wfull h-100%" :show-scrollbar="false">
          <view v-for="(img, index) in pics" :key="index">
            <image class="wfull" :src="img" mode="widthFix" lazy-load></image>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item>
        <scroll-view scroll-y class="wfull h-100%" :show-scrollbar="false">
          <view v-for="(img, index) in pics" :key="index">
            <image class="wfull" :src="img" mode="widthFix" lazy-load></image>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>

    <floatPanel>
      <view class="p-4">
        <view class="text-5 mb-2">Elbow Patch Blazer</view>
        <view class="text-28rpx color-#777">
          Nearly 2,000 years ago, as the Romans began to pull out of Scotland, they left behind a
          curious treasure: 10 tons of nails, nearly a million of the things. The nail hoard was
          discovered in 1960 in a four-metre-deep pit covered by two metres of gravel. Why had the
          Romans buried a million nails?
        </view>

        <view class="text-4 mb-2 mt-6">item size</view>

        <view class="flex item-center gap-2">
          <view class="w-10 h-7 text-4 font-600 bg-#fff text-center lh-7 rounded">S</view>
          <view class="w-10 h-7 text-4 font-600 bg-#fff text-center lh-7 rounded">M</view>
          <view class="w-10 h-7 text-4 font-600 bg-#fff text-center lh-7 rounded">L</view>
        </view>

        <view class="text-4 mb-2 mt-6">item color</view>

        <view class="flex item-center gap-2">
          <view class="w-10 h-7 text-4 font-600 bg-#8c7059 text-center lh-7 rounded"></view>
          <view class="w-10 h-7 text-4 font-600 bg-#507462 text-center lh-7 rounded"></view>
          <view class="w-10 h-7 text-4 font-600 bg-#b3574a text-center lh-7 rounded"></view>
          <view class="w-10 h-7 text-4 font-600 bg-#d4afaa text-center lh-7 rounded"></view>
        </view>

        <view class="text-4 mb-2 mt-6">item brand</view>

        <view class="flex item-center gap-2">
          <view
            class="w-12 h-12 rounded-50% overflow-hidden"
            v-for="(brand, index) in brands"
            :key="index"
          >
            <image :src="brand" mode="aspectFill"></image>
          </view>
        </view>
      </view>
    </floatPanel>
  </view>
</template>

<script lang="ts" setup>
import backHeader from '@/components/backHeader.vue'
import clothSvg from '@/static/images/clothing.svg'
import cloth2Svg from '@/static/images/clothing2.svg'
import cloth3Svg from '@/static/images/clothing3.svg'
import cloth4Svg from '@/static/images/clothing4.svg'
import brandJpg1 from '@/static/images/brand/brand1.jpg'
import brandJpg2 from '@/static/images/brand/brand2.jpg'
import brandJpg3 from '@/static/images/brand/brand3.jpg'
import brandJpg4 from '@/static/images/brand/brand4.jpg'
import floatPanel from '@/components/floatPanel.vue'

defineOptions({
  name: 'Detail',
})

const pics = ref([clothSvg, cloth2Svg, cloth3Svg, cloth4Svg])

const brands = ref([brandJpg1, brandJpg2, brandJpg3, brandJpg4])

const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
image {
  will-change: transform;
}
</style>
