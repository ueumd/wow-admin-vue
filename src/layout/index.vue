<!-- src\layout\AppLayout.vue -->
<template>
  <el-container>
    <el-aside width="200px"> Aside left</el-aside>
    <el-container>
      <el-header>Header top</el-header>
      <el-main class="el-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
}
.el-aside {
  width: auto;
  background-color: #304156;
}
.el-main {
  background-color: #e9eef3;
}
</style>
