<script setup>
	import ItemCard from './ItemCard.vue'
	import { inject } from 'vue'

	const items = inject('items')
</script>

<template>
    <ItemCard v-for="item in items" :item="item"></ItemCard>
    <RouterView></RouterView>
</template>

<style scoped>
</style>