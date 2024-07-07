<script setup>
  const subjects = [
    {
      name: 'math',
      description: 'Math is a science...'
    },
    {
      name: 'russian',
      description: 'Math is a science...'
    },
    {
      name: 'IT',
      description: 'Math is a science...'
    },
    {
      name: 'Biology',
      description: 'Math is a science...'
    },
  ]
</script>

<template>
	<main class="main">
		<div class="searchBox">
			<img src="/public/search.svg" alt="loupe">
			<input type="text" placeholder="Поиск..." class="search">
		</div>
		<div class="cardBox">
			<div class="orderCard">
				<div class="logo">
					<img src="/public/secretShop.png" alt="secretShop"> <!-- нужно svg лого  -->
				</div>
				<p>магазин нужых работ</p>
				<div class="buttonsBox">
					<button class="send">Отправить</button>
					<button class="request">Запросить</button>
					<button class="buy">Купить</button>
				</div>
			</div>
      <div class="orderCard" v-for="subject in subjects">
        <div class="logo">
          <img src="/public/secretShop.png" alt="secretShop"> <!-- нужно svg лого  -->
        </div>
        <p>{{ subject.name }}</p>
        <div class="buttonsBox">
          <button class="send">Отправить</button>
          <button class="request">Запросить</button>
          <button class="buy" @click="$router.push(`/${subject.name}`)">Купить</button>
        </div>
      </div>
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
			width: calc(11.45vw - 2px);
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