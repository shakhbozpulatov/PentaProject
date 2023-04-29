import { createApp } from 'vue'
import router from './router/index'

import './style.css'
import App from './App.vue'
import "./assets/bootstrap.min.css"

const app = createApp(App)

app.use(router).mount('#app')

