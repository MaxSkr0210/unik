<template>
  <div class="slider">
    <VNews
      :post="post"
      v-for="post in news"
      :key="post.id"
      class="news"
    ></VNews>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  overflow: hidden;
  .news {
    // width: 100%;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import VNews from "@/components/news/VNews.vue";

export default defineComponent({
  components: {
    VNews,
  },
  props: {
    news: {
      type: Array,
    },
  },
  data() {
    return {
      widthSlider: 0,
    };
  },
  watch: {},
  mounted() {
    const slider = document.querySelector(".slider") as HTMLElement;
    this.widthSlider = slider.offsetWidth;
    console.log(this.widthSlider);

    const news = document.getElementsByClassName("news");

    console.log(news);

    for (let i = 0; i < news.length; i++) {
      const element = news[i];
      (element as HTMLElement).style.width = `${this.widthSlider}px`;
      console.log(element);
    }
  },
});
</script>
