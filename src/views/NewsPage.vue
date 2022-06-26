<template>
  <div class="newsPage">
    {{ getOneNews }}
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(["getNewsById"]),
  },
  computed: {
    ...mapGetters(["getOneNews"]),
  },
  mounted() {
    console.log(this.$route);

    this.getNewsById(this.id);
  },
});
</script>
