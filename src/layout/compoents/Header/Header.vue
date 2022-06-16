<template>
  <header class="m-header" :style="`width: calc(100% - ${!store.collapse ? '200' : '60'}px)`">
    <div class="content">
      <span class="menu-collapse" @click="changeCollapse">
        <el-icon>
          <Fold v-if="!store.collapse" />
          <Expand v-else />
        </el-icon>
      </span>
      <span @click="scrollToX('left')" class="to-scroll-left">
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </span>
      <div class="tag-list" id="scroll-Box">nav list</div>
      <span @click="scrollToX('right')" class="to-scroll-right">
        <el-icon>
          <ArrowRight />
        </el-icon>
      </span>
      <el-dropdown trigger="click" @command="handleConfigNav">
        <span class="nav-config">
          <el-icon>
            <rrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :disabled="current === '/index/home'" command="close-current">关闭当前</el-dropdown-item>
            <el-dropdown-item :disabled="store.navList.length <= 2 && current !== '/index/home'" command="close-other"
              >关闭其他</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="Avatar">
        <el-dropdown @command="handleCommand">
          <el-avatar :size="30" :src="circleUrl" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import useStore from '../../../store/index'
const store = useStore().user
const handleCommand = () => {
  console.log(1)
}
</script>

<style scoped></style>
