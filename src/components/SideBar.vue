<script setup>
</script>
<template>
	<nav class="sidebar">
		<div class="bookbox">
			<img src="/public/book.svg" alt="book" class="book">
		</div>
		<div class="divider"></div>
		<div class="filterbox" @click="$router.push({name: 'filters'})">
			<img src="/public/filter.svg" alt="filter" class="filter">
		</div>
		<div class="changebox">
			<img src="/public/change.svg" alt="change" class="change">
		</div>
		<div class="basketbox" @click="$router.push({name: 'basket'})">
			<img src="/public/basket.svg" alt="basket" class="basket">
		</div>
	</nav>
</template>
<style scoped>
	.sidebar { 
		user-select: none;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 4.16%;
		border-left: 2px #6A7884 solid;
	}
	.bookbox {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 8.7%;
	}
	.book{
		cursor: pointer;
		width: 3.64vw;
		height: 5.92vh;
	}
	.divider {
		width: 100%;
		height: 2px;
		background: #6A7884;
	}
	.filterbox {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 7.26%;
		margin-top: 20px;
	}
	.filter {
		cursor: pointer;
		width: 2.34vw;
		height: 4.9vh;
	}
	.changebox {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 4.53%;
		margin-top: 1.85vh;
	}
	.change {
		cursor: pointer;
		width: 2.08vw;
		height: 4.2vh;
	}
	.basketbox {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 6.5%;
		margin-top: 20px;
	}
	.basket {
		cursor: pointer;
		width: 2.34vw;
		height: 4.17vh;
	}
</style>