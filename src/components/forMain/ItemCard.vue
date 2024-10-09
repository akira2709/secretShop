<script setup>
  import { onMounted, ref } from "vue";
  import { Item, getItem } from "@/functions.js";
  const props = defineProps({
    item: Number,
  });
  const itemData = ref(new Item({}))
  onMounted(async () => {
    itemData.value = new Item(await getItem(props.item))
  });
  function Download() {
    const link = document.createElement('a')
    link.href = itemData.value.file
    document.body.appendChild(link)
    let access = true;
    if (access) {
      link.click()
    }
    document.body.removeChild(link)
  }
</script>

<template>
  <div class="orderCard">
    <div class="subTitle">
      <h1>{{ itemData.name }}</h1>
    </div>
    <div class="description">
      <p>{{ itemData.description }}</p>
    </div>
    <div class="price">
      <p>{{ itemData.price }}</p>
    </div>
    <div class="rating">
      <p>{{ itemData.rating }}</p>
    </div>
    <div class="author">
      <p>{{ itemData.author }}</p>
    </div>
    <div class="btnBox">
      <button class="workButton" @click="Download()">Работы</button>
    </div>
  </div>
</template>

<style scoped>
.orderCard {
  position: relative;
  height: 15.81vw;
  width: 14.14vw;
  border: 2px solid #5c6973;
  background: linear-gradient(#21252c, #050505);
  border-image: linear-gradient(#5c6973, #1f232a);
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
    p {
      margin: 0;
      color: #5c6973;
    }
  }
  .subTitle {
    display: flex;
    word-break: keep-all;
    width: 90%;
  }
  h1 {
    color: #bbbbbb;
    margin: 1vw 0;
    margin-right: 1vw;
    font-size: 1.5vw;
  }
  button {
    cursor: pointer;
    font-size: 1vw;
    color: #a6aea3;
    border: 1.5px solid;
    border-image: linear-gradient(#f7bc1b, #655828) 1;
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
