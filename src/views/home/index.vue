<template>
  <div class="common-layout">hello</div>
</template>

<script setup lang="ts">
import flux from '@/core'
onMounted(() => {
  flux.api.user.apiTest().then((res: any) => {
    console.log('api test: ', res)
  })
})
</script>

<style scoped></style>
