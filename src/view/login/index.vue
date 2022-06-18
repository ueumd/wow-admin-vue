<template>
  <div class="login-container">
    <el-form class="login-form" ref="ruleFormRef" :rules="rules" :model="user" size="medium">
      <div class="login-form__header">Wow App login</div>
      <el-form-item prop="account">
        <el-input v-model="user.account" size="large" placeholder="请输入用户名" prefix-icon="UserFilled" />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="user.pwd" type="password" size="large" placeholder="请输入密码" prefix-icon="Key" />
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          size="large"
          :loading="loading"
          native-type="submit"
          @click="handleSubmit(ruleFormRef)"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'

import { useLocalStorage } from '@/hooks/useLocalStorage'

const { setLocalStorage } = useLocalStorage()

const router = useRouter()
const route = useRoute()

const loading = ref(false)
const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({
  account: [{ required: true, message: '请输入账号', trigger: 'change' }],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { min: 6, max: 18, message: '密码最小6位，最大18位', trigger: 'blur' }
  ]
})

const user = reactive({
  account: 'admin',
  pwd: '123456'
})

const handleSubmit = async (formEl: FormInstance | undefined) => {
  console.log(router, route)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage.success('登录成功')
      setLocalStorage(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODFkMzU1ZWJkNzA1OGE3ZTkzYzgyYyIsImlhdCI6MTY1NTQyODA5Nn0.u6c3gAbCkXdFYEkKwEcbd6NUzgm-C-QuM9iwVElJt74'
      )
      setLocalStorage('uid', '6281d355ebd7058a7e93c82c')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f38f69;
  //background-image: url('https://img.zcool.cn/community/0180pvfwtqn4f3ltzhlwlo3035.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_3000,limit_1/sharpen,100');
  background-image: url('@/assets/login_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.login-form {
  min-width: 350px;
  padding: 30px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 6px 5px 2px rgb(126, 54, 34, 0.4);

  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    font-size: 30px;
    font-weight: 500;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
}
</style>
