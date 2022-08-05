<template>
  <div>
    <el-card class="card" shadow="hover">
      <div class="card-body">
        <div v-for="(item, index) in state.list" :key="index" class="item" @click="handleToDetail(item.url)">
          <div class="lf">
            <div v-if="item.title" class="title">
              {{ item.title }}
            </div>
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import flux from '@/core'
export default {
  name: 'Resources',
  setup() {
    const state = reactive({
      list: []
    })

    const handleToDetail = (url) => {
      window.open(url)
    }

    onMounted(() => {
      flux.api.user.resource().then((res: any) => {
        state.list = res
      })
    })
    return {
      state,
      handleToDetail
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 15px;
  &-body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    &.mobile {
      grid-template-columns: repeat(1, 1fr);
    }
    .item {
      box-sizing: border-box;
      padding: 10px 20px;
      margin-top: -1px;
      margin-left: -1px;
      overflow: hidden;
      cursor: pointer;
      border: 1px solid #eee;
      transition: box-shadow 0.5;
      .lf {
        display: flex;
        align-items: center;
        max-width: 140px;
        .img {
          width: auto;
          max-width: 120px;
          height: auto;
          max-height: 40px;
        }
      }
      &:hover {
        box-shadow: $base-box-shadow;
      }
      .title {
        padding-left: 5px;
        font-size: 18px;
        font-weight: bold;
      }
      .desc {
        padding: 5px 0;
        font-size: 13px;
        line-height: 1.5;
        color: $base-font-color;
      }
    }
  }
}
</style>
