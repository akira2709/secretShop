<script setup>
  import Header from '@/components/Header.vue'
  import SideBar from '@/components/SideBar.vue'
  import Main from '@/components/Main.vue'
</script>

<template>
  <Header />
  <SideBar />
  <Main />
  <RouterView></RouterView>
</template>

<style scoped>

</style>