import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
  'app',
  () => {
    const menuRect = ref(uni.getMenuButtonBoundingClientRect())
    const padbottom = ref(10)
    return {
      menuRect,
      padbottom,
    }
  },
  {
    persist: true,
  },
)
