<script setup>
import { inject } from 'vue'
  const props = defineProps({
    value: String,
  })
  const filters = inject('filters')
  function action(val) {
    if (check(val, filters.value)) {
      filters.value = filters.value.filter((el) => el !== val)
    } else {filters.value.push(val)}
  }
  function check(val, arr) {
    return arr.includes(val)
  }
</script>

<template>
  <div class="select">
    <p>{{ value }}</p>
    <div class="inp" @click="action(value)">
      <img src="/arrow.svg" alt="arrow" v-if="check(value, filters)">
    </div>
  </div>
</template>

<style scoped>
.select {
  margin-top: 1vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;
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
    img {
      height: 80%;
      width: 80%;
    }
  }
}
p {
  font-size: 1.5vw;
  margin: 0;
  color: #BBBBBB;
}
</style>