<script setup>
</script>

<template>
	<main class="main">
		<div class="searchBox">
      		<img src="/public/search.svg" alt="лупа">
      		<input type="text" placeholder="Поиск..." class="search">
    	</div>
		<div class="cardBox">
      		<RouterView></RouterView>
    	</div>
	</main>
</template>

<style scoped>
.main {
	user-select: none;
	padding: 2.24vw 0;
	margin-left: auto;
	margin-right: auto;
	width: 74.6vw;
	min-height: calc(81.8vh - 2.24vw);
} 
.searchBox {
	display: flex;
	float: right;
	width: 16.14vw;
	height: 2.55vw;
	align-items: center;
	img{
		margin-left: 0.989vw;
		width: 1.3vw;
		height: 1.3vw;
	}
	.search {
		font-size: 1vw;
		position: absolute;
		float: right;
		background: inherit;
		color: #58656E;
		width: 13.07vw;
		height: 2.55vw;
		border: 2px solid #58656E;
		padding-left: 3.07vw;
		&:focus {
			outline: none;
		}
	}
}
.cardBox {
	display: grid;
	grid-template-columns: repeat(4, 16.14vw);
	gap: 3.3vw;
	margin-top: 4.74vw;
}
</style>