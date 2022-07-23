<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./assets/fonts.scss";

* {
  box-sizing: border-box;
}

body {
  font-family: "Clear Sans", sans-serif;
  margin: 0;
  padding: 0;
}

input,
button,
a {
  outline: none;
}

.button {
  background: rgb(255, 0, 184);
  color: #fff;
  border: 1px solid rgb(255, 0, 184);
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 18px;
  margin-bottom: 10px;
  transition: color 0.6s ease-in-out;
}

.main {
  width: 75%;
  margin: 0 auto;
}

a {
  color: #000;
  text-decoration: none;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  methods: {
    ...mapActions(["getUserByToken"]),
  },
  mounted() {
    this.getUserByToken();
  },
});
</script>
