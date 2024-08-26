<script setup>
  import { Auth } from '../functions.js'
</script>

<template>
    <div>
        <div class="bg">
        <div class="auth">
            <div class="container">
            <div class="cont">
                <div class="tg">
                <div class="logo">
                    <img src="/logoMe2Me.svg" alt="logo" class="logoImg"/>
                </div>
                <p class="bot">@t.me/meTWOme_bot</p>
                </div>
                <div class="btn-box">
                <button @click="Auth()">Авторизоваться</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
.tg {
  background: #1e1e1e;
  position: relative;
  width: 15vw;
  height: 25vh;
  border-radius: 16px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
    height: 25vh;
  }
  .logoImg {
    margin-top: -6vh;
    width: 10vw;
    height: 25vh;
  }
  .bot {
    cursor: pointer;
    position: absolute;
    top: 17vh;
    left: 2vw;
    color: #A6AEA3;
  }
}

.btn-box {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
}
</style>