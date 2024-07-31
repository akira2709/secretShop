<script setup>
import { inject, onMounted, ref } from 'vue'
import { getItem, removeFromBasket } from '@/functions.js'

const props = defineProps({
  item_id: Number,
  countPrice: Function,
})
const item = ref({
  id: Number,
  name: String,
  price: Number,
  date: Date,
  author: String,
  type: String,
  subject: String,
});
const selectedItems = inject('selectedItems')
const user = inject('user')
onMounted(async () => {
  item.value = await getItem(props.item_id)
})
function select() {
  if (!selectedItems.value.includes(item.value.id)) {
    selectedItems.value.push(item.value.id)
    props.countPrice(item.value.price, '+')
  } else {
    selectedItems.value.splice(selectedItems.value.indexOf(item.value.id), 1)
    props.countPrice(item.value.price, '-')
  }
}
async function remove() {
  user.value = await removeFromBasket(props.item_id, user.value.user_id)
  if (selectedItems.value.includes(props.item_id)) {
    selectedItems.value.splice(selectedItems.value.indexOf(item.value.id), 1)
    props.countPrice(item.value.price, '-')
  }
}
</script>

<template>
  <article>
    <div>
      <h1>{{ item.type }}, {{ item.subject }}, {{ item.id }}</h1>
    </div>
    <div class="info">
      <div>
        <p>
          {{ item.name }}
        </p>
        <p>
          {{ item.price }} Shr
        </p>
      </div>
      <div class="buttons">
        <button>Купить</button>
        <div class="inp" @click="select()">
          <img src="/arrow.svg" alt="arrow" v-show="selectedItems.includes(item.id)">
        </div>
        <div class="inp" @click="remove()">
          <img src="/cross.svg" alt="cross" id="cross">
        </div>
      </div>
    </div>
  </article>
  <div class="infoDivider"></div>
</template>

<style scoped>
article {
  padding: 1vw;
}
.infoDivider {
  width: calc(100% - 2vw);
  height: 1px;
  background: #667480;
  margin-left: 1vw;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .buttons {
    display: flex;
    gap: .5vw;
    button {
      width: 6vw;
      height: 2.1vw;
    }
  }
}
h1 {
  margin: 0;
  font-size: 1.5vw;
  color: #BBBBBB;
}
p {
  color: #5C6973;
  font-size: 1.2vw;
  margin: .3vw;
}
.inp {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8vw;
  height: 1.8vw;
  border: #5C6973 2px solid;
  border-radius: 2px;
  background: inherit;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    scale: 0.95;
    transition: all .2s;
  }
  img {
    height: 80%;
    width: 80%;
  }
  #cross {
    height: 60%;
    width: 60%;
  }
}
button {
  cursor: pointer;
  font-size: 1.2vw;
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
</style>