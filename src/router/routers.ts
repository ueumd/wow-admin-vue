import { RouteRecordRaw, RouterView } from 'vue-router'
import Layout from '../layout/index.vue'

const Routers: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/components/NotFound/NotFound.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* chunkName: Index */ '../components/ParentView/ParentView.vue'),
        children: [
          {
            path: 'home',
            name: 'Home',
            component: () => import(/* chunkName: Home */ '../views/home/index.vue')
          }
        ]
      }
    ]
  }
]

export default Routers

// 动态路由处理
export const generatorRouters = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: () => import(/* chunkName: Index */ '../components/ParentView/ParentView.vue'),
    children: [
      {
        meta: {
          title: '首页'
        },
        path: 'home',
        name: 'Home',
        component: () => import(/* chunkName: Home */ '../views/home/index.vue')
      }
    ]
  }
]
