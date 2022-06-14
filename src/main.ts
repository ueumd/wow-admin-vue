import useStore, { pinia } from './store'
import AppElement from './App.vue'

import './styles/index.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// @todo 先这样引入
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(AppElement)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.mount('#app')
