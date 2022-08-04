<template>
  <div class="rowCC logo">
    <el-avatar :size="30" shape="square" fit :src="logo" />
    <span v-if="!store.layout.isCollapse">WowAdmin</span>
  </div>
</template>
<script lang="ts" setup>
import logo from '@/assets/buildadmin.png'
import { useStore } from '@/store'
const store = useStore()
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
  margin-right: 10px;
}
</style>
