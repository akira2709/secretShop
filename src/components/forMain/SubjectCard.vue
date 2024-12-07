<script setup>
  import { onMounted, ref } from 'vue'
  import { getSubjects, ucFirst } from '@/functions.js'

  const subjects = ref([])
  onMounted(async () => {
    subjects.value = await getSubjects()
  })
</script>

<template>
  <div class="orderCard" v-for="subject in subjects" :key="subject.name">
    <div class="subTitle">
      <h1>{{ ucFirst(subject.name) }}</h1>
      <img :src="subject.icon" alt="subject logo">
    </div>
    <div class="description">
      <p>{{ subject.description }}</p>
    </div>
    <div class="btnBox">
      <button @click="$router.push({ name: 'items', query: { subject: subject.name } })" class="workButton">Работы</button>  
    </div>
  </div>
  
</template>

<style scoped>
.orderCard {
  position: relative;
  height: 15.81vw;
  width: 14.14vw;
  border: 2px solid #5C6973;
  background: linear-gradient(#21252C, #050505);
  border-image: linear-gradient(#5C6973, #1F232A);
  border-image-slice: 1;
  padding: 1vw;
  .btnBox {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    height: 17.81vw;
    width: 16.14vw;
  }
  .workButton {
    position: absolute;
    bottom: 1.5vw;
  }
  .description {
    height: 8vw;
    overflow-y: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    p {
      margin: 0;
      color: #5C6973;
    }
  }
  .subTitle {
    display: flex;
    word-break: keep-all;
    width: 100%;
    img {
      width: calc(((1vw + 1vh) / 2) * 4);
      aspect-ratio: 1;
      margin-right: auto;
      margin-left: auto;
    }
  }
  h1 {
    color: #BBBBBB;
    margin: 1vw 0;
    margin-right: 1vw;
    font-size: 1.5vw;
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
}
</style>