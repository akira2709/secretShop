<script setup>
	import { inject } from 'vue'
	import { ucFirst } from '/src/functions.js'

	const props = defineProps({
		value: String,
	})
	const data = inject('data')
</script>

<template>
	<div class="inpBlock">
	    <p>{{ ucFirst(value) }}</p>
		<textarea v-model="data.description" type="text" placeholder="Введите описание..."></textarea>
	</div>
</template>

<style scoped>
.inpBlock {
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 1vw;
	p {
		color: #BBBBBB;
		font-size: 1.5vw;
		margin: 0;
	}
	textarea {
		outline: none;
		color: #5C6973;
		background: inherit;
		padding: .3vw .5vw;
		border: 2px solid #5C6973;
        background: inherit;
		border-image: linear-gradient(#5C6973, #1F232A);
		border-image-slice: 1;
		width: 13vw;
        height: 7vw;
		font-size: 1vw;
        resize: none;
	}
}
</style>