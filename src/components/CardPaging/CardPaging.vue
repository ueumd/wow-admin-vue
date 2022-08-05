<template>
  <el-pagination
    class="footer-pagination"
    :class="props.isRelative ? 'paginationStyle' : ''"
    v-model:current-Page="props.currentPage"
    v-model:page-size="props.numPerPage"
    :page-sizes="[10, 20, 30, 40]"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="props.totalCount"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  totalCount: {
    type: Number,
    default: 10
  },
  numPerPage: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 0
  },
  isRelative: {
    type: Boolean,
    default() {
      return false
    }
  }
})
const small = ref(false)
const background = ref(false)
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
