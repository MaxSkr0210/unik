<template>
  <div class="lk">
    {{ getUser }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(["getUser"]),
  },
});
</script>
