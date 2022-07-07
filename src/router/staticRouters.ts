import { RouterView } from 'vue-router'

/**
 * 方便开发时静态路由处理
 */
export const staticRoutes = [
  {
    path: 'book',
    component: RouterView,
    meta: {
      title: '书籍管理'
    },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/book/list/list.vue'),
        meta: {
          title: '书籍列表'
        }
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/book/test/test.vue'),
        meta: {
          title: '测试'
        }
      }
    ]
  },
  {
    path: '/system',
    component: RouterView,
    name: 'system',
    meta: {
      icon: 'Notebook',
      title: '权限管理'
    },
    children: [
      {
        path: '/admin/index',
        name: 'system-admin-index',
        component: () => import('@/views/system/admin/index.vue'),
        meta: {
          icon: 'Notebook',
          title: '管理员'
        }
      }
    ]
  }
]

/**
 * 数组对象转换为Map对象
 * @param arr
 * @param key
 */
function arrToMap(arr: any[], key: string) {
  return arr.reduce((obj, item) => ((obj[item[key]] = item), obj), {})
}
