import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

const app = createApp(App)

app.component("default-layout", DefaultLayout)
app.component("dashboard-layout", DashboardLayout)
app.component("empty-layout", EmptyLayout)
app.use(createPinia())
app.use(router)

app.mount('#app')
