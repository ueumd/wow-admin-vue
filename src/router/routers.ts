import { RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

const Routers: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/components/NotFound/NotFound.vue')
  },
  {
    path: '/login',
    name: 'login',
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
        component: () => import('@/view/home/index.vue')
      }
    ]
  }
]

export default Routers
