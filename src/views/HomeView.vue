<template>
  <div class="home">
    <VNav></VNav>
    <div class="main">
      <!-- <VSlider :news="getNews"></VSlider> -->
      <!-- <button class="button">Зарегистрироваться</button>
      <button class="button">Войти</button> -->
      <VWin></VWin>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import VNav from "@/components/VNav.vue";
import VSlider from "@/components/VSlider.vue";
import VWin from "@/components/VWin.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    VNav,
    VSlider,
    VWin,
  },
  data() {
    return {
      registration: false,
    };
  },
  computed: {
    ...mapGetters(["getNews"]),
  },
});
</script>
