<template>
  <el-sub-menu v-if="item.children && item.children.length >= 1" :index="index + Date.now()">
    <template #title>
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span v-show="!collapse"> {{ item.meta.title }}</span>
    </template>
    <div v-for="(c, i) of item.children" :key="i">
      <menu-item :index="(i + 1).toString()" :item="c"></menu-item>
    </div>
  </el-sub-menu>

  <el-menu-item v-else-if="item.children && item.children.length === 1" :index="item.children[0].path">
    <el-icon>
      <component :is="item.children[0].meta.icon"></component>
    </el-icon>
    <template #title> {{ item.children[0].title }}</template>
  </el-menu-item>

  <el-menu-item v-else-if="item && item.pid !== 0" :index="item.path">
    <el-icon>
      <component :is="item.meta.icon"></component>
    </el-icon>
    <template #title>{{ item.meta.title }}</template>
  </el-menu-item>
</template>

<script lang="ts">
export default defineComponent({
  name: 'MenuItem',
  props: {
    index: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    collapse: {
      type: Boolean
    }
  }
})
</script>

<style lang="scss" scoped>
// 一级导航
.el-menu-item {
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    color: white;
    background: #191a23;
  }
}

.el-menu {
  background: transparent;
  border-right: none;
  ::v-deep(.el-menu) {
    background: transparent;
  }
}
// 二级
.el-sub-menu {
  ::v-deep(.el-menu-item) {
    background: #101117;
    &:hover {
      color: white;
    }

    ::v-deep(.el-sub-menu__title) {
      color: rgba(255, 255, 255, 0.7);
      &:hover {
        color: white;
        background: #191a23;
      }
    }
  }
  ::v-deep(.el-sub-menu__title) {
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: white;
      background: #191a23;
    }
  }
}

.el-menu-item.is-active {
  color: white;
  background: #2d8cf0 !important;
}
</style>
