import { RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'
import bookRoutes from './book'

const Routers: RouteRecordRaw[] = [
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   component: () => import('@/components/NotFound/NotFound.vue')
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/view/home/index.vue')
      },
      bookRoutes
    ]
  }
]

export default Routers
