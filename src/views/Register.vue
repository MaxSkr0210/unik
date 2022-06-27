<template>
  <div class="registration">
    <div class="window">
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="Имя"
          v-model="firstName"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Фамилия"
          v-model="lastName"
        />
        <input type="text" name="Email" placeholder="Почта" v-model="email" />
        <input
          type="text"
          name="Password"
          placeholder="Пароль"
          v-model="password"
        />
        <input
          type="text"
          name="RePassword"
          placeholder="Повторите пароль"
          v-model="rePassword"
        />
      </form>
      <button class="btn" @click="register">Зарегистрироваться</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.window {
  form {
    width: 30%;
    display: flex;
    flex-direction: column;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    ...mapActions(["registration"]),
    register() {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      this.registration(newUser);
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    next();
  },
});
</script>
