import { post, get } from '@/service/http'

export const getBookList = () => {
  return get({
    url: '/web/api/book/getBookList'
  })
}
