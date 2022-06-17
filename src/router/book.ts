import { RouteRecordRaw, RouterView } from 'vue-router'

const bookRoutes: RouteRecordRaw = {
  path: '',
  component: RouterView,
  meta: {
    title: '书籍管理'
  },
  children: [
    {
      path: 'book/list',
      name: 'book_list',
      component: () => import('@/views/book/list/index.vue'),
      meta: {
        // 自定义路由元数据
        title: '书籍列表'
      }
    },
    {
      path: 'book/test',
      name: 'book_test',
      component: () => import('@/views/book/test/index.vue'),
      meta: {
        title: '测试'
      }
    }
  ]
}
