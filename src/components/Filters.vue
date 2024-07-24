<script setup>
import { inject, onMounted, ref } from 'vue'
import FilterBlock from '@/components/forFilters/FilterBlock.vue'
const user = inject('user')
const params = {
  subject: ['Математика', 'Русский язык', 'ОБЖ', 'Информатика'],
  classNumber: ['6 класс', '7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
  workType: ['Самостоятельная работа', 'Контрольная работа', 'Домашняя работа'],
}
</script>

<template>
  <div class="bg">
  </div>
  <div class="profile">
    <div class="back" @click="$router.go(-1)">
      <img src="/public/arrow-left.svg" alt="arrow">
      <button>Назад</button>
    </div>
    <span class="username">{{ user.username }}</span>
    <div class="divider"></div>
    <div class="info">
      <FilterBlock title="Предмет" :values="params.subject"></FilterBlock>
      <FilterBlock title="Класс" :values="params.classNumber"></FilterBlock>
      <FilterBlock title="Тип" :values="params.workType"></FilterBlock>
    </div>
  </div>
</template>

<style scoped>

.profile {
  user-select: none;
  overflow: scroll;
  position: fixed;
  top: 0;
  right: 0;
  width: 30.9375vw;
  opacity: 1;
  height: 100%;
  background: linear-gradient(#1B1C1E, #111112);
  z-index: 10;
  border-left: 2px solid;
  border-image: linear-gradient(#697783, #373E44) 1;
  animation: opening .3s forwards;
}
.back {
  display: flex;
  margin-top: 2.03vw;
  width: 7.76vw;
  height: 2.3vw;
  margin-left: 2.44vw;
  cursor: pointer;
  button {
    background: inherit;
    border: none;
    color: #BBB;
    font-size: 1.5vw;
    transition: all 300ms;
    cursor: pointer;
  }
  img {
    height: 2vw;
    margin-top: .2vw;
  }
  &:hover {
    button{
      padding: 0;
      transition: all 300ms;
    }
  }
}
.divider {
  position: absolute;
  top: 7.03vw;
  width: 30.9375vw;
  height: 2px;
  background: #667480;
}
.info {
  position: absolute;
  top: 7.03vw;
  width: calc(30.9375vw - 2vw);
  min-height: calc(100vh - 9.03vw);
  padding: 1vw;
  h1 {
    margin: 0;
    font-size: 1.5vw;
    color: #BBBBBB;
  }
  .balance {
    margin-top: 3vw;
    margin-bottom: 2vw;
    width: calc(100% - 2vw);
    padding: 0 1vw;
    max-height: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .addButton {
      display: flex;
      align-items: center;
      p {
        margin: 0;
        font-size: 1.5vw;
        color: #5C6973;
      }
      img {
        height: 2.3vw;
        margin-left: .6vw;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          scale: 0.9;
          transition: all .3s;
        }
        &:active {
          scale: 0.8;
        }
      }
    }

  }
  .rating {
    display: flex;
    height: 2vw;
    .rate {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: .6vw;
      padding-top: .3vw;
    }
    svg {
      height: 2vw;
    }
    .stars {
      position: absolute;
      display: flex;
    }
  }
  .infoDivider {
    width: 100%;
    height: 2px;
    background: #667480;
    margin-top: 3vw;
  }
  .offers {
    padding: 0 1vw 2vw;
    h1 {
      margin-top: 2vw;
    }
    .myOffers {
      position: relative;
      margin-top: 2vw;
      min-height: 5vw;
      border: 1px solid #292E33;
      border-radius: 0.8vw;
      background: #000;
      padding-bottom: 2.3vw;
      .offerInfo {
        display: flex;
        position: absolute;
        bottom: 0;
        width: calc(100% - 2vw);
        height: 2.3vw;
        align-items: center;
        justify-content: space-between;
        padding: 0 1vw;
        h1 {
          margin: 0;
          font-size: 1.15vw;
        }
        .open {
          display: flex;
          gap: .4vw;
          cursor: pointer;
          img {
            margin-top: .3vw;
          }
        }
      }
      .offerCard {
        h1 {
          margin: 0;
        }
        height: 5vw;
        width: calc(100% - 2vw);
        padding: 0 1vw;
        border-bottom: 1px solid #292E33;
        margin-top: .5vw;
        .offerData {
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            margin: 0;
            color: #5C6973;
          }
        }
      }
      .noOffers {
        margin-top: 2.3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 5vw;
          height: 5vw;
        }
        h1 {
          margin: .3vw 1vw 0;
        }
      }
    }
  }
}
.username {
  top: 2.5vw;
  right: 2vw;
  position: absolute;
  color: #BBBBBB;
  font-size: 1.5vw;
  font-weight: bold;
}
@keyframes opening {
  0% {
    width: 0;
  }
  100% {
    width: 30.9375vw;
  }
}
</style>