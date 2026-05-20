import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'
import '@iweai/ui/src/style.css'
import App from './App.vue'
import { createYearRouter } from '@iweai/ui'

const app = createApp(App)
app.use(createPinia())
// ← CHANGE: replace '2026' with the actual year
app.use(createYearRouter('/2026/'))
app.mount('#app')
