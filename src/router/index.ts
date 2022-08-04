import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import util from '@/utils/index'
import routes, { generatorRouters } from './routers'
import { useStore } from '@/store'
import { ITreeMenuItem } from '@/interface/menu'

const modules = import.meta.glob('../views/**/**.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// @todo 后期可以考虑白名单
enum LOGIN_STATE {
  IS_LOGIN = 'Login'
}

router.beforeEach(async (to, from, next) => {
  const store = useStore()
  const userRouters = store.layout.userRouters
  // 开始加载进度条
  nprogress.start()

  const token = util.storage.get('token') || false
  const uid = util.storage.get('uid') || ''

  if (!token && to.name === LOGIN_STATE.IS_LOGIN) {
    // 未登录 去的是登录页面
    next()
  } else if (!token && to.name !== LOGIN_STATE.IS_LOGIN) {
    // 未登录 去的不是登录页面
    next({ name: LOGIN_STATE.IS_LOGIN })
  } else if (token && to.name === LOGIN_STATE.IS_LOGIN) {
    // 已登录 去的是登录页面
    if (!uid) {
      next()
    } else {
      next({ path: '/' })
    }
  } else if (token && uid && to.name !== LOGIN_STATE.IS_LOGIN) {
    // 已登录但是没有用户菜单
    // 添加动态路由
    // const RoutersList = []
    if (userRouters.length === 0) {
      await store.layout.setUserRouters(uid)
      const newRoutes = generateRouter(store.layout.userRouters)
      const layout = routes.find((item: RouteRecordRaw) => item.name == 'Layout')!
      layout.children = [...generatorRouters, ...newRoutes]
      router.addRoute(layout)
      router.replace(to.path)
    }
    store.layout.setNavList(to.fullPath)
    next()
  } else if (!uid) {
    next({ name: LOGIN_STATE.IS_LOGIN })
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router

/**
 * @description 转化动态路由
 * @param userRouters -用户路由的树形列表
 */
const generateRouter = (userRouters: ITreeMenuItem[]) => {
  const newRouters: RouteRecordRaw[] = userRouters.map((router: ITreeMenuItem) => {
    const isParent = router.pid === 0 && router.children
    const fileName = router.path.match(/\/([^/]*)$/)![1]
    const routes: RouteRecordRaw = {
      path: router.path,
      name: router.name,
      children: [] as RouteRecordRaw[],
      meta: {
        title: router.title,
        icon: router.icon
      },
      component: modules[/* @vite-ignore */ `../views${router.path}/${fileName}.vue`]
    }

    if (isParent) {
      routes.redirect = router.children![0].path
      routes.component = () => import(/* @vite-ignore */ `../components/ParentView/ParentView.vue`)
    }
    if (routes && router.children) {
      routes.children = generateRouter(router.children)
    }
    return routes
  })
  return newRouters
}
