<template>
  <div class="tag-list">
    <VueDraggableNext animation="300" :list="store.layout.navList">
      <transition-group>
        <el-tag
          v-for="element of store.layout.navList"
          :key="element.path"
          size="large"
          :effect="element.path === current ? 'dark' : null"
          :class="`tag-item ${element.path === current ? 'avtive-router' : ''}`"
          :closable="element.path !== '/home'"
          :hit="false"
          @click="routerPush(element.path)"
          @close="closeNav(element.path)"
        >
          {{ element.title }}
        </el-tag>
      </transition-group>
    </VueDraggableNext>
  </div>
</template>

<script lang="ts" setup>
import { VueDraggableNext } from 'vue-draggable-next'
import { useStore } from '@/store'
import router from '@/router/'
const store = useStore()
const current = computed(() => router.currentRoute.value.path)

const closeNav = (path: string) => {
  const currentPath = router.currentRoute.value.fullPath
  store.layout.menuList.forEach((item, index) => {
    if (path === item.path) {
      if (currentPath === item.path) {
        const isLast = index === store.layout.navList.length - 1
        isLast ? router.push(store.layout.navList[index - 1].path) : router.push(store.layout.navList[index + 1].path)
      }
      store.layout.closeNav(index)
    }
  })
}

const routerPush = (path: string) => {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.avtive-router:deep(.el-icon) {
  background-color: #2d8cf0 !important;
  color: #fff !important;
  border-radius: 0;
}
:deep(.el-tag__close) {
  background-color: #2d8cf0;
  color: #fff;
  border-radius: 0;
}
.avtive-router {
  background-color: #2d8cf0 !important;
  color: #fff !important;
  border: 1px solid #2d8cf0 !important;
}
:deep(.el-switch.is-checked .el-switch__core) {
  background-color: #000000;
  border: 1px solid #4c4d4f;
}
.tag-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 35px;
  padding: 0 15px;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.3s ease;
  box-sizing: border-box;
  .tag-item {
    margin-right: 10px;
    transition: none;
    font-size: 12px;
    height: 28px;
    cursor: pointer;
    user-select: none;
    border: 1px solid #d9d9d9;
    color: black;
    background-color: white;
    border-radius: 3px;
    :deep(.el-tag .el-tag__close) {
      color: #000000;
    }
  }
  .tag-item:deep(.el-tag__close) {
    color: #000000;
  }
  .tag-item:deep(.el-icon:hover) {
    background-color: #fff;
  }
  .tag-item:deep(.el-icon) {
    background-color: #fff;
  }
}
</style>
