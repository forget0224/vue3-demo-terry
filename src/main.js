import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'uno.css'
import './assets/main.css'

// import { worker } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser')
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
