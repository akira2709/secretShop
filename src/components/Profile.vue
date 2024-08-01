<script setup>
  import { inject, ref } from 'vue'
  const user = inject('user')
  const isOpen = ref(false)
  const isOffers = (value) => {
    if (value < 2) {
      return value
    }
    return 2
  }
  function lastOffers(allOffers) {
    let result = []
    for (let i = 0; i < isOffers(allOffers.length); i++) {
      result.push(allOffers[i])
    }
    return result
  }

  function divide(value) {
    return {
      'full': Math.floor(value),
      'part': (1 - value + Math.floor(value)) * 100,
    }
  }
</script>

<template>
  <div class="bg">
  </div>
  <div class="profile" v-if="user">
    <div class="back" @click="$router.go(-1)">
      <img src="/public/arrow-left.svg" alt="arrow">
      <button>Назад</button>
    </div>
    <span class="username">{{ user.username }}</span>
    <div class="divider"></div>
    <div class="info">
      <div class="balance">
        <h1>Баланс</h1>
        <div class="addButton">
          <p>{{user.amount}} Shr</p>
          <img src="/addBalance.svg" alt="пополнить баланс">
        </div>
      </div>
      <div class="balance">
        <h1>Рейтинг</h1>
        <div class="rating">
          <div class="bgStar">
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" v-for="i in 5" :key="i">
              <path d="M8.32923 16.0349L0 9.9116H10.3038L13.5 0L16.6962 9.9116H27L18.6708 16.0349L21.8842 26L13.5 19.8363L5.11579 26L8.32923 16.0349Z" fill="#22252C"/>
            </svg>
          </div>
          <div class="stars">
            <div v-for="i in divide(user.rating).full" :key="i">
              <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.32923 16.0349L0 9.9116H10.3038L13.5 0L16.6962 9.9116H27L18.6708 16.0349L21.8842 26L13.5 19.8363L5.11579 26L8.32923 16.0349Z" fill="#5C6973"/>
              </svg>
            </div>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" :style="`margin-left: calc(-0.27 * ${divide(rating).part}px)`">
              <path :style="`transform: translateX(${divide(user.rating).part}%);`" d="M8.32923 16.0349L0 9.9116H10.3038L13.5 0L16.6962 9.9116H27L18.6708 16.0349L21.8842 26L13.5 19.8363L5.11579 26L8.32923 16.0349Z" fill="#5C6973"/>
            </svg>
          </div>
          <div class="rate">
            <h1>{{user.rating}}</h1>
          </div>
        </div>
      </div>
      <div class="infoDivider"></div>
      <div class="offers">
        <h1>Мои сделки</h1>
        <div class="myOffers">
          <div v-if="!user.my_offers.length" class="noOffers">
            <img src="/empty-basket.svg" alt="empty basket">
            <h1>Сделок нет</h1>
          </div>
          <div v-if="!isOpen">
            <div class="offerCard" v-for="offer in lastOffers(user.my_offers)" :key="offer.id">
              <h1>{{ offer.name }}</h1>
              <div class="offerData">
                <p>{{ offer.author }}</p>
                <p>{{ offer.date }}</p>
              </div>
              <div class="offerData">
                <p>Сделка {{ offer.id }}</p>
                <p>{{ offer.price }} Shr</p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="offerCard" v-for="offer in user.my_offers" :key="offer.id">
              <h1>{{ offer.name }}</h1>
              <div class="offerData">
                <p>{{ offer.author }}</p>
                <p>{{ offer.date }}</p>
              </div>
              <div class="offerData">
                <p>Сделка {{ offer.id }}</p>
                <p>{{ offer.price }} Shr</p>
              </div>
            </div>
          </div>
          <div class="offerInfo" v-if="user.my_offers.length >= 1">
            <h1 v-if="!isOpen">{{isOffers(user.my_offers.length)}} из {{ user.my_offers.length }}</h1>
            <h1 v-else>{{ user.my_offers.length }} из {{ user.my_offers.length }}</h1>
            <div class="open" @click="isOpen = !isOpen">
              <img src="/arrow-down.svg" alt="arrow down" v-if="!isOpen">
              <img src="/arrow-down.svg" alt="arrow up" v-else style="rotate: 180deg; margin-top: -.1vw">
              <h1 v-if="!isOpen">ещё</h1>
              <h1 v-else>Скрыть</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="infoDivider"></div>
      <div class="offers history">
        <h1>История сделок</h1>
        <div class="myOffers">
          <div v-if="!user.offers_history.length" class="noOffers">
            <img src="/empty-basket.svg" alt="empty basket">
            <h1>Сделок нет</h1>
          </div>
          <div v-if="!isOpen">
            <div class="offerCard" v-for="offer in lastOffers(user.offers_history)" :key="offer.id">
              <h1>{{ offer.name }}</h1>
              <div class="offerData">
                <p>{{ offer.author }}</p>
                <p>{{ offer.date }}</p>
              </div>
              <div class="offerData">
                <p>Сделка {{ offer.id }}</p>
                <p>{{ offer.price }} Shr</p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="offerCard" v-for="offer in user.offers_history" :key="offer.id">
              <h1>{{ offer.name }}</h1>
              <div class="offerData">
                <p>{{ offer.author }}</p>
                <p>{{ offer.date }}</p>
              </div>
              <div class="offerData">
                <p>Сделка {{ offer.id }}</p>
                <p>{{ offer.price }} Shr</p>
              </div>
            </div>
          </div>
          <div class="offerInfo" v-if="user.offers_history.length >= 1">
            <h1 v-if="!isOpen">{{isOffers(user.offers_history.length)}} из {{ user.offers_history.length }}</h1>
            <h1 v-else>{{ user.offers_history.length }} из {{ user.offers_history.length }}</h1>
            <div class="open" @click="isOpen = !isOpen">
              <img src="/arrow-down.svg" alt="arrow down" v-if="!isOpen">
              <img src="/arrow-down.svg" alt="arrow up" v-else style="rotate: 180deg; margin-top: -.1vw">
              <h1 v-if="!isOpen">ещё</h1>
              <h1 v-else>Скрыть</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="profile" v-else>
    <div class="back" @click="$router.go(-1)">
      <img src="/public/arrow-left.svg" alt="arrow">
      <button>Назад</button>
    </div>
    <div class="divider"></div>
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
  .info {
    position: absolute;
    top: 7.03vw;
    width: calc(30.9375vw - 2vw);
    min-height: calc(100vh - 7.03vw);
    padding-left: 1vw;
    padding-right: 1vw;
    h1 {
      margin: 0;
      font-size: 1.5vw;
      color: #BBBBBB;
    }
    .balance {
      margin-top: 3vw;
      margin-bottom: 2vw;
      width: calc(100% - 2vw);
      padding: 0 1vw;
      max-height: 1vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .addButton {
        display: flex;
        align-items: center;
        p {
          margin: 0;
          font-size: 1.5vw;
          color: #5C6973;
        }
        img {
          height: 2.3vw;
          margin-left: .6vw;
          transition: all .3s;
          cursor: pointer;
          &:hover {
            scale: 0.9;
            transition: all .3s;
          }
          &:active {
            scale: 0.8;
          }
        }
      }

    }
    .rating {
      display: flex;
      height: 2vw;
      .rate {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: .6vw;
        padding-top: .3vw;
      }
      svg {
        height: 2vw;
      }
      .stars {
        position: absolute;
        display: flex;
      }
    }
    .infoDivider {
      width: 100%;
      height: 2px;
      background: #667480;
      margin-top: 3vw;
    }
    .offers {
      padding: 0 1vw;
      h1 {
        margin-top: 2vw;
      }
      .myOffers {
        position: relative;
        margin-top: 2vw;
        min-height: 5vw;
        border: 1px solid #292E33;
        border-radius: 0.8vw;
        background: #000;
        padding-bottom: 2.3vw;
        .offerInfo {
          display: flex;
          position: absolute;
          bottom: 0;
          width: calc(100% - 2vw);
          height: 2.3vw;
          align-items: center;
          justify-content: space-between;
          padding: 0 1vw;
          h1 {
            margin: 0;
            font-size: 1.15vw;
          }
          .open {
            display: flex;
            gap: .4vw;
            cursor: pointer;
            img {
              margin-top: .3vw;
            }
          }
        }
        .offerCard {
          h1 {
            margin: 0;
          }
          height: 5vw;
          width: calc(100% - 2vw);
          padding: 0 1vw;
          border-bottom: 1px solid #292E33;
          margin-top: .5vw;
          .offerData {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              margin: 0;
              color: #5C6973;
            }
          }
        }
        .noOffers {
          margin-top: 2.3vw;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 5vw;
            height: 5vw;
          }
          h1 {
            margin: .3vw 1vw 0;
          }
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
  @keyframes opening {
    0% {
      width: 0;
    }
    100% {
      width: 30.9375vw;
    }
  }
  .history {
    margin-bottom: 2vw;
  }
</style>