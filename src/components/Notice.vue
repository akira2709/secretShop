<script setup>
  import { inject } from 'vue'
  const props = defineProps({
    notice: Object,
  })

  const notices = inject('notices')
</script>

<template>
  <div class="toast" id="toast">
    <img src="/cross.svg" alt="cross" class="cross" id="cross" @click="notices.pop()">
    <div class="toast-content">
      <div class="message">
        <span class="success">{{ notice.title }}</span>
        <span class="info">{{ notice.content }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast {
  will-change: transform;
  z-index: 11;
  position: fixed;
  top: 2vw;
  right: 3vw;
  border-radius: 1vw;
  background: #ffffff;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 20vw;
  height: 7vw;
}
.cross {
  cursor: pointer;
  position: absolute;
  top: 1vw;
  right: 1vw;
  transition: all .2s;
  &:hover {
    transition: all .2s;
    scale: 0.9;
    filter: brightness(0.6);
  }
  &:active {
    scale: 0.95;
  }
}
.toast-content {
  font-family: Arial, Helvetica, sans-serif;
  width: calc(100% - 2vw);
  height: calc(100% - 2vw);
  border-radius: 1vw;
  background: inherit;
  span {
    margin: 0;
  }
  .message {
    width: 100%;
    padding: 1vw 1vw;
    display: grid;
    .success {
      font-size: 2vw;
      color: #000;
    }
    .info {
      color: #333333cf;
    }
  }
}
</style>