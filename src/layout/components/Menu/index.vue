<template>
  <Logo />
  <el-menu
    :default-active="current"
    :collapse="store.layout.isCollapse"
    class="el-menu-vertical"
    background-color="#191a23"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/home">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <template v-for="(item, index) of store.layout.userRouters" :key="index">
      <MenuItem :index="(index + 1).toString()" :collapse="store.layout.isCollapse" :item="item" />
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import MenuItem from './MenuItem.vue'
import Logo from './Logo.vue'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()
const current = computed(() => router.currentRoute.value.path)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  border-right: none;
  background: #191a23;
  &:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
  }
}
// 一级导航
.el-menu-item {
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    color: white;
    background: #191a23;
  }
}
.el-menu-item.is-active {
  color: white;
  background: #2d8cf0 !important;
}
</style>
