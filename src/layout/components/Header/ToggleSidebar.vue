<template>
  <el-icon @click="handleCollapse">
    <Fold v-if="!store.layout.isCollapse" />
    <Expand v-else />
  </el-icon>
</template>

<script lang="ts" setup>
import useStore from '@/store'
const store = useStore()
const handleCollapse = () => {
  console.log(111, store.layout.isCollapse)
  store.layout.updateIsCollapse(!store.layout.isCollapse)
}
</script>

<style lang="scss" scoped></style>
