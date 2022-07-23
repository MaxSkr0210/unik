<template>
  <div class="home">
    <VNav></VNav>
    <div class="main">
      <!-- <VSlider :news="getNews"></VSlider> -->
      <!-- <button class="button">Зарегистрироваться</button>
      <button class="button">Войти</button> -->
      <VWin
        @register="registration"
        @login="log"
        v-if="user.length === 0"
      ></VWin>
      <div class="W" v-if="reg || login">
        <VRegister v-if="reg" @close="closeWindow"></VRegister>
        <VLogin v-if="login" @close="closeWindow"></VLogin>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.W {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import VNav from "@/components/VNav.vue";
import VSlider from "@/components/VSlider.vue";
import VWin from "@/components/VWin.vue";
import VRegister from "@/components/VRegister.vue";
import VLogin from "@/components/VLogin.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    VNav,
    VSlider,
    VWin,
    VRegister,
    VLogin,
  },
  data() {
    return {
      reg: false,
      login: false,
      user: "",
    };
  },
  computed: {
    ...mapGetters(["getNews"]),
  },
  methods: {
    registration(data: boolean) {
      this.reg = data;
    },
    log(data: boolean) {
      this.login = data;
    },
    closeWindow(data: boolean) {
      this.reg = data;
      this.login = data;
    },
  },
  mounted() {
    this.user = localStorage.getItem("user") as string;
  },
});
</script>
