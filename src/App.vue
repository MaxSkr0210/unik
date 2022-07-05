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

.btn {
  border: 1px solid #fff;
  background: #222bff;
  padding: 10px 15px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
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
    ...mapActions(["getAllNews"]),
  },
  mounted() {
    this.getAllNews();
  },
});
</script>
