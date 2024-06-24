<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <searchHeader />
  <view
    class="sticky z-100 overflow-hidden transition-all"
    :style="{ top: menuRect.height + menuRect.top + padbottom + 'px', height: tabHeight + 'rpx' }"
  >
    <wd-row custom-class="flex items-center bg-white" :gutter="4">
      <wd-col :span="18">
        <wd-tabs v-model="tabValue" @change="onTabChange">
          <block v-for="(item, index) in tabs" :key="index">
            <wd-tab :title="item" :name="item"></wd-tab>
          </block>
        </wd-tabs>
      </wd-col>
      <wd-col :span="6">
        <wd-segmented
          :options="segments"
          v-model:value="segValue"
          size="middle"
          custom-class="z-1000"
        >
          <template #label="{ option }">
            <wd-icon :name="option.payload.icon"></wd-icon>
          </template>
        </wd-segmented>
      </wd-col>
    </wd-row>
  </view>

  <view class="list mt-4">
    <transitionTable
      :col="segValue"
      :list="list"
      :filter-list="fliterList"
      :gap="20"
      @on-card-model="onCardModel"
    >
      <template #default="{ data }">
        <msgCard :data="data" />
      </template>
    </transitionTable>
  </view>
</template>

<script lang="ts" setup>
import msgCard from '@/components/msgCard.vue'
import transitionTable from '@/components/transitionTable.vue'
import searchHeader from '@/components/searchHeader.vue'
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'Home',
})

const { menuRect, padbottom } = storeToRefs(useAppStore())

const tabValue = ref(0)
const segValue = ref(0)
const segments = ref([
  {
    value: 1,
    disabled: false,
    payload: {
      icon: 'minus-rectangle',
    },
  },
  {
    value: 2,
    disabled: false,
    payload: {
      icon: 'windows',
    },
  },
])

const tabs = ref(['全部', '新品', '推荐', '热门'])
const tabHeight = ref(84) // tab栏高度rpx

const list = ref(
  new Array(33).fill(0).map((item, index) => ({
    title: 'Elbow Patch Blazer',
    color: ['#8c7059', '#507462', '#b3574a', '#d4afaa'],
    model: ['S', 'M', 'L'],
    material: ['kapok'],
    desc: '圆领、长袖、当下热卖哦',
    type: tabs.value[(index % 3) + 1],
    id: index,
  })),
)
const fliterList = ref(list.value)

const onTabChange = ({ index, name }) => {
  if (index === 0) {
    fliterList.value = list.value
  } else {
    fliterList.value = list.value.filter((item) => item.type === name)
  }
}

const onCardModel = (status) => {
  // tabHeight.value = status ? 0 : 84
}

uni.hideTabBar()
</script>

<style lang="scss" scoped></style>
