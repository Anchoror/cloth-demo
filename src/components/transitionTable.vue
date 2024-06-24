<template>
  <view
    class="w-100% relative z-10 overflow-hidden transition-all-400"
    ref="viewRef"
    :style="{ height: viewHeight }"
  >
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
    }, 200)
  },
)

const viewRef = ref(null)
const itemHeight = ref(670)
const viewHeight = computed(() => {
  console.log(props.filterList.length)
  return Math.ceil(props.filterList.length / props.col) * itemHeight.value + 'rpx'
})

const styleArr = ref([])

const width = computed(() => {
  if (props.col === 1) {
    return `100%`
  }
  return `calc(${100 / props.col}% - ${props.gap / props.col}rpx)`
})

const getLeft = (index: number, index2: number) => {
  if (props.col === 1) {
    return 0
  }
  return `${(index2 % 2) * 342 + (index2 % props.col) * (props.gap / props.col)}rpx`
}
const getTop = (index: number, index2: number) => {
  if (props.col === 1) {
    return `-${(index - index2) * itemHeight.value}rpx`
  }

  // 由于过滤隐藏导致的高度空缺
  const applyH =
    index2 % 2 === 1
      ? Math.ceil((index - index2) / props.col)
      : Math.floor((index - index2) / props.col)

  return `-${(Math.floor(index / props.col) + Math.floor(index % props.col) + applyH) * itemHeight.value}rpx`
}

const getTransition = (beforeIndex, afterIndex) => {
  return `translate(${getLeft(beforeIndex, afterIndex)},${getTop(beforeIndex, afterIndex)})`
}
const getStyle = (index, afterIndex) => {
  if (afterIndex === -1) {
    return styleArr.value[index]
  }
  const translate = getTransition(index, afterIndex)

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

    styleArr.value[i] = getStyle(i, tansformIndex)
  }
}

defineExpose({
  updateStyle: getStyleArr,
})
</script>

<style lang="scss" scoped>
//
</style>
