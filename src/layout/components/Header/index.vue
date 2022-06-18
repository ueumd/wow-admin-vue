<template>
  <div class="rowBC">
    <div class="rowSC">
      <el-space size="large">
        <ToggleSidebar />
        <Breadcrumb />
      </el-space>
    </div>
    <div class="rowSC">
      <el-space size="large">
        <FullScreen />
        <Notification />
        <Userinfo />
      </el-space>
    </div>
  </div>
  <!--  <el-space size="large">-->
  <!--    <ToggleSidebar />-->
  <!--    <Breadcrumb />-->
  <!--  </el-space>-->
  <!--  <el-space size="large">-->
  <!--    <Notification />-->
  <!--    <FullScreen />-->
  <!--    <Userinfo />-->
  <!--  </el-space>-->
</template>

<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
import Notification from './Notification.vue'
import Userinfo from './Userinfo.vue'
</script>
<style lang="scss" scoped>
.rowBC {
  height: $navBarHeight;
}
</style>
