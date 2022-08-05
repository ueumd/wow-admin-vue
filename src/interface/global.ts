import { Book } from '@/interface/book'

export interface IPageInfo {
  recordList: Book[]
  totalCount: number
  // 判断时候显示分页
  pageCount: number
  // 每页页数
  numPerPage: number
  // 当前页数
  currentPage: number
}
