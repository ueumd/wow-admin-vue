<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :src="avatar" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout"> 退出登录 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import flux from '@/core/index'
import avatar from '@/assets/avatar.png'
const router = useRouter()

const handleLogout = () => {
  // 退出提示
  ElMessageBox.confirm('确认退出吗？', '退出提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      // 确认发出退出请求
      // 清除用户登录信息
      flux.api.user.logout().then(() => {
        ElMessage({ type: 'success', message: '退出成功!' })
        // 跳转到登录页
        router.push({
          path: '/login'
        })
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消退出'
      })
    })
}
</script>

<style></style>
