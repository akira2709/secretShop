<script setup>
    import { inject, provide, ref, watch } from 'vue'
    import InputBlock from './forChange/InputBlock.vue'
    import InputText from './forChange/InputText.vue'
    import ChangeBlock from './forChange/ChangeBlock.vue'
    import FileInput from './forChange/FileInput.vue'

    const user = inject('user')
    const data = ref({
        name: '',
        price: '',
        type: 'Самостоятельная', 
        subject: 'Алгебра',
        description: '',
        file: ''
    })
    provide('data', data)
    watch(data.value, () => console.log(data.value))
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
        <div class="titleBox">
            <h1>Сделка</h1>
        </div>
        <div class="infoDivider"></div>
        <InputBlock value="название" input="название" :isSlot="false"></InputBlock>
        <InputBlock value="цена" input="цену" :isSlot="true">
            <p class="shard">Sh</p>
        </InputBlock>
        <ChangeBlock name="Тип" mode="type"></ChangeBlock>
        <ChangeBlock name="Предмет" mode="subject"></ChangeBlock>
        <InputText value="Описание"></InputText>
        <FileInput value="Фото"></FileInput>
    </div>
  </div>
</template>

<style scoped>
.shard {
	position: absolute;
	right: .5vw;
	color: #5C6973 !important;
	font-size: 1vw !important;	
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
    width: calc(30.9375vw - 4vw);
    min-height: calc(100vh - 9.03vw);
    padding: 1vw 2vw;
    .titleBox {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    h1 {
      margin: 0;
      font-size: 2vw;
      color: #BBBBBB;
    }
    .infoDivider {
      width: 100%;
      height: 2px;
      background: #667480;
      margin-top: 1vw;
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