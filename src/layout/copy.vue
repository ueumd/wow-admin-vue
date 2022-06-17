<template>
  <div class="common-layout">
    <el-scrollbar height="100vh">
      <el-container>
        <el-aside style="--el-aside-width: '200px'">

        </el-aside>
        <el-container>
          <el-header class="el-header"><Header /></el-header>
          <el-main class="el-main"><Content /></el-main>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped></style>
