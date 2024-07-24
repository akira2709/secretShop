<script setup>
  import { ref } from 'vue'
  defineProps({
    value: String,
  })
  const isSelected = ref(false)
</script>

<template>
  <div class="select">
    <p>{{ value }}</p>
    <div class="inp" @click="isSelected = !isSelected">
      <img src="/arrow.svg" alt="arrow" v-if="isSelected">
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