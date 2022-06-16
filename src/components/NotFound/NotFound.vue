<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="src/assets/404_images/404.png" alt="404" />
        <img class="pic-404__child left" src="src/assets/404_images/404_cloud.png" alt="404" />
        <img class="pic-404__child mid" src="src/assets/404_images/404_cloud.png" alt="404" />
        <img class="pic-404__child right" src="src/assets/404_images/404_cloud.png" alt="404" />
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">你所访问的页面不存在！</div>
        <div class="bullshit__info">无法进入此页面，请检查您输入的网址是否正确。</div>
        <a @click="routeBack" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const routeBack = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
