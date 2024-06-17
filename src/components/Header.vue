<script setup>
   import { inject, ref } from 'vue'
   import slash from '@/functions.js'

   const profile = inject('profile')
   const balance = ref(999999)
</script>



<template>
   <header class="header">
     <img src="/public/logoBlack.png" alt="logo" class="logo">
      <div class="profile">
         <div class="info">
            <p class="name" @click="$router.push({name: 'profile'})">MewingMan</p>
            <div class="balance">
               <p>{{ slash(balance) }}</p>
               <img src="/public/shard.svg" alt="shard" class="shardIcon">
            </div>
         </div>
        <div class="avatar" @click="$router.push({name: 'profile'})">
          <img src="/public/logo.jpg" alt="avatar">
        </div>
      </div>
   </header>

</template>
<style scoped>
   .header {
      user-select: none;
      margin-top: 1%;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      width: 74.6%;
      height: 19.2%;
      border-bottom: 2px solid #6A7884;
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
   .avatar { 
      float: right;
      margin-left: 1vw;
      border-radius: 100%;
      border: 3px #5C6973 solid; 
      width: 4.375vw;
      height: 4.375vw;
   }
   .avatar img{
      height: 100%;
      width: 100%;
      border-radius: 100%;
   }
   /* i'm here now, i need to make balance */
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
      margin: 1vw 0 0 0;
      font-size: 1.5vw;
   }
</style>