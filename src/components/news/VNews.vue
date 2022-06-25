<template>
  <div class="new">
    <div class="img">
      <img :src="`${public}img/456.png`" alt="img" />
    </div>
    <div class="info">
      <h2>{{ post.title }}</h2>
      <div class="intro">
        {{ post.introduction }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new {
  width: 100%;
  height: auto;
  border: 1px solid #222bff;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  .img {
    width: 30%;
    img {
      width: 80%;
      height: auto;
    }
  }
  .info {
    width: 68%;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      public: process.env.BASE_URL,
    };
  },
  props: {
    post: {
      type: Object,
      require: true,
    },
  },
});
</script>
