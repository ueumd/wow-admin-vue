<!-- src\layout\AppLayout.vue -->
<!--<template>-->
<!--  <el-container>-->
<!--    <el-aside width="200px"> left </el-aside>-->
<!--    <el-container>-->
<!--      <el-header><Header /></el-header>-->
<!--      <el-main class="el-main">-->
<!--        <router-view />-->
<!--      </el-main>-->
<!--    </el-container>-->
<!--  </el-container>-->
<!--</template>-->
<template>
  <el-container>
    <el-aside> <AppMenu /> </el-aside>
    <el-container>
      <el-header class="el-header"><Header /></el-header>
      <el-main class="el-main"><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './components/Header/Header.vue'
import AppMenu from './components/AppMenu/index.vue'
import useStore from '@/store/index'
const store = useStore().user
console.log(store.collapse)
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #fff;
  color: #333;
}

.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
