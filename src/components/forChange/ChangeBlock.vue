<script setup>
  import { ref, onMounted, inject } from 'vue'
  import { getSubjects, ucFirst } from '/src/functions.js'

  const props = defineProps({
    name: String,
    mode: String,
  })
  const data = inject('data')
  const types = ['Самостоятельная', 'Контрольная', 'Домашняя']

  const isOpen = ref(false)
  const value = ref()
  const values = ref([])
  
  function select(choice) {
    value.value = choice
    data.value[props.mode] = choice
    data.name = choice
    let index = values.value.indexOf(choice)
    values.value.splice(index, 1)
    values.value.unshift(choice)
  }
  
  onMounted(async () => {
    if (props.mode === 'type') {
      value.value = types[0]
      values.value = types
    } else {
      let data = await getSubjects()
      values.value = data.map((el) => ucFirst(el.name))
      value.value = values.value[0]
    }
    data.value[props.mode] = value.value
  })
</script>

<template>
	<div class="inpBlock">
	    <p>{{ name }}</p>
      <div class="select-close" v-if="!isOpen" @click="isOpen = !isOpen">
        <img src="/arrow-down.svg" alt="arrow down" class="arrow">
        <p>{{ value }}</p>
      </div>
      <div v-else class="select-open" @click="isOpen = !isOpen">
        <img src="/arrow-up.svg" alt="arrow down" class="arrow">
        <div v-for="val in values" class="choiceBox" @click="select(val)">
          <p>{{ val }}</p>
        </div>
      </div>
	</div>
</template>

<style scoped>
.inpBlock {
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 1vw;
	p {
		color: #BBBBBB;
		font-size: 1.5vw;
		margin: 0;
	}
  .select-close {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13vw;
    padding: .3vw .5vw;
    border: 2px solid #5C6973;
		background: inherit;
		border-image: linear-gradient(#5C6973, #1F232A);
		border-image-slice: 1;
    .arrow {
      height: 1.2vw;
      width: 1vw;
    }
    p {
      color: #5C6973;
	    font-size: 1vw;	
    }
  }
  .select-open {
    width: 13vw;
    padding: .3vw .5vw;
    border: 2px solid #5C6973;
		background: inherit;
		border-image: linear-gradient(#5C6973, #1F232A);
		border-image-slice: 1;
    .arrow {
      cursor: pointer;
      position: absolute;
      height: 1.2vw;
      width: 1vw;
    }
    .choiceBox {
      float: right;
      width: 100%;
      cursor: pointer;
      p {
        width: fit-content;
        margin-left: auto;
        color: #5C6973;
        font-size: 1vw;	
      }
    }
  }
}
</style>