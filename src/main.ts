import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import './style.css'
import ElementPlus from 'element-plus'
// 添加Element Plus的CSS样式导入
import 'element-plus/dist/index.css'
import './assets/icon/iconfont.js'

const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')

