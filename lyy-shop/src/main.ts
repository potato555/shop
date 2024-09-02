import '@/assets/styles/index.scss'

import App from './App.vue'
import SvgIcon from '~virtual/svg-component'

const app = createApp(App)

// 将svgicon 设置为全局组件
app.component(SvgIcon.name, SvgIcon)

const pinia = createPinia()
app.use(pinia)

app.use(router)

app.mount('#app')
