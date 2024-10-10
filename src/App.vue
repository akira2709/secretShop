<script setup>
  import { onMounted, watch, ref, provide } from 'vue';
  import router from './main.js';
  import { ucFirst } from './functions.js';
  import { checkIsAuth, checkJWT, getItems } from './functions.js'
  import Notice from './components/Notice.vue'
  import Login from './components/Login.vue'
  import HomePage from './components/HomePage.vue'

  const user = ref(null)
  const filters = ref(['По дате'])
  const selectedItems = ref([])
  const totalPrice = ref(0)
  const items = ref([])
  const notices = ref([])
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
  provide('notices', notices)
  watch(filters.value, async () => {
    items.value = await getItems(filters.value)
  })
  router.beforeEach((to, from) => {
    if (from.query.subject && filters.value.includes(ucFirst(from.query.subject))) {
      let index = filters.value.indexOf(ucFirst(from.query.subject))
      filters.value.splice(index, 1)
    }
    if (to.query.subject) {
      if (!filters.value.includes(ucFirst(to.query.subject)) && to.query.subject !== 'all') {
        filters.value.push(ucFirst(to.query.subject))
      }
    }
  })
</script>

<template>
  <Notice v-for="notice in notices" :notice="notice" :key="notice"></Notice>
  <Login v-if="!user"></Login>
  <HomePage v-else></HomePage>
</template>


<style scoped>
</style>
