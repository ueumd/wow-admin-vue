<template>
  <div class="rowCC collapse" @click="handleCollapse">
    <el-icon>
      <Fold v-if="!store.layout.isCollapse" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
const store = useStore()
const handleCollapse = () => {
  store.layout.updateIsCollapse(!store.layout.isCollapse)
}
</script>

<style lang="scss" scoped>
.collapse {
  padding: 0 10px;
  height: $navBarHeight;
}
.collapse:hover {
  background-color: #f6f6f6;
}
</style>
