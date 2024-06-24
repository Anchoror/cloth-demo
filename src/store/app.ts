import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
  'app',
  () => {
    const menuRect = ref(uni.getMenuButtonBoundingClientRect())
    const windowInfo = ref(uni.getWindowInfo())
    const padbottom = ref(10)
    return {
      menuRect,
      windowInfo,
      padbottom,
    }
  },
  {
    persist: true,
  },
)
