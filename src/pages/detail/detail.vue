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
  <picTextPanel />
</template>

<script lang="ts" setup>
import backHeader from '@/components/backHeader.vue'
import picTextPanel from '@/components/picTextPanel.vue'

defineOptions({
  name: 'Detail',
})
</script>

<style lang="scss" scoped>
//
</style>
