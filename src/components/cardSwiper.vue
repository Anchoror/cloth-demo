<template>
  <view class="card-swiper wfull">
    <movable-area id="areaRef" class="pic-view relative h-48" :style="{ width: `${areaWidth}%` }">
      <template v-for="(src, index) in data" :key="index">
        <movable-view
          class="w-71% h-100%"
          :style="{ zIndex: cardStatus[index].zIndex }"
          :out-of-bounds="true"
          direction="horizontal"
          :friction="10"
          :x="cardStatus[index].x"
          :y="cardStatus[index].y"
          @change="onchange($event, index)"
          @touchstart="ontouchstart"
          @touchend="ontouchend(index)"
        >
          <view
            class="pic-block"
            :style="{
              transform: `rotateZ(${cardStatus[index].deg}deg) scale(${cardStatus[index].scale})`,
              transformOrigin: `(0, ${originY}rpx)`,
            }"
          >
            <image :src="src" class="pic" :style="getPicStyle(index)"></image>
          </view>
        </movable-view>
      </template>
    </movable-area>
  </view>
</template>

<script lang="ts" setup>
import clothSvg from '@/static/images/clothing.svg'
import cloth2Svg from '@/static/images/clothing2.svg'
import cloth3Svg from '@/static/images/clothing3.svg'
import cloth4Svg from '@/static/images/clothing4.svg'

const emit = defineEmits(['change'])

const data = ref([clothSvg, cloth2Svg, cloth3Svg, cloth4Svg])

const getPicStyle = (index: number) => {
  return {
    transform: `rotateZ(${Math.pow(-1, index) * index * 2}deg)`,
    zIndex: 100 - index,
  }
}

const cardStatus = ref(
  data.value.map((item, index) => ({
    x: 0,
    y: 0,
    deg: 0,
    zIndex: 100 - index,
    outbound: false,
    scale: 1,
  })),
)
const originY = ref(500)

function debounce(func, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-expect-error this and arguments are available in the callback
      func.apply(this, arguments)
    }, delay)
  }
}

const backInitPos: (i: number) => void = debounce((index: number) => {
  cardStatus.value[index].x = cardStatus.value[index].x ? 0 : 1
  if (!cardStatus.value[index].outbound) return
  cardStatus.value[index].zIndex = cardStatus.value[index].zIndex - cardStatus.value.length
  setTimeout(() => {
    cardStatus.value[index].outbound = false
  }, 100)
}, 100)

const nextCard = (index: number) => {
  cardStatus.value[index].outbound = true
  emit('change', (index + 1) % data.value.length)
}

// 监听滑动
const onchange = ({ detail }, index) => {
  const { x, y, source } = detail
  cardStatus.value[index].scale = 1 - x / 2000
  cardStatus.value[index].deg = 90 - (Math.atan2(originY.value, x) * 180) / Math.PI
  if (x > 0 && source === 'touch-out-of-bounds') {
    nextCard(index)
  }
}
const ontouchend = (index: number) => {
  backInitPos(index)
}

// 为了规避初始时宽度计算错误导致的滑动bug
const areaWidth = ref(139)
const ontouchstart = () => {
  if (areaWidth.value !== 140) {
    areaWidth.value = 140
  }
}
</script>

<style lang="scss" scoped>
.pic-block {
  width: 100%;
  height: 100%;
}
.pic {
  width: 90%;
  height: 90%;
  margin: 4% 5%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0px #aaa;
}
</style>
