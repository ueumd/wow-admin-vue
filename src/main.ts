import pinia, { useStore, setupPinia } from './store'
import flux from './core/index'
import util from './utils/index'
import api from './api/index'
import router from './router/index'
import AppElement from './App.vue'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './styles/index.scss'

// @todo 先这样引入
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-message.css'

flux.prop('util', util)
flux.prop('api', api)

async function bootstrap() {
  const app = createApp(AppElement)

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  app.use(ElementPlus, {
    locale: zhCn
  })

  setupPinia(app)

  flux.prop('store', useStore())

  app.use(router)
  app.mount('#app')
}

bootstrap()
