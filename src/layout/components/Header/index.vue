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
  <NavListTag />
</template>
<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
import Notification from './Notification.vue'
import Userinfo from './Userinfo.vue'
import NavListTag from './NavListTag.vue'
</script>
<style lang="scss" scoped>
.plr20 {
  padding: 0 20px;
}
.rowBC {
  padding-left: 10px;
  padding-right: 20px;
  height: $navBarHeight;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
