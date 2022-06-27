<template>
  <nav>
    <div id="logo">
      <router-link to="/"> <span>U</span>NIK </router-link>
    </div>
    <div class="asdf">
      <div id="menu">
        <ul>
          <li><router-link to="/news">Новости</router-link></li>
          <li>Поиск единомышленников</li>
          <li>UNIKкнижка</li>
          <li>О нас</li>
        </ul>
      </div>
      <div id="registration" v-if="!isAuth">
        <ul>
          <li>
            <router-link to="/registration" class="btn"
              >Регистрация</router-link
            >
          </li>
          <li>
            <router-link to="/registration" class="btn">Войти</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="menuBtn">
      <button class="btn" @click="OpenMenu()">menu</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 25px 0;
  position: relative;
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  #logo {
    font-size: 30px;
    a {
      color: #222bff;
    }
    span {
      color: #ff1515;
      font-size: 30px;
      font-weight: bold;
    }
  }
  .asdf {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
  #menu {
    width: 55%;
    ul {
      width: 100%;
    }
  }
  #menu,
  #registration {
    display: flex;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .btn {
    transition: 0.5s all ease-out;
    &:hover {
      background: #fff;
      color: #222bff;
      border: 1px solid #222bff;
    }
  }
  .menuBtn {
    display: none;
  }
}

@media screen and (min-width: 1001px) {
  nav {
    .asdf {
      display: flex;
    }
  }
}

@media screen and (max-width: 1320px) {
  nav {
    .asdf {
      width: 80%;
    }
  }
}

@media screen and (max-width: 1085px) {
  nav {
    .asdf {
      width: 85%;
    }
  }
}

@media screen and (max-width: 1000px) {
  nav {
    .asdf {
      /* */
      display: none;
      position: absolute;
      top: 175px;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      flex-direction: column-reverse;
      align-items: center;
    }
    ul {
      flex-direction: column;
      align-items: center;
      li {
        text-align: center;
        margin-bottom: 15px;
        width: 100%;
        margin-right: 0;
      }
    }
    #registration ul {
      flex-direction: row;
      li {
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .menuBtn {
      display: block;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      open: false,
      isAuth: false,
    };
  },
  methods: {
    ...mapActions([""]),
    OpenMenu() {
      const menu: HTMLElement = document.getElementsByClassName(
        "asdf"
      )[0] as HTMLElement;
      if (this.open) {
        menu.style.display = "none";
        this.open = !this.open;
      } else {
        menu.style.display = "flex";
        this.open = !this.open;
      }
    },
  },
  mounted() {
    console.log(document.cookie);
  },
});
</script>
