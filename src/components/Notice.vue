<script setup>
</script>

<template>
  <div class="toast" id="toast">
    <img src="/cross.svg" alt="cross" class="cross" id="cross">
    <div class="toast-content">
      <div class="message">
        <span class="success">Чурка!</span>
        <span class="info">Сделай уведомления</span>
      </div>
      <div class="progress" id="progress"></div>
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
  transform: translate(100vw);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
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
  .progress {
    width: 20vw;
    height: 4px;
    background: #2770ff;
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
.active {
  transform: translate(0);
}
.move {
  animation: 5s progress forwards linear;
}
@keyframes progress {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>