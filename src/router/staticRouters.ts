import { RouteRecordRaw, RouterView } from 'vue-router'
import { ITreeMenuItem } from '@/api/types/menu'
/**
 * 方便开发时静态路由处理
 */
export const staticRoutes = [
  {
    path: 'book',
    component: RouterView,
    meta: {
      icon: 'Notebook',
      title: '书籍管理'
    },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/book/list/list.vue'),
        meta: {
          icon: 'List',
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
      icon: 'Setting',
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

/**
 * @description 转化动态路由
 * @param userRouters -用户路由的树形列表
 */
export const generateRouterList = (userRouters: any[]) => {
  const newRouters = userRouters.map((router) => {
    let routes: any = {}
    routes = {
      path: router.path,
      name: router.name,
      title: router.meta.title,
      icon: router.meta.icon,
      children: []
    }
    if (routes && router.children) {
      routes.children = generateRouterList(router.children)
    }
    return routes
  })
  return newRouters
}
