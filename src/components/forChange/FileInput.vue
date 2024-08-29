<script setup>
	import { inject, ref } from 'vue'
	import { ucFirst } from '/src/functions.js'

	const props = defineProps({
		value: String,
	})
	const data = inject('data')
    const file = ref({})

    function handleUpload() {
        const input = document.getElementById('input')
        input.click()
    }

    function onUpload(event) {
        file.value = event.target.files[0]
        data.value.file = file.value
    }

    function deleteFile() {
        file.value = {}
        data.value.file = ''
    }
</script>

<template>
	<div class="inpBlock">
	    <p>{{ ucFirst(value) }}</p>
		<div class="inputBox">
            <input type="file" id="input" @change="onUpload($event)">
            <div class="fileBox">
                <div v-if="file.name" class="input filename" :title="file.name">
                    <span>{{ file.name }}</span>
                    <img src="/public/cross.svg" alt="cross" @click="deleteFile()">
                </div>
                <div v-else class="input filename" style="width: 10.6vw;">Файл не выбран...</div>
                <img src="/public/addBalance.svg" alt="plus" class="input addBtn" @click="handleUpload()">
            </div>
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
    .fileBox {
        display: flex;
        .filename {
            position: relative;
            display: flex;
            align-items: center;
            margin-right: .3vw;
            max-width: 9.2vw;
            max-height: 1.2vw;
            /* white-space: nowrap;
            overflow: hidden; */
            padding-right: 2vw;
            img {
                cursor: pointer;
                position: absolute;
                right: .5vw;
                width: 1vw;
            }
            span {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                box-sizing: border-box;
            }
        }
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
		width: fit-content;
		font-size: 1vw;
        resize: none;
    }
}
</style>