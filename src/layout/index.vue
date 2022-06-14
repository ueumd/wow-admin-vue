<template>
  <div class="common-layout">
    <el-scrollbar height="100vh">
      <el-container>
        <el-aside :style="`--el-aside-width: ${!store.collapse ? '200px' : '55px'}`">fff</el-aside>
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
