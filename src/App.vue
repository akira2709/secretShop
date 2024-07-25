<script setup>
  import { onMounted, watch, ref, reactive, provide } from 'vue';
  import { checkIsAuth, Auth, checkJWT } from './functions.js'

  const user = ref(null)
  const filters = ref([])
  onMounted(async () => {
    user.value = await checkJWT()
    if (!user.value) {
      user.value = await checkIsAuth()
    }
  })
  provide('user', user)
  provide('filters', filters)
</script>

<template class="tem">
  <div v-if="!user">
    <div class="bg">
      <div class="auth">
        <div class="container">
          <div class="cont">
            <div class="tg">
              <div class="logo">
                <img src="/logoMe2Me.svg" alt="logo" class="logoImg"/>
              </div>
              <p class="bot">@t.me/meTWOme_bot</p>
            </div>
            <div class="btn-box">
              <button @click="Auth()">Авторизоваться</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
  <RouterView v-else></RouterView>
</template>


<style scoped>
.tg {
  background: #1e1e1e;
  position: relative;
  width: 15vw;
  height: 25vh;
  border-radius: 16px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
    height: 25vh;
  }
  .logoImg {
    margin-top: -6vh;
    width: 10vw;
    height: 25vh;
  }
  .bot {
    cursor: pointer;
    position: absolute;
    top: 17vh;
    left: 2vw;
    color: #A6AEA3;
  }
}

.btn-box {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
}
</style>
