import type { App } from 'vue'
import user from './modules/user'
import layout from './modules/layout'

const pinia = createPinia()

export function setupPinia(app: App<Element>) {
  pinia.use(({ store }) => {
    // ... 这里安装插件
  })
  app.use(pinia)
  return app
}

export default pinia

/**
 * 统一导出 useStore 方法
 * const store = useStore()
 * store.user.userinfo
 */
export function useStore() {
  return {
    user: user(),
    layout: layout()
  }
}
