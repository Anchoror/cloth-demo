<template>
  <view class="w-100% relative z-10" ref="viewRef" :style="{ height: viewHeight }">
    <template v-for="(item, index) in props.list" :key="item.id">
      <view class="transition-all-400" :style="styleArr[index]">
        <wd-transition :show="props.filterList.includes(item)" name="zoom-in">
          <slot :data="item"></slot>
        </wd-transition>
      </view>
    </template>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps<{
  col: number
  list: any[]
  gap: number
  filterList: any[]
}>()

watch(
  () => props.col,
  () => {
    getStyleArr()
  },
)

watch(
  () => props.filterList,
  () => {
    setTimeout(() => {
      getStyleArr()
    }, 500)
  },
)

const viewRef = ref(null)
const itemHeight = ref(652)
const viewHeight = computed(() => {
  return Math.ceil(props.list.length / props.col) * itemHeight.value + 'rpx'
})

const styleArr = ref([])

const width = computed(() => {
  if (props.col === 1) {
    return `100%`
  }
  return `calc(${100 / props.col}% - ${props.gap / props.col}rpx)`
})

const getLeft = (index: number) => {
  if (props.col === 1) {
    return 0
  }
  return `${(index % 2) * 342 + (index % props.col) * (props.gap / props.col)}rpx`
}
const getTop = (index: number) => {
  if (props.col === 1) {
    return 0
  }

  return `-${(Math.floor(index / 2) + Math.floor(index % 2)) * itemHeight.value}rpx`
}

const getTransition = (beforeIndex) => {
  return `translate(${getLeft(beforeIndex)},${getTop(beforeIndex)})`
}
const getStyle = (index) => {
  const translate = getTransition(index)

  return {
    width: width.value,
    // zIndex: `${10000 - index}`,
    height: itemHeight.value + 'rpx',
    // position: 'reactive',
    // left: getLeft(index),
    // top: parseInt(index / props.col) * itemHeight.value + 'rpx',
    // position: 'absolute',
    transform: translate,
  }
}

const getStyleArr = () => {
  for (let i = 0; i < props.list.length; i++) {
    const tansformIndex = props.filterList.findIndex((item) => item.id === props.list[i].id)

    styleArr.value[i] = getStyle(tansformIndex < 0 ? i : tansformIndex)
  }
}

defineExpose({
  updateStyle: getStyleArr,
})
</script>

<style lang="scss" scoped>
//
</style>
