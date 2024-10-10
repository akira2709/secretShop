<script setup>
	import ItemCard from './ItemCard.vue'
	import { inject } from 'vue'

	const items = inject('items')
</script>

<template>
    <ItemCard v-for="item in items" :item="item" :key="item"></ItemCard>
	<!-- I need it to render sidebar components, when items are opened  -->
    <RouterView></RouterView>
</template>

<style scoped>
</style>