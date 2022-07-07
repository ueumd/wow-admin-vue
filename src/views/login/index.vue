<template>
  <div class="login-container">
    <el-form class="login-form" ref="ruleFormRef" :rules="rules" :model="user" size="large">
      <div class="login-form__header">Wow login</div>
      <el-form-item prop="username">
        <el-input v-model="user.username" size="large" placeholder="请输入用户名" prefix-icon="UserFilled" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="user.password" type="password" size="large" placeholder="请输入密码" prefix-icon="Key" />
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
import flux from '@/core/index'
import router from '@/router/'
import type { FormInstance, FormRules } from 'element-plus'

const { api, util } = flux

const loading = ref(false)
const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入账号', trigger: 'change' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { min: 6, max: 18, message: '密码最小6位，最大18位', trigger: 'blur' }
  ]
})

const user = reactive({
  username: 'admin',
  password: '123456'
})

const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      api.user
        .login(user)
        .then((res: any) => {
          ElMessage.success('登录成功')
          util.storage.set('token', res.token)
          util.storage.set('uid', res.uid)
          router.push({
            name: 'Home'
          })
        })
        .catch((err: any) => {
          console.error(err.message)
        })
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
