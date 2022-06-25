<template>
  <VNav></VNav>
  <div class="news">
    <VNews :post="post" v-for="post in getNews" :key="post.id"></VNews>
  </div>
</template>

<style lang="scss" scoped>
.news {
  width: 75%;
  margin: 0 auto;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import VNews from "@/components/news/VNews.vue";
import VNav from "@/components/VNav.vue";

export default defineComponent({
  components: {
    VNews,
    VNav,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getNews"]),
  },
  methods: {
    ...mapActions(["getAllNews"]),
  },
  mounted() {
    this.getAllNews();
  },
});
</script>
