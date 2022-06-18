<template>
  <Logo />
  <el-menu
    default-active="2"
    :collapse="store.layout.isCollapse"
    class="el-menu-vertical"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/book">
      <template #title>
        <el-icon><Notebook /></el-icon>
        <span>书籍管理</span>
      </template>
      <el-menu-item index="/book/list">书籍列表</el-menu-item>
      <el-menu-item index="/book/test">测试</el-menu-item>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue'
import { useStore } from '@/store'
const store = useStore()
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  border-right: none;
  background: #191a23;
  &:not(.el-menu--collapse) {
    width: 200px;
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

.el-menu {
  background: transparent;
  ::v-deep(.el-menu) {
    background: transparent;
  }
}
// 二级
.el-sub-menu {
  ::v-deep(.el-menu-item) {
    background: #101117;
    &:hover {
      color: white;
    }

    ::v-deep(.el-sub-menu__title) {
      color: rgba(255, 255, 255, 0.7);
      &:hover {
        color: white;
        background: #191a23;
      }
    }
  }
  ::v-deep(.el-sub-menu__title) {
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: white;
      background: #191a23;
    }
  }
}

.el-menu-item.is-active {
  color: white;
  background: #2d8cf0;
}
</style>
