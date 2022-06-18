<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
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
import { useStore } from '@/store'
const store = useStore()
const router = useRouter()

const handleLogout = () => {
  console.log(111)
  // 退出提示
  ElMessageBox.confirm('确认退出吗？', '退出提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      console.log(2222222222)
      // 确认发出退出请求
      // 清除用户登录信息
      store.user.setUser(null)

      localStorage.removeItem('token')
      localStorage.removeItem('uid')

      ElMessage({
        type: 'success',
        message: '退出成功!'
      })

      // 跳转到登录页
      router.push({
        path: '/login'
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

<style lang="scss" scoped></style>
