<template>
  <div id="window">
    <h2>БУДЬ ВСЕГДА В КУРСЕ!</h2>
    <div class="info">
      <div class="img">
        <unik></unik>
      </div>
      <div class="square first"></div>
      <div class="square second"></div>
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
          <button class="button">Зарегистрироваться</button>
          <button class="button">Войти</button>
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
    width: 40%;
  }
  .square {
    background: rgba(255, 0, 184, 0.75);
    opacity: 0.5;
    filter: blur(1px);
    position: absolute;
  }
  .first {
    height: 173px;
    width: 228px;
    top: 0;
    left: -1230px;
  }
  .second {
    height: 186px;
    width: 275px;
    bottom: 0;
    left: -900px;
  }
  .text {
    width: 55%;
    font-size: 21px;
    position: relative;
  }
  .buttons {
    position: absolute;
    bottom: 8px;
    .button {
      background: rgba(255, 0, 184, 0.75);
      color: #fff;
      border: 1px solid rgba(255, 0, 184, 0.75);
      border-radius: 8px;
      padding: 10px 15px;
      font-size: 18px;
      font-family: "DotGothic16", sans-serif;
      margin-right: 20px;
      transition: color 0.6s ease-in-out;
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
    justify-content: space-between;
  }
  .right {
    transition-duration: 1.5s;
    transition-property: left;
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
  mounted() {
    const firstSquare = document.querySelector(".first") as HTMLElement;
    const secondSquare = document.querySelector(".second") as HTMLElement;
    firstSquare.className += " right";
    secondSquare.className += " right";
    setTimeout(() => {
      firstSquare.style.left = "230px";
      secondSquare.style.left = "0px";
    }, 0);
  },
});
</script>
