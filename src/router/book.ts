import { RouteRecordRaw, RouterView } from 'vue-router'

const bookRoutes: RouteRecordRaw = {
  path: 'book',
  component: RouterView,
  meta: {
    title: '书籍管理'
  },
  redirect: '/book/list',
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('@/view/book/list/index.vue'),
      meta: {
        title: '书籍列表'
      }
    },
    {
      path: 'test',
      name: 'test',
      component: () => import('@/view/book/test/index.vue'),
      meta: {
        title: '测试'
      }
    }
  ]
}

export default bookRoutes
