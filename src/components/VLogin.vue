<template>
  <div class="win">
    <div class="login">
      <form>
        <h2>Авторизация</h2>
        <input type="email" name="Email" placeholder="Почта" v-model="email" />
        <input
          type="password"
          name="Password"
          placeholder="Пароль"
          v-model="password"
        />
      </form>
      <div class="error">
        {{ error }}
      </div>
      <div class="buttonBlock">
        <button class="button" @click="log">Зарегистрироваться</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.win {
  z-index: 2;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  .login {
    background: #fff;
    border-radius: 10px;
    padding: 0 15px 15px;
    form {
      display: flex;
      flex-direction: column;
      h2 {
        text-align: center;
      }
      input {
        height: 35px;
        border: 1px solid silver;
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 0 10px;
        font-size: 18px;
      }
    }
    .error {
      text-align: center;
      color: red;
      margin-bottom: 20px;
    }
    .buttonBlock {
      display: flex;
      justify-content: center;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async log() {
      try {
        const user = {
          email: this.email,
          password: this.password,
        };
        await this.login(user);
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
});
</script>
