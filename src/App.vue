<script setup>
  import { onMounted, watch, ref, reactive, provide } from 'vue';
  import { checkIsAuth, checkJWT, getItems } from './functions.js'
  import Notice from './components/Notice.vue'
  import Login from './components/Login.vue'
  import HomePage from './components/HomePage.vue'

  const user = ref(null)
  const filters = ref(['По дате'])
  const selectedItems = ref([])
  const totalPrice = ref(0)
  const items = ref([])
  onMounted(async () => {
    user.value = await checkJWT()
    if (!user.value) {
      user.value = await checkIsAuth()
    }
    items.value = await getItems(filters.value)
  })
  provide('user', user)
  provide('filters', filters)
  provide('selectedItems', selectedItems)
  provide('totalPrice', totalPrice)
  provide('items', items)
  watch(filters.value, async () => {
    items.value = await getItems(filters.value)
  })
</script>

<template>
  <Notice></Notice>
  <Login v-if="!user"></Login>
  <HomePage v-else></HomePage>
</template>


<style scoped>
</style>
