<template>
  <el-container>
    <el-aside> <Menu /> </el-aside>
    <el-container>
      <el-header class="el-header"><Header /></el-header>
      <el-main class="el-main"><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './components/Header/index.vue'
import Menu from './components/Menu/index.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  height: 94px;
  padding: 0;
  color: #333;
  background-color: #fff;
  cursor: pointer;
}

.el-aside {
  width: auto;
  color: #333;
  background-color: #191a23;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
