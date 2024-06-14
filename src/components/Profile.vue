<script setup>
  import { inject, ref } from 'vue'
  import slash from '@/functions.js'
  const profile = inject('profile')
  const user = inject('user')
  const balance = 999999
  const rating = 3.3

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
  <div class="profile">
      <div class="back" @click="profile = 0">
        <img src="/public/arrow-left.svg" alt="arrow">
        <button>Назад</button>
      </div>
    <div class="divider"></div>
    <div class="info">
      <div class="balance">
        <h1>Баланс</h1>
        <div class="addButton">
          <p>{{balance}} Shr</p>
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
            <div v-for="i in divide(rating).full" :key="i">
              <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.32923 16.0349L0 9.9116H10.3038L13.5 0L16.6962 9.9116H27L18.6708 16.0349L21.8842 26L13.5 19.8363L5.11579 26L8.32923 16.0349Z" fill="#5C6973"/>
              </svg>
            </div>
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" :style="`margin-left: calc(-0.27 * ${divide(rating).part}px)`">
              <path :style="`transform: translateX(${divide(rating).part}%);`" d="M8.32923 16.0349L0 9.9116H10.3038L13.5 0L16.6962 9.9116H27L18.6708 16.0349L21.8842 26L13.5 19.8363L5.11579 26L8.32923 16.0349Z" fill="#5C6973"/>
            </svg>
          </div>
          <div class="rate">
            <h1>{{rating}}</h1>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<style scoped>
  .bg {
    position: fixed;
    top: 0;
    width: 69.0625vw;
    height: 100vh;
    background: #000;
    z-index: 9;
    opacity: 0.8;
  }
  .profile {
    user-select: none;
    overflow: scroll;
    position: fixed;
    top: 0;
    right: 0;
    width: 30.9375vw;
    opacity: 1;
    height: 100%;
    background: #000;
    z-index: 10;
    border-left: 2px solid;
    border-image: linear-gradient(#697783, #373E44) 1;
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
    .balance {
      margin-top: 2vw;
      width: 100%;
      max-height: 1vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        margin: 0;
        font-size: 1.5vw;
        color: #BBBBBB;
      }
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
  }
</style>