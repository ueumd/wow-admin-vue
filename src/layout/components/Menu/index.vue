<template>
  <div class="rowCC logo">Wow App</div>
  <el-menu default-active="2" class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose">
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
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import useStore from '@/store/index'
const store = useStore().user
</script>

<style lang="scss" scoped>
.logo {
  height: $navBarHeight;
  border-bottom: 1px solid #101117;
  background: #191a23;
  color: white;
  font-size: 22px;
}
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
