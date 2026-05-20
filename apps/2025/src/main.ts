import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import '@iweai/ui/src/style.css'
import App from './App.vue'
import { createYearRouter } from '@iweai/ui'

const app = createApp(App)
app.use(createPinia())
app.use(createYearRouter('/2025/'))
app.mount('#app')
