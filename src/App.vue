<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./assets/fonts.scss";

* {
  font-family: "Clear Sans", sans-serif;
}

body {
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

@for $i from 1 to 6 {
  h#{$i} {
  }
}
</style>
