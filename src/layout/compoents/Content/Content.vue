<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
