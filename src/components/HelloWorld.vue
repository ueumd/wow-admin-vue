<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()
const count = ref(0)
const testMessage = () => {
  ElMessage.success('1211')
}
</script>

<template>
  <h1 class="red">{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <div class="bg-light-900 flex justify-center">
    <el-button type="primary" @click="testMessage">Primary</el-button>
  </div>
</template>

<style lang="scss" scoped>
// @import '@/styles/variables.scss';
.red {
  color: $menuText;
}
</style>
