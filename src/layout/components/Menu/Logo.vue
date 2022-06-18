<template>
  <div class="rowCC logo">
    <el-avatar :size="50" :fit="fit" :src="logo" />
    <span v-if="!store.layout.isCollapse">WowApp</span>
  </div>
</template>
<script setup>
import { useStore } from '@/store'
const store = useStore()
import logo from '@/assets/logo.png'
</script>
<style lang="scss" scoped>
.logo {
  height: $navBarHeight;
  border-bottom: 1px solid #101117;
  background: #191a23;
  color: white;
  font-size: 22px;
}
.el-avatar {
  background: none;
}
</style>
