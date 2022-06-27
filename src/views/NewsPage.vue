<template>
  <VNav></VNav>
  <div class="newsPage main">
    {{ getOneNews }}
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import VNav from "@/components/VNav.vue";

export default defineComponent({
  components: {
    VNav,
  },
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
    this.getNewsById(this.id);
  },
});
</script>
