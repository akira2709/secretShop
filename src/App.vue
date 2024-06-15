<script setup>
  import { onMounted, watch, ref, reactive, provide } from 'vue';
  import axios from 'axios'

  const host = 'http://0.0.0.0:5000/'

  const user = ref()
  const profile = ref(false)
  async function Auth () {
    const {data} = await axios.get(`${host}auth`);
    const token = encodeURIComponent(data);
    document.cookie = `token=${token}`;
    window.location.href = `https://t.me/dfgvcxz_bot?start=${token}`;
  }

  async function isRegister () {
    let cookie = document.cookie.split('=')[1]
    try {
      const {data} = await axios.get(`${host}login/${cookie}`)
      if (data) {
        user.value = data[0]
      }
    } catch (er) {console.log(er)}
  }
  onMounted(async () => {
    await isRegister()
  })
  provide('profile', profile)
  provide('Auth', Auth)
  provide('user', user)
</script>

<template class="tem">
  <RouterView></RouterView>
</template>


<style scoped>
</style>
