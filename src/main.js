import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Profile from './components/Profile.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [ { path: '/profile', component: Profile},
	],
})
export default router
const app = createApp(App)
app.use(router)
app.mount('#app')