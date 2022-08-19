<template>
  <div class="box">
    <el-table v-loading="loading" :data="state.pageInfo.recordList" style="width: 100%">
      <el-table-column prop="merchName" label="Book Name" width="180" />
      <el-table-column prop="author" label="Author" width="300" />
      <el-table-column prop="merchTypeName" label="Type Name" />
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button link type="primary" size="small" @click.prevent="editRow(scope.row)"> editRow </el-button>
          <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.row)"> Remove </el-button>
        </template>
      </el-table-column>
    </el-table>
    <card-paging
      :total-count="state.pageInfo.totalCount"
      :page-size="state.pageInfo.numPerPage"
      :current-page="state.pageInfo.currentPage"
      @on-size-change="handleSizeChange"
      @on-current-change="handleCurrentChange"
    />
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
      <edit-book :book="state.curBook" @on-update-book-info="onUpdateBookInfo" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import type { IBook } from '@/interface/book'
import type { IPageInfo } from '@/interface/global'
import flux from '@/core'
import EditBook from './components/edit-book.vue'
import CardPaging from '@/components/CardPaging/CardPaging.vue'
const { api } = flux

let dialogVisible = ref(false)
let loading = ref(true)

const pageInfo: IPageInfo = {
  recordList: [],
  totalCount: 10,
  pageCount: 1,
  // 每页页数
  numPerPage: 10,
  // 当前页数
  currentPage: 1
}

// 包装成一个对象
const state = reactive({
  pageInfo,
  curBook: {}
})

let currentPageRef = toRef(state.pageInfo, 'currentPage')

onMounted(() => {
  getBookList()
})

function getBookList() {
  loading.value = false
  api.book
    .getBookList({
      currentPage: state.pageInfo.currentPage,
      numPerPage: state.pageInfo.numPerPage
    })
    .then((res: IPageInfo) => {
      state.pageInfo = res
    })
    .finally(() => {
      loading.value = false
    })
}

function editRow(item: IBook) {
  state.curBook = JSON.parse(JSON.stringify(item))
  dialogVisible.value = true
}

function deleteRow(item: IBook) {
  // state.list.splice(index, 1)
  state.pageInfo.recordList = state.pageInfo.recordList.filter((it: IBook) => it.id !== item.id)
}

function onUpdateBookInfo(book: IBook) {
  state.pageInfo.recordList = state.pageInfo.recordList.map((it: IBook) => {
    it.id === book.id && (it = book)
    return it
  })

  dialogVisible.value = false
}

function handleSizeChange(val: number) {
  // console.log(`${val} items per page`)
  state.pageInfo.numPerPage = val
  getBookList()
}
function handleCurrentChange(val: number) {
  // console.log(`current page: ${val}`)
  state.pageInfo.currentPage = val
  getBookList()
}
</script>

<style scoped></style>
