import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '@/components/FirstPage.vue'
import Profile from '@/components/Profile.vue'
import Filters from '@/components/Filters.vue'
import Basket from '@/components/Basket.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/main' },
		{ path: '/:subject', component: FirstPage, children: [
			{path: '/:subject/profile', component: Profile, name: 'profile', alias: ['/:subject/profile']},
			{path: '/:subject/filters', component: Filters, name: 'filters', alias: ['/:subject/filters']},
			{path: '/:subject/basket', component: Basket, name: 'basket', alias: ['/:subject/basket']}
			]},
	],
})
export default router
const app = createApp(App)
app.use(router)
app.mount('#app')