import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CardBox from '@/components/forMain/CardBox.vue'
import Error from './components/Error.vue'
import ItemsList from './components/forMain/ItemsList.vue'
import Profile from './components/Profile.vue'
import Filters from './components/Filters.vue'
import Basket from './components/Basket.vue'
import Change from './components/Change.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/:catchAll(.*)', redirect: '/error' },
		{ path: '/error', component: Error, name: 'error' },
		{ path: '/', redirect: '/main' },
		{ path: '/main', component: CardBox, children: [
			{ path: 'profile', component: Profile, strict: true },
			{ path: 'filters', component: Filters, strict: true },
			{ path: 'basket', component: Basket, strict: true },
			{ path: 'change', component: Change, strict: true },
		], strict: true, name: 'main' },
		{ path: '/items', component: ItemsList, children: [
			{ path: 'profile', component: Profile, strict: true },
			{ path: 'filters', component: Filters, strict: true },
			{ path: 'basket', component: Basket, strict: true },
			{ path: 'change', component: Change, strict: true },
		], strict: true, name: 'items' },
	],
})
export default router
const app = createApp(App)
app.use(router)
app.mount('#app')