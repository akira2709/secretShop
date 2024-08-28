<script setup>
	import { inject } from 'vue'
	import { ucFirst } from '/src/functions.js'

	const props = defineProps({
		value: String,
	})
	const data = inject('data')

    function upload() {
        const input = document.getElementById('input')
        input.click()
    }
</script>

<template>
	<div class="inpBlock">
	    <p>{{ ucFirst(value) }}</p>
		<div class="inputBox">
            <input type="file" id="input">
            <img src="/public/addBalance.svg" alt="plus" class="input addBtn" @click="upload()">
        </div>
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
    .addBtn {
        border: none !important;
        width: 2vw !important;
        height: 2vw !important;
        padding: 0 !important;
        transition: all .3s;
        cursor: pointer;
        &:hover {
            scale: 0.95;
            transition: all .3s;
        }
        &:active {
            scale: 0.9;
        }
    }
    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        visibility: hidden;
    }
	.input {
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