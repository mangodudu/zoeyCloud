/*
 * @Author: zoey
 * @Date: 2023-11-09 17:35:03
 * @LastEditors: zoey
 * @LastEditTime: 2024-01-10 19:43:55
 * @Description: 请填写简介
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/css/base.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import ZoeyUi from 'zoey-ui_mango'
import 'zoey-ui_mango/lib/zoey-ui.css'
import router from './router'
const app = createApp(App)

app.use(ZoeyUi)
app.use(router)
app.use(createPinia())
app.mount('#app')
