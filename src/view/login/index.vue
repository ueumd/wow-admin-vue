<template>
  <div class="login-container">
    <el-form class="login-form" :rules="rules" ref="form" :model="user" size="medium" @submit.prevent="handleSubmit">
      <div class="login-form__header">Wow App login</div>
      <el-form-item prop="account">
        <el-input v-model="user.account" size="large" placeholder="请输入用户名" prefix-icon="UserFilled" />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="user.pwd" type="password" size="large" placeholder="请输入密码" prefix-icon="Key" />
      </el-form-item>
      <el-form-item>
        <el-button class="submit-button" type="primary" size="large" :loading="loading" native-type="submit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
const user = reactive({
  account: 'admin',
  pwd: '123456'
})
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
  background-image: url('https://img.zcool.cn/community/01mopmrflkgjjxpheykgxt3139.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_3000,limit_1/sharpen,100');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.login-form {
  min-width: 350px;
  padding: 30px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.9);
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
