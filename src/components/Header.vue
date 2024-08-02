<script setup>
   import { inject } from 'vue'
   import slash from '@/functions.js'
   const user = inject('user')
</script>



<template>
   <header class="header">
     <img src="/public/logoBlack.png" alt="logo" class="logo">
      <div class="profile">
         <div class="info">
            <p class="name" @click="$router.push({name: 'profile'})">{{ user.username }}</p>
            <div class="balance">
              <p>{{ slash(user.amount) }}</p>
              <p>Shr</p>
              <img src="/public/shard.svg" alt="shard" class="shardIcon">
            </div>
         </div>
      </div>
   </header>
</template>
<style scoped>
   .header {
      user-select: none;
      margin-top: .5%;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      width: 74.6%;
      height: 19.2%;
      border-bottom: 2px solid #6A7884;
      padding-bottom: .5%;
   }
   .logo {
      height: 83%;
      width: 13%;
   }
   .profile {
      display: flex;
      color: white;
      margin-left: auto;
      width: 22.5%;
      cursor: pointer;
   }
   .info {
      margin-left: auto;
   }
   .balance {
      color: #5C6973;
      gap: 0.2vw;
      display: flex;
      float: right;
   }
   .shardIcon {
      width: 0.83vw;
      height: 1.875vw;
   }
   .balance p {
      font-size: 1.5vw;
      margin: 0.1vw 0 0 0;
   }
   .name {
     color: #BBBBBB;
     font-size: 2vw;
     width: fit-content;
     margin: 1vw 0 0 auto;
   }
</style>