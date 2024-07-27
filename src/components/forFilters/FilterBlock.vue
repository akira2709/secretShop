<script setup>
import { ref } from 'vue'
  import SelectBlock from '@/components/forFilters/SelectBlock.vue'
  const props = defineProps({
    title: String,
    values: Array,
  })
  const isOpen = ref(true)
</script>

<template>
  <div class="filter-block">
    <div class="block">
      <img src="/arrow-up.svg" alt="arrow-up" id="arrow-down-or-up" v-show="!isOpen" @click="isOpen = !isOpen"/>
      <img src="/arrow-down.svg" alt="arrow-down" id="arrow-down-or-up" v-show="isOpen" @click="isOpen = !isOpen"/>
      <p>{{ title }}</p>
    </div>
    <div class="divider"></div>
    <SelectBlock v-for="value in values" :key="value" :value="value" v-show="isOpen"/>
  </div>
</template>

<style scoped>
.filter-block {
  margin-bottom: 2vw;
}
.block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;
  #arrow-down-or-up {
    width: 2vw;
    height: 2vw;
    cursor: pointer;
    transition: .3s all;
  }
}
p {
  font-size: 1.5vw;
  margin: 0;
  color: #BBBBBB;
}
.divider {
  margin-top: .5vw;
  margin-left: 1vw;
  width: calc(100% - 2vw);
  height: 1px;
  background: #667480;
}
</style>