<template>
  <div id="window">
    <h2>БУДЬ ВСЕГДА В КУРСЕ!</h2>
    <div class="info">
      <div class="img">
        <unik></unik>
      </div>
      <div class="text">
        <p>После регистрации ты сможешь:</p>
        <ul>
          <li>получать анонсы топовых мероприятий и участвовать в них</li>
          <li>искать единомышленников по всей России</li>
          <li>
            заполнять свою UniKнижку и выигрывать крутые призы от партнеров
          </li>
        </ul>
        <div class="buttons">
          <button class="button" @click="$emit('register', true)">
            Зарегистрироваться
          </button>
          <button class="button" @click="$emit('login', true)">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#window {
  font-family: "DotGothic16", sans-serif;
  h2 {
    font-size: 72px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .img {
    width: 460px;
    position: relative;
  }

  .text {
    width: 55%;
    font-size: 21px;
    position: relative;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    bottom: 8px;
    .button {
      background: rgba(255, 0, 184, 0.75);
      color: #fff;
      border: 1px solid rgba(255, 0, 184, 0.75);
      border-radius: 8px;
      padding: 10px 15px;
      font-size: 18px;
      font-family: "DotGothic16", sans-serif;
      margin-bottom: 10px;
      transition: color 0.6s ease-in-out;
      &:last-child {
        margin: 0;
      }
      &:hover {
        background: #fff;
        color: #ff00b8;
      }
    }
  }
  .info {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

@media screen and (max-width: 1362px) {
  #window {
    h2 {
      font-size: 60px;
    }
    .img {
      width: 350px;
    }
    .text {
      font-size: 16px;
    }
    .buttons {
      .button {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 1048px) {
  #window {
    h2 {
      font-size: 50px;
    }
    .img {
      width: 350px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .text {
      width: 100%;
      font-size: 16px;
    }
    .buttons {
      .button {
        font-size: 16px;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import unik from "@/components/svg/image.vue";
export default defineComponent({
  components: {
    unik,
  },
  methods: {},
});
</script>
