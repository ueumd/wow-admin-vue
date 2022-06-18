import user from './user'
import layout from './layout'

const pinia = createPinia()

/*export function setupPinia(app: App<Element>) {
  pinia.use(({ store }) => {
    // ... 这里安装插件
  })
  app.use(pinia)
  return app
}*/

export { pinia }

// 统一导出 useStore 方法
export default function useStore() {
  return {
    user: user(),
    layout: layout()
  }
}
