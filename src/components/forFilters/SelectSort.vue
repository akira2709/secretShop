<script setup>
import { inject, ref } from 'vue'

const filters = inject('filters')
const props = defineProps({
  value: Array,
})
const isOpen = ref(false)
function check(val, arr) {
  return arr.includes(val)
}
function currentVal(val) {
  let currVal
  val.forEach((el) => {
    if (check(el, filters.value)) {
      currVal = el
      return 0;
    }
  })
  if (!currVal) {
    filters.value.push(val[0])
    currVal = val[0]
  }
  return currVal
}
function select(val) {
  isOpen.value = !isOpen.value
  for (let i = 0; i < filters.value.length; i++) {
    if (check(filters.value[i], props.value)) {
      filters.value[i] = val
    }
  }
}
</script>

<template>
  <div class="btn-default select-btn" v-if="!isOpen" @click="isOpen = !isOpen">
    <img src="/arrow-down.svg" alt="arrow down">
    <p>{{ currentVal(value) }}</p>
  </div>
  <div v-else class="btn-sort selected-btn">
    <div class="block" @click="select(value[0])">{{ value[0] }}</div>
    <div class="infoDivider block"></div>
    <div class="block" @click="select(value[1])">{{ value[1] }}</div>
    <div class="infoDivider block"></div>
    <div class="block" @click="select(value[2])">{{ value[2] }}</div>
    <div class="infoDivider block"></div>
    <div class="block" @click="select(value[3])">{{ value[3] }}</div>
  </div>
</template>

<style scoped>
.btn-sort {
  cursor: pointer;
  font-size: 1vw;
  color: #A6AEA3;
  border: 1.5px solid;
  border-image: linear-gradient(#F7BC1B, #655828) 1;
  background: linear-gradient(rgba(100, 76, 11, 0.41), #050505);
  width: calc(11.45vw - 2px);
  height: calc(2.7vw - 2px);
  box-shadow: 1px 1px 1px black;
}
.infoDivider {
  width: 100%;
  height: 2px;
  background: #667480;
}
.select-btn {
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0 1vw;
  img {
    height: 1.5vw;
    width: 1.5vw;
    margin-top: .2vw;
  }
  p {
    color: #A6AEA3;
    margin-left: 1vw;
  }
}
.selected-btn {
  z-index: 10;
  width: fit-content;
  height: fit-content;
  padding: 1vw;
  .block {
    margin-bottom: .5vw;
    display: flex;
    justify-content: center;
    align-items: center;
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