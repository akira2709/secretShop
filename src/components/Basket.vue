<script setup>
  import { inject } from 'vue'
  import BasketCart from '@/components/forBasket/BasketCart.vue'

  const user = inject('user')
  function countPrice(basket) {
    let totalPrice = 0;
    basket.map((el) => totalPrice += el.price);
    return totalPrice;
  }
</script>

<template>
  <div class="bg">
  </div>
  <div class="profile">
    <div class="back" @click="$router.go(-1)">
      <img src="/public/arrow-left.svg" alt="arrow">
      <button>Назад</button>
    </div>
    <span class="username">{{ user.username }}</span>
    <div class="divider"></div>
    <div class="basket">
      <div class="info">
        <div>
          <h1>Корзина</h1>
          <p>{{ user.basket.length }} товаров</p>
          <p>на сумму {{ countPrice(user.basket) }} shr</p>
        </div>
        <div class="select-btn">
          <button>Купить выбранное</button>
          <p>Очистить выбранное</p>
          <p>Выбрать все</p>
        </div>
      </div>
      <div class="infoDivider"></div>
      <BasketCart :author="'ivan'" :price="1234"></BasketCart>
    </div>
  </div>
</template>

<style scoped>
.profile {
  user-select: none;
  overflow: scroll;
  position: fixed;
  top: 0;
  right: 0;
  width: 30.9375vw;
  opacity: 1;
  height: 100%;
  background: linear-gradient(#1B1C1E, #111112);
  z-index: 10;
  border-left: 2px solid;
  border-image: linear-gradient(#697783, #373E44) 1;
  animation: opening .3s forwards;
}
.back {
  display: flex;
  margin-top: 2.03vw;
  width: 7.76vw;
  height: 2.3vw;
  margin-left: 2.44vw;
  cursor: pointer;
  button {
    background: inherit;
    border: none;
    color: #BBB;
    font-size: 1.5vw;
    transition: all 300ms;
    cursor: pointer;
  }
  img {
    height: 2vw;
    margin-top: .2vw;
  }
  &:hover {
    button{
      padding: 0;
      transition: all 300ms;
    }
  }
}
.divider {
  position: absolute;
  top: 7.03vw;
  width: 30.9375vw;
  height: 2px;
  background: #667480;
}
.basket {
  position: absolute;
  top: 7.03vw;
  width: calc(30.9375vw - 2vw);
  min-height: calc(100vh - 9.03vw);
  padding: 1vw;
  h1 {
    margin: 0;
    font-size: 2vw;
    color: #BBBBBB;
  }
  p {
    color: #5C6973;
    font-size: 1.2vw;
    margin: .3vw;
  }
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
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1vw;
    .select-btn {
      width: 13.45vw;
      button {
        font-size: 1.2vw;
        width: 100%;
      }
      p {
        margin-left: auto;
        width: fit-content;
        cursor: pointer;
      }
    }
  }
}
.username {
  top: 2.5vw;
  right: 2vw;
  position: absolute;
  color: #BBBBBB;
  font-size: 1.5vw;
  font-weight: bold;
}
.infoDivider {
  width: calc(100% - 2vw);
  height: 1px;
  background: #667480;
  margin-top: 1vw;
  margin-left: 1vw;
}
@keyframes opening {
  0% {
    width: 0;
  }
  100% {
    width: 30.9375vw;
  }
}
</style>