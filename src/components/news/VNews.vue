<template>
  <div class="new">
    <h2>{{ post.title }}</h2>
    <div class="intro">
      {{ post.introduction }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    post: {
      type: Object,
      require: true,
    },
  },
});
</script>
