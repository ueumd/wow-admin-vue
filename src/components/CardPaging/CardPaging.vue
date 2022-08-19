<template>
  <div class="footer-pagination">
    <el-pagination
      :class="props.isRelative ? 'paginationStyle' : ''"
      :current-page="props.currentPage"
      :page-size="props.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.totalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  background: {
    type: Boolean,
    default: true
  },
  totalCount: {
    type: Number,
    default: 10
  },
  pageSize: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  },
  isRelative: {
    type: Boolean,
    default() {
      return false
    }
  }
})
const small = ref(false)
const disabled = ref(false)

const emit = defineEmits(['onSizeChange', 'onCurrentChange'])

function handleSizeChange(val: number) {
  // console.log(`${val} items per page`)
  emit('onSizeChange', val)
}
function handleCurrentChange(val: number) {
  // console.log(`current page: ${val}`)
  emit('onCurrentChange', val)
}
</script>

<style scoped></style>
