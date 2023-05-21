import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import stylecss from './style.css'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)


app.mount('#app')
