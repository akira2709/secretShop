<script setup>
  import { onMounted, ref } from 'vue'
  import { getSubjects } from '@/functions.js'

  const subjects = ref([])
  onMounted(async () => {
    subjects.value = await getSubjects()
  })
  function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
</script>

<template>
  <div class="orderCard" v-for="subject in subjects" :key="subject.name">
    <div class="subTitle">
      <h1>{{ ucFirst(subject.name) }}</h1>
      <img src="" alt="subject logo">
    </div>
    <div class="description">
      <p>{{ subject.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.orderCard {
  height: 15.81vw;
  width: 14.14vw;
  border: 2px solid #5C6973;
  background: linear-gradient(#21252C, #050505);
  border-image: linear-gradient(#5C6973, #1F232A);
  border-image-slice: 1;
  padding: 1vw;
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
    width: 90%;
  }
  h1 {
    color: #BBBBBB;
    margin: 0;
    font-size: 2vw;
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