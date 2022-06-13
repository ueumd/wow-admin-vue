import useStore, { pinia } from './store'
import AppElement from './App.vue'
const app = createApp(AppElement)
app.use(pinia)
app.mount('#app')
