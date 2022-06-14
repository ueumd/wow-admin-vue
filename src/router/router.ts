import { RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

const Routers: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/'
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* chunkName: 404 */ '../components/NotFound/NotFound.vue')
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: []
  }
]
