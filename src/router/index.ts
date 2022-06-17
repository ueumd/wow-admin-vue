import { createRouter, createWebHashHistory } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '@/store/index'
import routes from './routers'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const { getLocalStorage } = useLocalStorage()

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

enum LOGIN_STATE {
  IS_LOGIN = 'Login'
}

router.beforeEach(async (to, from, next) => {
  // 开始加载进度条
  nprogress.start()

  const token = getLocalStorage('token') || false
  const uid = getLocalStorage('uid')

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
    next()
  } else if (!uid) {
    next({ name: LOGIN_STATE.IS_LOGIN })
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router
