<script setup>
import SubjectCard from '@/components/forMain/SubjectCard.vue'
</script>

<template>
    <div class="orderCard">
        <div class="logo">
            <img src="/public/secretShop.png" alt="secretShop"> <!-- нужно svg лого  -->
        </div>
        <p>магазин нужых работ</p>
        <div class="buttonsBox">
            <button class="send" @click="$router.push({ path: $route.path + '/change' })">Отправить</button>
            <button class="request" @click="$router.push({ path: $route.path + '/change' })">Запросить</button>
            <button class="buy" @click="$router.push({ name: 'items', query: { subject: 'all' } })">Купить</button>
        </div>
    </div>
    <SubjectCard></SubjectCard>
    <RouterView></RouterView>
</template>

<style scoped>
.orderCard {
	.logo {
		display: flex;
		justify-content: center;
		margin-top: 0.989vw;
		img {
			width: 13.4vw;
			height: 2.5vw;
		}
		width: 100%;
		height: 2.24vw;
	}

	p {
		font-size: 1.1vw;
		margin-top: 0.5vw;
		margin-bottom: 0;
		color: #5C6973;
		display: flex;
		justify-content: center;
	}
	height: 17.81vw;
	width: 16.14vw;
	border: 2px solid #5C6973;
	background: linear-gradient(#21252C, #050505);
	border-image: linear-gradient(#5C6973, #1F232A);
	border-image-slice: 1;
	.buttonsBox {
		padding-top: 1.5vw;
		padding-bottom: 0.5vw;
		display: grid;
		justify-content: center;
		width: 16.14vw;
		height: 10.9vw;
		button {
			cursor: pointer;
			font-size: 1vw;
			color: #A6AEA3;
			border: 1.5px solid;
			border-image: linear-gradient(#F7BC1B, #655828) 1;
			background: linear-gradient(rgba(100, 76, 11, 0.41), #050505);
			width: calc(12.2vw - 2px);
			height: calc(2.7vw - 2px);
			box-shadow: 1px 1px 1px black;
			transition: all 100ms;
			&:hover {
				opacity: 0.7;
				scale: 0.99;
				transition: all 100ms;
				box-shadow: none;
			}
			&:active {
				opacity: 0.9;
				scale: 0.98;
				transition: all 100ms;
			}
		}
	}
}
</style>
