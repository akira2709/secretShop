<script setup>
	import { inject } from 'vue'
	import { ucFirst } from '/src/functions.js'

	const props = defineProps({
		value: String,
		input: String,
		isSlot: Boolean,
	})

	function isNumberKey(evt) {
		var charCode = (evt.which) ? evt.which : evt.keyCode
		return !(charCode > 31 && (charCode < 48 || charCode > 57))
	}
	const data = inject('data')
</script>

<template>
	<div class="inpBlock">
	    <p>{{ ucFirst(value) }}</p>
		<input v-model="data.name" :onkeypress="(event) => isSlot ? isNumberKey(event) : true" type="text" :placeholder='`Введите ${input.toLowerCase()}...`' :style="isSlot ? 'padding-right: 2vw; width: 11.5vw !important;' : ''" v-if="!isSlot">
        <input v-model="data.price" :onkeypress="(event) => isSlot ? isNumberKey(event) : true" type="text" :placeholder='`Введите ${input.toLowerCase()}...`' :style="isSlot ? 'padding-right: 2vw; width: 11.5vw !important;' : ''" v-else>
		<slot></slot>
	</div>
</template>

<style scoped>
.inpBlock {
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1vw;
	p {
		color: #BBBBBB;
		font-size: 1.5vw;
		margin: 0;
	}
	input {
		outline: none;
		color: #5C6973;
		background: inherit;
		padding: .3vw .5vw;
		border: 2px solid #5C6973;
		background: inherit;
		border-image: linear-gradient(#5C6973, #1F232A);
		border-image-slice: 1;
		width: 13vw;
		font-size: 1vw;
	}
}
</style>