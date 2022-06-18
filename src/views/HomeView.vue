<template>
  <div class="home">
    <VNav></VNav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VNav from "@/components/VNav.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    VNav,
  },
});
</script>
