<template>
  <VNav></VNav>
  <div class="news main">
    <VNews :post="post" v-for="post in getNews" :key="post.id"></VNews>
  </div>
</template>

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
